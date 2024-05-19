import { View, Text, SafeAreaView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { ChevronRightIcon, UserCircleIcon } from 'react-native-heroicons/solid';
import { ArrowUpOnSquareStackIcon, ChevronLeftIcon } from 'react-native-heroicons/outline';
import DeletAccountModel from '../components/DeletAccountModel';

const ProfileUser = ({ navigation }) => {

  const [visible, setVisible] = useState(false);

  const toggleModalVisibility = () => {
    setVisible(!visible);
  }

  return (
    <SafeAreaView className='bg-white h-full'>
      <View className=''>
        <View className='flex-row items-center relative mt-6 justify-center mb-3'>
          <Pressable onPress={() => navigation.goBack()} className='absolute left-4'>
            <ChevronLeftIcon size={20} color='#242424' />
          </Pressable>
          <Text className='text-[17px] font-[600] text-[#242424]'>
            Account info
          </Text>
        </View>

        <View className="border-[#E0E0E0] border-[0.5px] mt-2"></View>

        <View className='m-5'>
          <UserCircleIcon size={55} color='#2C7721' />
          <View className=' bg-[#FAFAFA] rounded-[12px] mt-5 pb-5'>
            <View className='m-5'>
              <Text className='text-[17px] font-[400]  text-[#242424]'>
                Phone number
              </Text>
              <Text className='text-[#616161]'>
                UserNumber
              </Text>


              <Pressable onPress={() => navigation.navigate('BikeProfileScreen')}
                className='flex-row justify-between mb-4 mt-6'>
                <View className='flex-row space-x-3'>
                  <ArrowUpOnSquareStackIcon size={20} color='#808080' />
                  <Text className='text-[17px] font-[400] text-[#242424]'> Bike profile </Text>
                </View>
                <ChevronRightIcon size={15} color='#808080' />
              </Pressable>

              <View className='items-center'>
                <Pressable onPress={toggleModalVisibility} >
                  <Text className='text-[#C50F1F]  text-[17px] font-[400]'>
                    Delete account
                  </Text>
                </Pressable>
              </View>
            </View>

          </View>
        </View>
      </View>

      <DeletAccountModel navigation={navigation} visible={visible} toggleModalVisibility={toggleModalVisibility} />
    </SafeAreaView>

  )
}

export default ProfileUser;