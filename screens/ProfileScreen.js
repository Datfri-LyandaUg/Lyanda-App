import { SafeAreaView, Text, View, Pressable } from 'react-native'
import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'react-native-heroicons/solid'
import CustomSettingButton from '../components/CustomSettingButton'
import { UserRound, SunMoon, BellDot, MapPin, Star, Share2, FileText, BadgeHelp, MessagesSquare, Info } from 'lucide-react-native';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/slices/authSlice';

const ProfileScreen = ({ navigation }) => {
  const currentUser = useSelector(selectUser);
  return (
    <SafeAreaView className='bg-white h-full'>
      <View className='flex-row mx-4 mt-4 items-center space-x-6 '>
        <Pressable>
          <ChevronLeftIcon size={20} color='black' />
        </Pressable>
        <Text className='text-[#242424] text-2xl font-[700]'>
          Settings
        </Text>
      </View>

      <Pressable onPress={() => navigation.navigate('ProfileUser')}
        className=' mx-6 mt-5 flex-row items-center justify-between'>
        <View className='flex-row items-center space-x-3' >
          <View className="flex items-center justify-center w-16 h-16 rounded-full bg-[#2C7721]">
            < UserRound size={45} color='white' />
          </View>
          <View>
            <Text>
              { currentUser?.phoneNumber }
            </Text>
            <Text>
              View profile
            </Text>
          </View>

        </View>

        <ChevronRightIcon size={15} color='black' />
      </Pressable>

      <View className='items-center mt-5 w-full px-3'>
        <View className='bg-[#FAFAFA] rounded-[12px] py-3 w-full'>
          <CustomSettingButton onPress={() => navigation.navigate('AppearanceScreen')} title="Appearance" icon1={<SunMoon size={25} color='#808080' />} icon2={<ChevronRightIcon size={18} color='#808080' />} />

          <CustomSettingButton onPress={() => navigation.navigate('NotificationSettingsScreen')} title="Notifications" icon1={< BellDot size={25} color='#808080' />} icon2={<ChevronRightIcon size={18} color='#808080' />} />

          <CustomSettingButton onPress={() => navigation.navigate('LocationSettingsScreen')} title="Location" icon1={<MapPin size={25} color='#808080' />} icon2={<ChevronRightIcon size={18} color='#808080' />} />

          <CustomSettingButton title="Rate app on store" icon1={< Star size={25} color='#808080' />} icon2={<ChevronRightIcon size={18} color='#808080' />} />

          <CustomSettingButton title="Share app" icon1={< Share2 size={25} color='#808080' />} icon2={<ChevronRightIcon size={18} color='#808080' />} />
        </View>
      </View>

      <View className='items-center mt-3 w-full px-3'>
        <View className='bg-[#FAFAFA] rounded-[12px] py-3 w-full'>

          <CustomSettingButton onPress={() => navigation.navigate('PolicyScreen')} title="Terms of service" icon1={<FileText size={25} color='#808080' />} icon2={<ChevronRightIcon size={18} color='#808080' />} />

          <CustomSettingButton onPress={() => navigation.navigate('HelpScreen')} title="Help" icon1={<BadgeHelp size={25} color='#808080' />} icon2={<ChevronRightIcon size={18} color='#808080' />} />

          <CustomSettingButton title="Feedback" icon1={<MessagesSquare size={25} color='#808080' />} icon2={<ChevronRightIcon size={18} color='#808080' />} />

          <CustomSettingButton onPress={() => navigation.navigate('AboutScreen')} title="About" icon1={<Info size={25} color='#808080' />} icon2={<ChevronRightIcon size={18} color='#808080' />} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen;