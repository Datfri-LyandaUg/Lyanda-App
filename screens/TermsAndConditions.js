import {
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import React, { useContext, useEffect } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';
import PrimaryNav from '../components/PrimaryNav';

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
      
        <PrimaryNav title={"Terms and privacy policy"}/>

        <View className="mt-7 mx-4">
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
