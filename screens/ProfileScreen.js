import { SafeAreaView, AreaView, Text, View, Pressable } from 'react-native'
import React from 'react'
import { ArchiveBoxIcon, ArrowLeftCircleIcon, ArrowLeftIcon,    ChevronLeftIcon, ChevronRightIcon,    MapIcon,  QuestionMarkCircleIcon,  UserCircleIcon } from 'react-native-heroicons/solid'
import CustomSettingButton from '../components/CustomSettingButton'
import {BellIcon,ArrowUpOnSquareStackIcon, MapPinIcon ,ChatBubbleLeftIcon , InformationCircleIcon,BookmarkIcon , ExclamationCircleIcon ,StarIcon, ShareIcon, Square2StackIcon} from 'react-native-heroicons/outline'
const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView className='bg-white h-full'>
     <View className='flex-row mx-4 mt-4 items-center space-x-6 '>
      <Pressable>
      <ChevronLeftIcon  size={30} color='black' />
      </Pressable>
      <Text className='text-[#242424] text-2xl font-[700]'>
      Settings
      </Text>
     </View>

     <Pressable onPress={()=>navigation.navigate('ProfileUser')}
      className=' mx-6 mt-5 flex-row items-center justify-between'>
      <View className='flex-row items-center space-x-3' >
      <UserCircleIcon size={55}color='#2C7721' />
      <View>
        <Text>
        Phone number
        </Text>
        <Text>
        View profile
        </Text>
      </View>

      <Text>

      </Text>

      </View>
      <Text>

      </Text>

    
        <ChevronRightIcon size={30} color='black'/>
      
     </Pressable>

     <View className='items-center mt-5'>
     <View className='bg-[#FAFAFA] h-80 rounded-[12px] w-96 '>
      <CustomSettingButton title="Appearance"  icon1={<ArrowUpOnSquareStackIcon size={30} color='#808080'/>} icon2={<ChevronRightIcon size={30} color='#808080'/>}/>

      <CustomSettingButton title="Notifications"  icon1={<BellIcon size={30} color='#808080'/>} icon2={<ChevronRightIcon size={30} color='#808080'/>}/>

      <CustomSettingButton title="Location"  icon1={<MapPinIcon size={30} color='#808080'/>} icon2={<ChevronRightIcon size={30} color='#808080'/>}/>

      <CustomSettingButton title="Rate app on store"  icon1={< StarIcon size={30} color='#808080'/>} icon2={<ChevronRightIcon size={30} color='#808080'/>}/>
      <CustomSettingButton title="Share app"  icon1={< ShareIcon size={30} color='#808080'/>} icon2={<ChevronRightIcon size={30} color='#808080'/>}/>
     </View>
     </View>

     <View className='items-center mt-3'>
     <View className='bg-[#FAFAFA] h-68 rounded-[12px] w-96 '>
      <CustomSettingButton title="Terms of service"  icon1={<BookmarkIcon size={30} color='#808080'/>} icon2={<ChevronRightIcon size={30} color='#808080'/>}/>

      <CustomSettingButton title="Help"  icon1={<Square2StackIcon size={30} color='#808080'/>} icon2={<ChevronRightIcon size={30} color='#808080'/>}/>

      
    
      <CustomSettingButton title="Feedback"  icon1={<ChatBubbleLeftIcon size={30} color='#808080'/>} icon2={<ChevronRightIcon size={30} color='#808080'/>}/>
      <CustomSettingButton title="About"  icon1={<InformationCircleIcon size={30} color='#808080'/>} icon2={<ChevronRightIcon size={30} color='#808080'/>}/>
     </View>
     </View>
    </SafeAreaView>
  )
}

export default ProfileScreen