import { View, Text, SafeAreaView, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/solid'
import { FlagIcon, PhoneArrowUpRightIcon } from 'react-native-heroicons/outline'

const PolicyScreen = () => {
  return (
    <SafeAreaView className=" bg-white h-full">
<View className="flex-row items-center mt-7 relative mb-2  justify-center">
                <TouchableOpacity
                    className="absolute  left-2.5"
                    onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon color="#616161" size={20} />
                </TouchableOpacity>

                <Text className="text-[#242424] text-[17px] font-[600]">
                Terms of service
                </Text>
            </View>

            <View className="border-[#E0E0E0] border-[0.5px]"></View>


            <View className='items-center py-4 px-2'>

<View className='w-full bg-[#FAFAFA] py-2 rounded-[12px]'>

  

    <View className=' items-center'>
    
      <View>
      <Text className='text-[13px] font-[400]  text-[#242424]'>
      Our user agreement outlines the terms and conditions of 
      </Text>
      <Text className='text-[13px] font-[400]  text-[#242424]'>
      using our app, including your rights and responsibilities.
      </Text>
      <Text className='text-[17px] font-[600]   mt-10 text-[#242424]'>Last Updated: September 01st , 2023</Text>
      
      
      </View>
     
    </View>
   
 

  <Pressable
    
    className='m-5 flex-row justify-between items-center'>
    <View className='flex-row space-x-2 items-center'>
    
      <View>
      <Text className='text-[13px] font-[400]  text-[#242424]'>
      
      
      Welcome to Lyanda! These Terms of Service ("Terms'') are a legally binding agreement between you and Gasfilup App (''we," "us," or "our"), governing your use of the Gasfilup mobile application and related services ("Services''). Before you start using our app, please read these Terms very carefully. By accessing or using Gasfilup, you agree to be bound by these Terms. If you do not agree to any of these Terms, please do not use our Services.
      </Text>
      
     

      </View>
    </View>


  </Pressable>

  <View 
   >
    <View className='space-y-8 py-4 px-5'>
    <Text className='text-[17px] font-[600]    text-[#242424]'>Account Creation and Usage</Text>
      
  
     <View>

     <Text className='text-[17px] font-[400]  text-[#242424]'>
     Account Creation:
      </Text>
     <Text className='text-[17px] font-[400]  text-[#242424]'>
      To use our Services, you are required to have an account. You agree to provide accurate, current, and complete information during the account creation process.


      </Text>
      
     
     </View>
 <View>

     <Text className='text-[17px] font-[400]  text-[#242424]'>
     
     Account Security:
      </Text>
     <Text className='text-[17px] font-[400]  text-[#242424]'>
     You are solely responsible for maintaining the confidentiality of your account credentials, including your password. You agree not to share your account details with anyone else.

      </Text>
      
     
     </View>



     <View>

<Text className='text-[17px] font-[400]  text-[#242424]'>
Unauthorized Use:
 </Text>
<Text className='text-[17px] font-[400]  text-[#242424]'>
You are responsible for all activities that occur under your account. If you suspect any unauthorized use of your account, you must notify us Immediately so we can block access to that particular account.


 </Text>
 

</View>


    </View>


  </View>
</View>
</View>
    </SafeAreaView>
  )
}

export default PolicyScreen