import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { PermissionsAndroid, Platform, Linking } from 'react-native';
import React from 'react';
import {
  Bars3BottomLeftIcon,
  ChatBubbleLeftRightIcon,
  ChevronLeftIcon,
  SpeakerWaveIcon,
} from 'react-native-heroicons/solid';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import MyCustomButton from '../components/MyCustomButton';
const NotificationScreen = ({ navigation }) => {
  async function enableNotificationAccess() {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS

      );
      navigation.navigate('LoactionScreen')
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        // Optionally, direct to settings for manual enablement
        Linking.openSettings();
      }
    } else {
      // For iOS, open settings directly since user interaction is required
      Linking.openURL('app-settings:');
    }
  }
  return (
    <SafeAreaView className="relative flex-1 bg-white">
      <View className="flex-1">
        <View className="flex-row items-center mt-7 relative mb-2  justify-center">
          <TouchableOpacity
            className="absolute  left-2.5"
            onPress={() => navigation.goBack()}>
            <ChevronLeftIcon color="#616161" size={26} />
          </TouchableOpacity>

          <Text className="text-[#242424] text-[17px] font-[600]">
            Notification access
          </Text>
        </View>
        <View className="border-[#E0E0E0] border-[0.5px] mt-2 "></View>

        <View className=" mt-7 mx-4">
          <Text className="font-[700] text-[28px] text-[#242424] mb-1 ">
            Lets set up your
          </Text>

          <Text className="font-[700] text-[28px] text-[#242424] mb-3 ">
            notifications.
          </Text>
        </View>
        <Text className=" font-[400] text-[17px] text-[#242424] mx-4">
          You can modify and turn off individual
        </Text>
        <Text className=" font-[400] text-[17px] text-[#242424] mx-4">
          notifications at anytime in the Settings.
        </Text>

        <View>

          <View>

            <View className='items-center justify-center mt-8'>
              <View className='space-y-8'>
                <View className='flex-row items-center space-x-4 '>
                  <Bars3BottomLeftIcon color="#242424" className='ml-2=' />
                  <View
                  >
                    <Text className="font-[400] text-[17px]  text-[#242424]">
                      Order status
                    </Text>
                    <Text className="font-[400] text-[13px] text-[#616161]">
                      Never miss an update! Receive notifications{' '}
                    </Text>
                    <Text className="font-[400] text-[13px] text-[#616161]">
                      about your fuel delivery.
                    </Text>
                  </View>
                </View>


                <View className='items-center justify-center '>
                  <View className='flex-row items-center space-x-4 '>
                    <SpeakerWaveIcon color="#242424" />
                    <View>
                      <Text className="font-[400] text-[17px]  text-[#242424]">
                        Announcements and offers
                      </Text>
                      <Text className="font-[400] text-[13px] text-[#616161]">
                        Never miss a new release, grab limited-time deals,
                      </Text>
                      <Text className="font-[400] text-[13px] text-[#616161]">
                        and be the first to know about exclusive
                      </Text>
                      <Text className="font-[400] text-[13px] text-[#616161]">
                        events.
                      </Text>
                    </View>

                  </View>

                </View>


                <View className='flex-row items-center space-x-4 '>
                  <ChatBubbleLeftRightIcon color="#242424" />
                  <View className='f'>
                    <Text className="font-[400] text-[17px]  text-[#242424]">
                      Feedback
                    </Text>
                    <Text className="font-[400] text-[13px] text-[#616161]">
                      Get notified about bug fixes, feature additions

                    </Text>
                    <Text className="font-[400] text-[13px] text-[#616161]">
                      and more. Be the first to know.
                    </Text>
                  </View>
                </View>

              </View>
            </View>
          </View>

        </View>
      </View>

      <View className="items-center  mb-6">

        <MyCustomButton handleModel={enableNotificationAccess} title='Turn on notifications' />
        <TouchableOpacity
          onPress={() => navigation.navigate('LoactionScreen')}
          className="w-[361] h-[52]  justify-center items-center bg-white border border-[#2C7721] rounded-[12px] mt-6">
          <Text className="text-[#2C7721] text-[17px] font-[600]">Not now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
