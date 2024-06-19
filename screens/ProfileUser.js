import { View, Text, SafeAreaView, Pressable } from 'react-native';
import React, { useContext, useState } from 'react';
import { ChevronRightIcon } from 'react-native-heroicons/solid';
import { Bike, UserRound } from 'lucide-react-native';
import DeleteAccountModal from '../components/DeleteAccountModal';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../redux/slices/authSlice';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';
import PrimaryNav from '../components/PrimaryNav';
import SuccessNotificationModal from '../components/SuccessNotificationModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileUser = ({ navigation }) => {

  const currentUser = useSelector(selectUser);
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [deleteAccountSuccess, setDeleteAccountSuccess] = useState(false);

  const toggleModalVisibility = () => {
    setVisible(!visible);
  }

  const toggleDeleteAccountSuccessModalVisibility = () => {
     setDeleteAccountSuccess(!deleteAccountSuccess);
  }

  const handleRemoveAccount =  async () => {
     setVisible(false);
     setDeleteAccountSuccess(true);
     await AsyncStorage.removeItem('currentUserToken');
     // Remove Account from Async storage..
     setTimeout(() => {
      dispatch(logout());
    }, 5000);
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background
      }}
      className='h-full'>
      <View className=''>
      
        <PrimaryNav title={"Account info"} onPress={() => navigation.goBack()}/>

        <View className='m-5'>
          <View className="">
            <View className="flex items-center justify-center w-16 h-16 rounded-full bg-[#2C7721]">
              < UserRound size={45} color={`${theme === 'light' ? 'white' : 'black'}`} />
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

                <View className='flex items-center justify-center'>
                  <ChevronRightIcon size={15} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
                </View>

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

      <DeleteAccountModal visible={visible} toggleModalVisibility={toggleModalVisibility} handleRemoveAccount = {handleRemoveAccount} />
      <SuccessNotificationModal visible ={deleteAccountSuccess} successMessage={'Account Deleted Successfully.'} handleClose={toggleDeleteAccountSuccessModalVisibility} />

    </SafeAreaView>

  )
}

export default ProfileUser;