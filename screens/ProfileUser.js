import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { ArrowDownLeftIcon } from 'react-native-heroicons/solid'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'

const ProfileUser = () => {
  return (
    <SafeAreaView>
     <View className=''>
     <View className='flex-row items-center relative mt-6 justify-center'>
     <Pressable className='absolute left-4'>
     <ChevronLeftIcon size={30} color='#242424'/>
     </Pressable>
     <Text className='text-[17px] font-[600] text-[#242424]'>
     Account info
     </Text>
     </View>
     </View>
    </SafeAreaView>
  )
}

export default ProfileUser