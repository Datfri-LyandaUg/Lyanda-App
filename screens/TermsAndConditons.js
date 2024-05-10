import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  ChevronLeftIcon,
} from 'react-native-heroicons/solid';
const TermsAndConditons = ({ navigation }) => {
  return (
    <SafeAreaView className="relative flex-1 bg-white">
      <View className="flex-1">
        <View className="flex-row items-center mt-7   mb-2 justify-center relative ">
          <TouchableOpacity
            className="absolute left-2.5"
            onPress={() => { }}>
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

      <View className="items-center  mb-6  ">
        <TouchableOpacity
          onPress={() => navigation.navigate('NotificationScreen')}
          className="w-[361] h-[52]  justify-center items-center bg-[#2C7721] rounded-[12px] mt-6">
          <Text className="text-white text-[17px] font-[600]">Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TermsAndConditons;
