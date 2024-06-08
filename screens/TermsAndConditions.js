import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, { useContext, useEffect } from 'react';
import {
  ChevronLeftIcon,
} from 'react-native-heroicons/solid';
import PrimaryButton from '../components/PrimaryButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';

const TermsAndConditions = ({ navigation }) => {

  const { theme } = useContext(ThemeContext);

  useEffect(() => {

    const checkTermsAndConditions = async () => {
      try {
        const isCheckedTermsAndConditions = await AsyncStorage.getItem('isCheckedTermsAndConditions');
        if (isCheckedTermsAndConditions === null) {
          // This is the first launch.
          await AsyncStorage.setItem('isCheckedTermsAndConditions', 'true');
          const timer = setTimeout(() => {
            //
          }, 1000);
          return () => clearTimeout(timer);

        } else {
          // Already Checked Terms And Conditions.
          navigation.navigate('Home');
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkTermsAndConditions();

  }, [navigation]);


  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background
      }}
      className="relative flex-1">
      <View className="flex-1">
        <View
          style={{
            backgroundColor: theme === 'dark' ? colors.dark.container : colors.light.background
          }}
          className="flex-row items-center py-4 justify-center relative ">
          <TouchableOpacity
            className="absolute left-2.5 w-10"
          >
            <ChevronLeftIcon color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} size={26} />
          </TouchableOpacity>

          <Text
            style={{
              color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
            }}
            className="text-[17px] font-[600]">
            Terms and privacy policy
          </Text>
        </View>

        { theme === 'light' && (<View className="border-[#E0E0E0] border-[0.5px] mt-2 " />)}

        <View className=" mt-7 mx-4">
          <Text
            style={{
              color: theme === 'light' ? colors.light.text : colors.dark.text
            }}
            className="font-[400] text-[17px] mb-6 ">
            By selecting "I understand" below, i agree to the
          </Text>

          <View className="flex-row">
            <Text className="text-[#25591C] text-[17px] font-[400] mr-2  border-b-2 border-[#25591C]">
              Terms of use
            </Text>
            <Text
              style={{
                color: theme === 'light' ? colors.light.text : colors.dark.text
              }}
              className="font-[400] text-[17px]">
              and acknowledge the
            </Text>
          </View>
          <Text className="text-[#25591C] text-[17px] font-[400] mr-2  mt-7 border-b-2 border-[#25591C] w-[106]">
            Privacy Policy
          </Text>
        </View>
      </View>

      <View className="items-center  mb-8  px-4">
        <PrimaryButton text='Continue' handlePress={() => navigation.navigate('NotificationScreen')} />
      </View>
    </SafeAreaView>
  );
};

export default TermsAndConditions;
