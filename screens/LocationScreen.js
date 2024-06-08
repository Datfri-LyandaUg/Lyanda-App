import React, { useContext } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import Geolocation from 'react-native-geolocation-service';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import SecondaryButton from '../components/SecondaryButton';
import PrimaryButton from '../components/PrimaryButton';
import colors from '../config/colors';
import { ThemeContext } from '../utils/ThemeContext';

const LocationScreen = ({ navigation }) => {

  const { theme } = useContext(ThemeContext);

  const requestLocationPermission = async () => {
    let permission;
    if (Platform.OS === 'android') {
      permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
    } else {
      permission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
    }

    const result = await request(permission);

    if (result === RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(
        position => {
          console.log('Position:', position);
          Alert.alert('Location accessed successfully');
          navigation.navigate('NotificationScreen')
        },
        error => {
          console.error(error);
          Alert.alert('Failed to access location');
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } else {
      Alert.alert('Location permission denied');
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background
      }}
      className="relative flex-1">
      <View className="flex-1">
        <View style={{
          backgroundColor: theme === 'dark' ? colors.dark.container : colors.light.background
        }} className={`flex-row items-center relative  py-4 justify-center`}>
          <TouchableOpacity
            className="absolute  left-2.5 w-10"
            onPress={() => navigation.goBack()}>
            <ChevronLeftIcon color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} size={20} />
          </TouchableOpacity>

          <Text style={{
            color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
          }} className={`text-[17px] font-[600] `}>
            Location access
          </Text>
        </View>

        {theme === 'light' && (<View className="border-[#E0E0E0] border-[0.5px] " />)}

        <View className=" mt-7 mx-4">
          <Text
            style={{
              color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
            }}
            className="font-[700] text-[28px] text-[#242424] mb-1 ">
            Allow location access to
          </Text>

          <Text
            style={{
              color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
            }} className="font-[700] text-[28px] text-[#242424] mb-3 ">
            confirm your address
          </Text>
        </View>
        <Text
          style={{
            color: theme === 'light' ? colors.light.text : colors.dark.text
          }}
          className=" font-[400] text-[17px] text-[#242424] mx-4">
          Our app lets you place orders and track fuel
        </Text>
        <Text
          style={{
            color: theme === 'light' ? colors.light.text : colors.dark.text
          }} className=" font-[400] text-[17px] text-[#242424] mx-4">
          deliveries in real-time.
        </Text>
      </View>

      <View className="items-center  mb-8  px-4">
        <PrimaryButton handlePress={requestLocationPermission} text='Allow location access' />

        <SecondaryButton title='Not Now' handleOnPress={() => navigation.navigate('Home')} />
      </View>
    </SafeAreaView>
  );
};

export default LocationScreen;
