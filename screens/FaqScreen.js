import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';
import PrimaryNav from '../components/PrimaryNav';

const FaqScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background
      }}
      className="h-full">

      <PrimaryNav title={"FAQ"} onPress={() => navigation.goBack()} />

      <View className='items-center py-3 px-2 flex-1'>
     
        <View
          style={{
            backgroundColor: theme === 'light' ? colors.light.container : colors.dark.container
          }}
          className='w-full py-2 rounded-[12px]'>

          <ScrollView className="">
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

          </ScrollView>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default FaqScreen