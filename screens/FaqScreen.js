import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';

const FaqScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background
      }}
      className="h-full">
      <View
        style={{
          backgroundColor: theme === 'dark' ? colors.dark.container : colors.light.background
        }}

        className="flex-row items-center py-4 relative justify-center">
        <TouchableOpacity
          className="absolute  left-2.5 w-10"
          onPress={() => navigation.goBack()}>
          <ChevronLeftIcon color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} size={20} />
        </TouchableOpacity>

        <Text
          style={{
            color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
          }}
          className="text-[17px] font-[600]">
          FAQ
        </Text>
      </View>

      { theme === 'light' && (<View className="border-[#E0E0E0] border-[0.5px]"/>)}

      <View className='items-center px-2 mt-4'>

        <View
          style={{
            backgroundColor: theme === 'light' ? colors.light.container : colors.dark.container
          }}
          className='w-full rounded-[12px] pb-5'>

          <View className='mx-5 space-y-3'>
            <Text
              style={{
                color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
              }}
              className='text-[17px] font-[600]   mt-7'>What is the purpose of this app?</Text>
            <Text
              style={{
                color: theme === 'light' ? colors.light.text : colors.dark.text
              }}
              className='text-[13px] font-[400]'>
              This battery ordering app is designed to provide a convenient and efficient way for users to order batteries for their bikes faster and easily.
            </Text>
          </View>

          <View className='mx-5  space-y-3'>

            <Text
              style={{
                color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
              }}
              className='text-[17px] font-[600]   mt-7'>How does the app work?</Text>
            <Text
              style={{
                color: theme === 'light' ? colors.light.text : colors.dark.text
              }}
              className='text-[13px] font-[400]'>
              Users can download the app, create an account, select the station from which they want a battery. They can then book/pay for the battery before traveling to the station.
            </Text>

          </View>

          <View className='mx-5  space-y-3'>
            <Text
              style={{
                color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
              }}
              className='text-[17px] font-[600] mt-7'>Are there any discounts or loyalty programs
              available for frequent users?</Text>
            <Text
              style={{
                color: theme === 'light' ? colors.light.text : colors.dark.text
              }}
              className='text-[13px] font-[400]'>
              Yes, we offer discounts and loyalty programs for our regular customers. You can check the "Promotions" section in the app for current offers and loyalty rewards.
            </Text>

          </View>

          <View className='mx-5 space-y-3'>

            <Text
              style={{
                color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
              }}
              className='text-[17px] font-[600] mt-7'>Is it safe to provide my payment information
              on this app?</Text>
            <Text
              style={{
                color: theme === 'light' ? colors.light.text : colors.dark.text
              }}
              className='text-[13px] font-[400]'>
              Yes, we take the security of your payment information seriously. Our app uses encryption technology to protect your data, and we do not store sensitive payment details on our servers.</Text>
          </View>

          <View className='mx-5 space-y-3'>

            <Text
              style={{
                color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
              }}
              className='text-[17px] font-[600] mt-7'>Is this app available on both Android and iOS
              devices?</Text>
            <View>
              <Text
                style={{
                  color: theme === 'light' ? colors.light.text : colors.dark.text
                }}
                className='text-[13px] font-[400]'>
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