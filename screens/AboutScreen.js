import { View, Text, Pressable, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'react-native-heroicons/outline'

const AboutScreen = ({ navigation }) => {
  return (
    <SafeAreaView className=" bg-white h-full">
      <View className="flex-row items-center mt-7 relative mb-2  justify-center">
        <TouchableOpacity
          className="absolute  left-2.5 w-10"
          onPress={() => navigation.goBack()}>
          <ChevronLeftIcon color="#616161" size={20} />
        </TouchableOpacity>

        <Text className="text-[#242424] text-[17px] font-[600]">
          About
        </Text>
      </View>

      <View className="border-[#E0E0E0] border-[0.5px]"></View>

      <View className='items-center py-4 px-2'>

        <View className='w-full bg-[#FAFAFA] py-2 rounded-[12px]'>

          <View className="items-center">
            <Text className="font-[700] text-[60px] text-[#242424] ">lyanda
            </Text>
          </View>
          <View className="">
            <Text className="font-[600] text-[17px] text-[#242424]  ml-5">Know more about us
            </Text>
          </View>


          <Pressable
            onPress={() => navigation.navigate('')}

            className='m-5 flex-row justify-between items-center'>

            <View className='flex-row space-x-2 items-center'>

              <View>
                <Text className='text-[17px] font-[400]  text-[#242424]'>
                  Website
                </Text>

              </View>
            </View>
            <Pressable>
              <ChevronRightIcon size={15} color='#808080' />
            </Pressable>
          </Pressable>


          <Pressable
            onPress={() => navigation.navigate('')}
            className='m-5 flex-row justify-between items-center'>
            <View className='flex-row space-x-2 items-center'>

              <View>
                <Text className='text-[17px] font-[400]  text-[#242424]'>
                  Twitter
                </Text>


              </View>
            </View>
            <Pressable>
              <ChevronRightIcon size={15} color='#808080' />
            </Pressable>

          </Pressable>

          <Pressable
            onPress={() => navigation.navigate('')}
            className='m-5 flex-row justify-between items-center'>
            <View className='flex-row space-x-2 items-center'>

              <View>
                <Text className='text-[17px] font-[400]  text-[#242424]'>
                  Instagram
                </Text>

              </View>
            </View>
            <Pressable>
              <ChevronRightIcon size={15} color='#808080' />
            </Pressable>
          </Pressable>

          <Text className="font-[600] text-[17px] text-[#242424]  ml-5">About the app
          </Text>
          <Pressable
            onPress={() => navigation.navigate('')}
            className='m-5 flex-row justify-between items-center'>
            <View className='flex-row space-x-2 items-center'>

              <View>
                <Text className='text-[17px] font-[400]  text-[#242424]'>
                  Version
                </Text>



              </View>
            </View>
            <Pressable>
              <Text className='text-[17px] font-[400]  text-[#242424]'>
                Value
              </Text>
            </Pressable>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('')}
            className='m-5 flex-row justify-between items-center'>
            <View className='flex-row space-x-2 items-center'>

              <View>
                <Text className='text-[17px] font-[400]  text-[#242424]'>
                  Build
                </Text>



              </View>
            </View>
            <Pressable>
              <Text className='text-[17px] font-[400]  text-[#242424]'>
                Value
              </Text>
            </Pressable>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('')}
            className='m-5 flex-row justify-between items-center'>
            <View className='flex-row space-x-2 items-center'>

              <View>
                <Text className='text-[17px] font-[400]  text-[#242424]'>
                  Copyright
                </Text>



              </View>
            </View>
            <Pressable>
              <ChevronRightIcon size={15} color='#808080' />
            </Pressable>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate('')}
            className='m-5 flex-row justify-between items-center'>
            <View className='flex-row space-x-2 items-center'>

              <View>
                <Text className='text-[17px] font-[400]  text-[#242424]'>
                  Software licenses
                </Text>



              </View>
            </View>
            <Pressable>
              <ChevronRightIcon size={15} color='#808080' />
            </Pressable>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default AboutScreen