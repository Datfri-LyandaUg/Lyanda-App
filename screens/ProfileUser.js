import { View, Text, SafeAreaView, Pressable } from 'react-native';
import React, { useContext, useState } from 'react';
import { ChevronRightIcon } from 'react-native-heroicons/solid';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { Bike, UserRound } from 'lucide-react-native';
import DeleteAccountModal from '../components/DeleteAccountModal';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/slices/authSlice';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';

const ProfileUser = ({ navigation }) => {

  const currentUser = useSelector(selectUser);
  const { theme } = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);

  const toggleModalVisibility = () => {
    setVisible(!visible);
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background
      }}
      className='h-full'>
      <View className=''>
        <View
          style={{
            backgroundColor: theme === 'dark' ? colors.dark.container : colors.light.background
          }}
          className='flex-row items-center relative py-4 justify-center'>
          <Pressable onPress={() => navigation.goBack()} className='absolute left-4  w-10'>
            <ChevronLeftIcon color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} size={20} />
          </Pressable>
          <Text
            style={{
              color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
            }}
            className='text-[17px] font-[600] '>
            Account info
          </Text>
        </View>

        {theme === 'light' && (<View className="border-[#E0E0E0] border-[0.5px]" />)}

        <View className='m-5'>
          <View className="">
            <View className="flex items-center justify-center w-16 h-16 rounded-full bg-[#2C7721]">
              < UserRound size={45} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
            </View>
          </View>
          <View
            style={{
              backgroundColor: theme === 'light' ? colors.light.container : colors.dark.container
            }}
            className='rounded-[12px] mt-5 pb-5'>
            <View className='m-5'>
              <Text
                style={{
                  color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                }}
                className='text-[17px] font-[400]'>
                Phone number
              </Text>
              <Text
                style={{
                  color: theme === 'light' ? colors.light.text : colors.dark.text
                }}
              >
                {currentUser?.phoneNumber}
              </Text>

              <Pressable onPress={() => navigation.navigate('BikeProfileScreen')}
                className='flex-row justify-between mb-4 mt-6'>
                <View className='flex-row space-x-2'>
                  <View className="flex items-center justify-center">
                    <Bike size={25} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
                  </View>
                  <View className="flex items-center justify-end">
                    <Text
                      style={{
                        color: theme === 'light' ? colors.light.text : colors.dark.text
                      }}
                      className='text-[17px] font-[400] '> Bike profile </Text>
                  </View>
                </View>
                <ChevronRightIcon size={15} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
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

      <DeleteAccountModal visible={visible} toggleModalVisibility={toggleModalVisibility} />

    </SafeAreaView>

  )
}

export default ProfileUser;