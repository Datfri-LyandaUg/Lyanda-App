import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { ArrowDownLeftIcon, ChevronRightIcon, UserCircleIcon } from 'react-native-heroicons/solid'
import { ArrowUpOnSquareStackIcon, ChevronLeftIcon } from 'react-native-heroicons/outline'
import DeletAccountModel from '../components/forms/DeletAccountModel'

const ProfileUser = () => {
const [visible, setVisible] = useState(true)
 
  return (
    <SafeAreaView className='bg-white h-full'>
    <View className=''>
    <View className='flex-row items-center relative mt-6 justify-center mb-3'>
    <Pressable className='absolute left-4'>
    <ChevronLeftIcon size={30} color='#242424'/>
    </Pressable>
    <Text className='text-[17px] font-[600] text-[#242424]'>
      Account info
    </Text>
    </View>
    <View className="border-[#E0E0E0] border-[0.5px] mt-2"></View>
    <View className='m-5'>
    <UserCircleIcon size={55}color='#2C7721' />
     <View className='w-96  h-52 bg-[#FAFAFA] rounded-[12px] mt-5'>
      <View className='m-5'>
     <Text className='text-[17px] font-[400]  text-[#242424]'>
       Phone umber
      </Text>
     <Text className='text-[#616161]'>
       UserNumber
       </Text>
      <View className='mb-4 mt-6'>

       <View className='flex-row justify-between'>
       <View className='flex-row space-x-3'>
       <ArrowUpOnSquareStackIcon size={30} color='#808080'/ >
       <Text className='text-[17px] font-[400] text-[#242424]'> Bike   profile </Text>
       </View>
       <ChevronRightIcon size={30} color='#808080'/>
           
       </View>
       </View>

       <View className='items-center'>
       <Pressable >
            <Text className='text-[#C50F1F]  text-[17px] font-[400]'>
        Delete account
     </Text>
      </Pressable>
     </View>
     </View>


    </View>
   </View>
    </View>

    <DeletAccountModel  visible={visible} />
   </SafeAreaView>
   
  )
}

export default ProfileUser