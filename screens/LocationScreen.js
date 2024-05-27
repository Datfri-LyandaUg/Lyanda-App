import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import Geolocation from 'react-native-geolocation-service';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import SecondaryButton from '../components/SecondaryButton';
import PrimaryButton from '../components/PrimaryButton';

const LocationScreen = ({ navigation }) => {
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
    <SafeAreaView className="relative flex-1 bg-white">
      <View className="flex-1">
        <View className="flex-row items-center mt-7 mx-3 space-x-12 ">
          <View className="">
            <TouchableOpacity className="" onPress={() => navigation.goBack()}>
              <ChevronLeftIcon color="#616161" size={26} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="border-[#E0E0E0] border-[0.5px] mt-2 "></View>

        <View className=" mt-7 mx-4">
          <Text className="font-[700] text-[28px] text-[#242424] mb-1 ">
            Allow location access to
          </Text>

          <Text className="font-[700] text-[28px] text-[#242424] mb-3 ">
            confirm your address
          </Text>
        </View>
        <Text className=" font-[400] text-[17px] text-[#242424] mx-4">
          Our app lets you place orders and track fuel
        </Text>
        <Text className=" font-[400] text-[17px] text-[#242424] mx-4">
          deliveries in real-time.
        </Text>
      </View>

      <View className="items-center  mb-8  px-4">
        <PrimaryButton handlePress={requestLocationPermission} text='Allow location access' />

        <SecondaryButton title='Not Now' handleOnPress={() => navigation.navigate('NotificationScreen')} />
      </View>
    </SafeAreaView>
  );
};

export default LocationScreen;
