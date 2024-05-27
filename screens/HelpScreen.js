import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Pressable } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { ChevronRightIcon } from 'react-native-heroicons/outline';
import { Phone, MessageCircleQuestion, Bug } from 'lucide-react-native';

const HelpScreen = ({ navigation }) => {
  return (
    <SafeAreaView className=" bg-white h-full">
      <View className="flex-row items-center mt-7 relative mb-2  justify-center">
        <TouchableOpacity
          className="absolute  left-2.5 w-10"
          onPress={() => navigation.goBack()}>
          <ChevronLeftIcon color="#616161" size={20} />
        </TouchableOpacity>

        <Text className="text-[#242424] text-[17px] font-[600]">
          Help
        </Text>
      </View>

      <View className="border-[#E0E0E0] border-[0.5px]"></View>

      <View className='items-center py-4 px-2'>

        <View className='w-full bg-[#FAFAFA] py-3 px-4 rounded-[12px]'>

          <Pressable
            onPress={() => { }}

            className='flex-row justify-between items-center'>

            <View className='my-2 flex-row space-x-3 flex-1 items-center'>
              <Pressable>
                <Phone size={25} color='#808080' />
              </Pressable>
              <View>
                <Text className='text-[17px] font-[400]  text-[#242424]'>
                  Call support
                </Text>
                <Text className='text-[#616161] text-[13px] font-[400]'>
                  Place a call to our service desk directly.
                </Text>
              </View>
            </View>
            <Pressable className="w-9 flex items-end justify-end">
              <ChevronRightIcon size={15} color='#808080' />
            </Pressable>
          </Pressable>


          <Pressable
            onPress={() => navigation.navigate('FaqScreen')}
            className='my-2 flex-row justify-between items-center'>
            <View className='flex-row space-x-3  items-center flex-1'>
              <Pressable>
                <MessageCircleQuestion size={25} color='#808080' />
              </Pressable>
              <View>
                <Text className='text-[17px] font-[400]  text-[#242424]'>
                  FAQ
                </Text>
                <Text className='text-[#616161] text-[13px] font-[400]'>
                  Find answers to frequently asked questions
                </Text>

                <Text className='text-[#616161] text-[13px] font-[400]'>
                  here.
                </Text>

              </View>
            </View>
            <Pressable className="w-9 flex items-end justify-end">
              <ChevronRightIcon size={15} color='#808080' />
            </Pressable>
          </Pressable>

          <Pressable
            onPress={() => { }}
            className='my-2 flex-row justify-between items-center'>

            <View className='flex-row space-x-3 items-center flex-1'>
              <Pressable>
                <Bug size={25} color='#808080' />
              </Pressable>

              <View className="w-60">
                <Text className='text-[17px] font-[400]  text-[#242424]'>
                  Report a problem
                </Text>
                <Text className='text-[#616161] text-[13px] font-[400]'>
                  If a feature or product is not working correctly
                  app better.
                </Text>
                <Text className='text-[#616161] text-[13px] font-[400]'>

                  you can give feedback and help us make the

                </Text>
                <Text className='text-[#616161] text-[13px] font-[400]'>
                  app better.
                </Text>
              </View>
            </View>

            <Pressable className="w-9 flex items-end justify-end">
              <ChevronRightIcon size={15} color='#808080' />
            </Pressable>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HelpScreen;