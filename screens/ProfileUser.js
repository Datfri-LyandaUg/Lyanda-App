import { View, Text, SafeAreaView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { ChevronRightIcon } from 'react-native-heroicons/solid';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { Bike, UserRound } from 'lucide-react-native';
import DeleteAccountModal from '../components/DeleteAccountModal';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/slices/authSlice';

const ProfileUser = ({ navigation }) => {
 
  const  currentUser = useSelector(selectUser);
  const [visible, setVisible] = useState(false);

  const toggleModalVisibility = () => {
    setVisible(!visible);
  }

  return (
    <SafeAreaView className='bg-white h-full'>
      <View className=''>
        <View className='flex-row items-center relative mt-6 justify-center mb-3'>
          <Pressable onPress={() => navigation.goBack()} className='absolute left-4  w-10'>
            <ChevronLeftIcon size={20} color='#242424' />
          </Pressable>
          <Text className='text-[17px] font-[600] text-[#242424]'>
            Account info
          </Text>
        </View>

        <View className="border-[#E0E0E0] border-[0.5px] mt-2"></View>

        <View className='m-5'>
          <View className="">
            <View className="flex items-center justify-center w-16 h-16 rounded-full bg-[#2C7721]">
              < UserRound size={45} color='white' />
            </View>
          </View>
          <View className=' bg-[#FAFAFA] rounded-[12px] mt-5 pb-5'>
            <View className='m-5'>
              <Text className='text-[17px] font-[400]  text-[#242424]'>
                Phone number
              </Text>
              <Text className='text-[#616161]'>
                 { currentUser?.phoneNumber}
              </Text>

              <Pressable onPress={() => navigation.navigate('BikeProfileScreen')}
                className='flex-row justify-between mb-4 mt-6'>
                <View className='flex-row space-x-2'>
                  <View className="flex items-center justify-center">
                    <Bike size={25} color="#808080" />
                  </View>
                  <View className="flex items-center justify-end">
                    <Text className='text-[17px] font-[400] text-[#242424]'> Bike profile </Text>
                  </View>
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

      <DeleteAccountModal navigation={navigation} visible={visible} toggleModalVisibility={toggleModalVisibility} />

    </SafeAreaView>

  )
}

export default ProfileUser;