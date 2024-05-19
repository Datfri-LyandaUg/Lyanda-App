import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { ArrowDownLeftIcon, ChevronRightIcon, UserCircleIcon } from 'react-native-heroicons/solid'
import { ArrowUpOnSquareStackIcon, ChevronLeftIcon, PencilIcon } from 'react-native-heroicons/outline'



const BikeProfileScreen = () => {
  return (
  <SafeAreaView className='bg-white h-full'>
    <View className=''>
    <View className='flex-row items-center relative mt-6 justify-center mb-3'>
    <Pressable className='absolute left-4'>
    <ChevronLeftIcon size={30} color='#242424'/>
    </Pressable>
    <Text className='text-[17px] font-[600] text-[#242424]'>
    Notifications
    </Text>
    </View>
    <View className="border-[#E0E0E0] border-[0.5px] mt-2"></View>
    <View className='items-center'>
   
     <View className='w-96   bg-[#FAFAFA] rounded-[12px] mt-5'>
      <View className='m-5 flex-row justify-between items-center'>
     <View>
     <Text className='text-[17px] font-[400]  text-[#242424]'>
     Bike manufacturer
      </Text>
      <Text className='text-[#616161] text-[13px] font-[400]'>
      Value
      </Text>
     </View>
     <Pressable>
     <PencilIcon  size={26} color='#808080'/>

       
     </Pressable>
     
      
     </View>
     

     <View className='m-5 flex-row justify-between items-center'>
     <View>
     <Text className='text-[17px] font-[400]  text-[#242424]'>
     Battery capacity
      </Text>
      <Text className='text-[#616161] text-[13px] font-[400]'>
      Value
      </Text>
     </View>
     <Pressable>
     <PencilIcon  size={26} color='#808080'/>

       
     </Pressable>
     
      
     </View>
     
     <View className='m-5 flex-row justify-between items-center'>
     <View>
     <Text className='text-[17px] font-[400]  text-[#242424]'>
     Number plate
      </Text>
      <Text className='text-[#616161] text-[13px] font-[400]'>
      Value
      </Text>
     </View>
     <Pressable>
     <PencilIcon  size={26} color='#808080'/>

       
     </Pressable>
     
      
     </View>
     


    </View>
   </View>
    </View>
   </SafeAreaView>
  )
}

export default BikeProfileScreen