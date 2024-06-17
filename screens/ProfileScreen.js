import { SafeAreaView, Text, View, Pressable, Linking } from 'react-native'
import React, { useContext } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'react-native-heroicons/solid'
import CustomSettingButton from '../components/CustomSettingButton'
import { UserRound, SunMoon, BellDot, MapPin, Star, Share2, FileText, BadgeHelp, MessagesSquare, Info } from 'lucide-react-native';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/slices/authSlice';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';

const ProfileScreen = ({ navigation }) => {
  const currentUser = useSelector(selectUser);
  const { theme } = useContext(ThemeContext);

  const handleFeedbackPress = () => {

    const email = 'datfriapp@gmail.com';
    const subject = 'Feedback';
    const body = 'Type Your Feedback Here..';
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    Linking.openURL(url).catch(err => console.error('Error opening email:', err));
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background
      }}
      className='h-full'>
      <View
        style={{
          backgroundColor: theme === 'dark' ? colors.dark.container : colors.light.background
        }}
        className='flex-row py-3 px-2 items-center space-x-6 '>
        <Pressable>
          <ChevronLeftIcon size={20} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
        </Pressable>
        <Text
          style={{
            color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
          }}
          className=' text-2xl font-[700]'>
          Settings
        </Text>
      </View>

      <Pressable onPress={() => navigation.navigate('ProfileUser')}
        className=' mx-6 mt-5 flex-row items-center justify-between'>
        <View className='flex-row items-center space-x-3' >
          <View className="flex items-center justify-center w-16 h-16 rounded-full bg-[#2C7721]">
            < UserRound size={45} color={`${theme === 'light' ? 'white' : 'black'}`} />
          </View>
          <View>
            <Text style={{
              color: theme === 'light' ? colors.light.text : colors.dark.text
            }}>
              {currentUser?.phoneNumber}
            </Text>
            <Text style={{
              color: theme === 'light' ? colors.light.text : colors.dark.text
            }}>
              View profile
            </Text>
          </View>

        </View>

        <ChevronRightIcon size={15} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
      </Pressable>

      <View className='items-center mt-5 w-full px-3'>
        <View
          style={{
            backgroundColor: theme === 'light' ? colors.light.container : colors.dark.container
          }}
          className='rounded-[12px] py-3 w-full'>
          <CustomSettingButton onPress={() => navigation.navigate('AppearanceScreen')} title="Appearance" icon1={<SunMoon size={25} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} icon2={<ChevronRightIcon size={18} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} />

          <CustomSettingButton onPress={() => navigation.navigate('NotificationSettingsScreen')} title="Notifications" icon1={< BellDot size={25} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} icon2={<ChevronRightIcon size={18} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} />

          <CustomSettingButton onPress={() => navigation.navigate('LocationSettingsScreen')} title="Location" icon1={<MapPin size={25} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} icon2={<ChevronRightIcon size={18} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} />

          <CustomSettingButton title="Rate app on store" icon1={< Star size={25} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} icon2={<ChevronRightIcon size={18} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} />

          <CustomSettingButton title="Share app" icon1={< Share2 size={25} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} icon2={<ChevronRightIcon size={18} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} />
        </View>
      </View>

      <View className='items-center mt-3 w-full px-3'>
        <View
          style={{
            backgroundColor: theme === 'light' ? colors.light.container : colors.dark.container
          }}
          className='rounded-[12px] py-3 w-full'>

          <CustomSettingButton onPress={() => navigation.navigate('PolicyScreen')} title="Terms of service" icon1={<FileText size={25} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} icon2={<ChevronRightIcon size={18} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} />

          <CustomSettingButton onPress={() => navigation.navigate('HelpScreen')} title="Help" icon1={<BadgeHelp size={25} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} icon2={<ChevronRightIcon size={18} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} />

          <CustomSettingButton onPress={handleFeedbackPress} title="Feedback" icon1={<MessagesSquare size={25} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} icon2={<ChevronRightIcon size={18} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} />

          <CustomSettingButton onPress={() => navigation.navigate('AboutScreen')} title="About" icon1={<Info size={25} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} icon2={<ChevronRightIcon size={18} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen;