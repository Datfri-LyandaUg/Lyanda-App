import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { PermissionsAndroid, Platform, Linking } from 'react-native';
import React, { useContext } from 'react';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { ListTodo, Mailbox, MessagesSquare } from 'lucide-react-native';
import SecondaryButton from '../components/SecondaryButton';
import PrimaryButton from '../components/PrimaryButton';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';

const NotificationScreen = ({ navigation }) => {

  const { theme } = useContext(ThemeContext);

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
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background
      }}
      className="relative flex-1">
      <View className="flex-1">
        <View
          style={{
            backgroundColor: theme === 'dark' ? colors.dark.container : colors.light.background
          }}
          className="flex-row items-center py-4 relative   justify-center">
          <TouchableOpacity
            className="absolute  left-2.5 w-10"
            onPress={() => navigation.goBack()}>
            <ChevronLeftIcon color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} size={26} />
          </TouchableOpacity>

          <Text
            style={{
              color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
            }}
            className="text-[17px] font-[600]">
            Notification access
          </Text>
        </View>

        {theme === 'light' && (<View className="border-[#E0E0E0] border-[0.5px]" />)}

        <View className=" mt-7 mx-4">
          <Text
            style={{
              color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
            }}
            className="font-[700] text-[28px] mb-1 ">
            Lets set up your
          </Text>

          <Text
            style={{
              color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
            }} className="font-[700] text-[28px] mb-3 ">
            notifications.
          </Text>
        </View>
        <Text
          style={{
            color: theme === 'light' ? colors.light.text : colors.dark.text
          }}
          className=" font-[400] text-[17px] mx-4">
          You can modify and turn off individual
        </Text>
        <Text
          style={{
            color: theme === 'light' ? colors.light.text : colors.dark.text
          }}
          className=" font-[400] text-[17px] mx-4">
          notifications at anytime in the Settings.
        </Text>

        <View>

          <View>

            <View className='items-center justify-center mt-8'>
              <View className='space-y-8'>
                <View className='flex-row items-center space-x-4 '>
                  <ListTodo size={33} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} className='ml-2' />
                  <View
                  >
                    <Text
                      style={{
                        color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                      }}
                      className="font-[400] text-[17px] ">
                      Order status
                    </Text>
                    <Text
                      style={{
                        color: theme === 'light' ? colors.light.text : colors.dark.text
                      }}
                      className="font-[400] text-[13px] ">
                      Never miss an update! Receive notifications{' '}
                    </Text>
                    <Text
                      style={{
                        color: theme === 'light' ? colors.light.text : colors.dark.text
                      }}
                      className="font-[400] text-[13px] ">
                      about your fuel delivery.
                    </Text>
                  </View>
                </View>


                <View className='items-center justify-center '>
                  <View className='flex-row items-center space-x-4 '>
                    <Mailbox size={33} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
                    <View>
                      <Text
                        style={{
                          color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                        }}
                        className="font-[400] text-[17px] ">
                        Announcements and offers
                      </Text>
                      <Text
                        style={{
                          color: theme === 'light' ? colors.light.text : colors.dark.text
                        }}
                        className="font-[400] text-[13px] ">
                        Never miss a new release, grab limited-time deals,
                      </Text>
                      <Text
                        style={{
                          color: theme === 'light' ? colors.light.text : colors.dark.text
                        }}
                        className="font-[400] text-[13px] ">
                        and be the first to know about exclusive
                      </Text>
                      <Text
                        style={{
                          color: theme === 'light' ? colors.light.text : colors.dark.text
                        }}
                        className="font-[400] text-[13px] ">
                        events.
                      </Text>
                    </View>

                  </View>

                </View>


                <View className='flex-row items-center space-x-4 '>
                  <MessagesSquare size={33} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
                  <View className=''>
                    <Text
                      style={{
                        color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                      }}
                      className="font-[400] text-[17px] ">
                      Feedback
                    </Text>
                    <Text
                      style={{
                        color: theme === 'light' ? colors.light.text : colors.dark.text
                      }}
                      className="font-[400] text-[13px] ">
                      Get notified about bug fixes, feature additions

                    </Text>
                    <Text
                      style={{
                        color: theme === 'light' ? colors.light.text : colors.dark.text
                      }}
                      className="font-[400] text-[13px] ">
                      and more. Be the first to know.
                    </Text>
                  </View>
                </View>

              </View>
            </View>
          </View>

        </View>
      </View>

      <View className="items-center mb-8 px-7">

        <PrimaryButton handlePress={enableNotificationAccess} text='Turn on notifications' />


        <SecondaryButton title='Not Now' handleOnPress={() => navigation.navigate('LocationScreen')} />

      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
