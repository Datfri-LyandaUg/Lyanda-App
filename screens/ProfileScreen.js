import { SafeAreaView, AreaView, Text, View, Pressable } from 'react-native'
import React from 'react'
import { ArrowLeftCircleIcon, ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon, UserCircleIcon } from 'react-native-heroicons/solid'
import CustomSettingButton from '../components/CustomSettingButton'

const ProfileScreen = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
     <View className='flex-row mx-4 mt-4 items-center space-x-6 '>
      <Pressable>
      <ChevronLeftIcon  size={30} color='black' />
      </Pressable>
      <Text className='text-[#242424] text-2xl font-[700]'>
      Settings
      </Text>
     </View>

     <View className=' mx-6 mt-5 flex-row items-center justify-between'>
      <View className='flex-row items-center space-x-3' >
      <UserCircleIcon size={55}color='#2C7721' />
      <View>
        <Text>
        Phone number
        </Text>
        <Text>
        View profile
        </Text>
      </View>

      <Text>

      </Text>

      </View>
      <Text>

      </Text>

      <Pressable>
        <ChevronRightIcon size={30} color='black'/>
      </Pressable>
     </View>

     <View className='bg-[#808080] h-96'>
      <CustomSettingButton />
     </View>
    </SafeAreaView>
  )
}

export default ProfileScreen