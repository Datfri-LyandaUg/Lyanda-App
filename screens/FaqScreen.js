import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'

const FaqScreen = ({ navigation }) => {
  return (
    <SafeAreaView className=" bg-white h-full">
      <View className="flex-row items-center mt-7 relative mb-2  justify-center">
        <TouchableOpacity
          className="absolute  left-2.5 w-10"
          onPress={() => navigation.goBack()}>
          <ChevronLeftIcon color="#616161" size={20} />
        </TouchableOpacity>

        <Text className="text-[#242424] text-[17px] font-[600]">
          FAQ
        </Text>
      </View>

      <View className="border-[#E0E0E0] border-[0.5px]"></View>

      <View className='items-center px-2 mt-4'>

        <View className='w-full bg-[#FAFAFA]  rounded-[12px] space-y-4 py-7'>

          <View className='mx-5 space-y-5s'>
            <Text className='text-[17px] font-[600]   mt-7 text-[#242424]'>What is the purpose of this app?</Text>
            <Text className='text-[13px] font-[400]  text-[#242424]'>
              This battery ordering app is designed to provide a convenient and efficient way for users to order batteries for their bikes faster and easily.
            </Text>

          </View>

          <View

            className='mx-5  space-y-3'>

            <Text className='text-[17px] font-[600]   mt-7 text-[#242424]'>How does the app work?</Text>
            <Text className='text-[13px] font-[400]  text-[#242424]'>
              Users can download the app, create an account, select the station from which they want a battery. They can then book/pay for the battery before traveling to the station.
            </Text>

          </View>
          <View className='mx-5  space-y-3'>
            <Text className='text-[17px] font-[600]   mt-7 text-[#242424]'>Are there any discounts or loyalty programs
              available for frequent users?</Text>
            <Text className='text-[13px] font-[400]  text-[#242424]'>
              Yes, we offer discounts and loyalty programs for our regular customers. You can check the "Promotions" section in the app for current offers and loyalty rewards.
            </Text>

          </View>
          <View

            className='mx-5  space-y-5'>

            <Text className='text-[17px] font-[600]   mt-7 text-[#242424]'>Is it safe to provide my payment information
              on this app?</Text>
            <Text className='text-[13px] font-[400]  text-[#242424]'>
              Yes, we take the security of your payment information seriously. Our app uses encryption technology to protect your data, and we do not store sensitive payment details on our servers.</Text>
          </View>

          <View

            className='mx-5  space-y-5'>

            <Text className='text-[17px] font-[600]   mt-7 text-[#242424]'>Is this app available on both Android and iOS
              devices?</Text>

            <View>
              <Text className='text-[13px] font-[400]  text-[#242424]'>
                Yes, our app is available for download on both Android and iOS devices.
              </Text>
            </View>
          </View>

        </View>
      </View>

    </SafeAreaView>
  )
}

export default FaqScreen