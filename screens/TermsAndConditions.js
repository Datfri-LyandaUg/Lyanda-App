import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import {
  ChevronLeftIcon,
} from 'react-native-heroicons/solid';
import PrimaryButton from '../components/PrimaryButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TermsAndConditions = ({ navigation }) => {

  useEffect(() => {

    const checkTermsAndConditions = async () => {
      try {
        const isCheckedTermsAndConditions = await AsyncStorage.getItem('isCheckedTermsAndConditions');
        if (isCheckedTermsAndConditions === null) {
          // This is the first launch..
          await AsyncStorage.setItem('isCheckedTermsAndConditions', 'true');

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
    <SafeAreaView className="relative flex-1 bg-white">
      <View className="flex-1">
        <View className="flex-row items-center mt-7  mb-2 justify-center relative ">
          <TouchableOpacity
            className="absolute left-2.5"
          >
            <ChevronLeftIcon color="#616161" size={26} />
          </TouchableOpacity>

          <Text className="text-[#242424] text-[17px] font-[600]">
            Terms and privacy policy
          </Text>
        </View>

        <View className="border-[#E0E0E0] border-[0.5px] mt-2 "></View>

        <View className=" mt-7 mx-4">
          <Text className="font-[400] text-[17px] text-[#242424] mb-6 ">
            By selecting "I understand" below, i agree to the
          </Text>

          <View className="flex-row">
            <Text className="text-[#25591C] text-[17px] font-[400] mr-2  border-b-2 border-[#25591C]">
              Terms of use
            </Text>
            <Text className="font-[400] text-[17px] text-[#242424]">
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
