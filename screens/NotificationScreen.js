import { View, Text, SafeAreaView } from 'react-native';
import { PermissionsAndroid, Platform, Linking } from 'react-native';
import React, { useContext } from 'react';
import { ListTodo, Mailbox, MessagesSquare } from 'lucide-react-native';
import SecondaryButton from '../components/SecondaryButton';
import PrimaryButton from '../components/PrimaryButton';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';
import PrimaryNav from '../components/PrimaryNav';
import CustomNotification from '../components/CustomNotification';

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

        <PrimaryNav title={"Notification access"} onPress={() => navigation.goBack()} />

        <View className="mt-4 mx-4">
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

          <Text
            style={{
              color: theme === 'light' ? colors.light.text : colors.dark.text
            }}
            className=" font-[400] text-[17px] mx-4">
            You can modify and turn off individual  notifications at anytime in the Settings.
          </Text>
        </View>

        <View className="w-full mt-2 p-2">
          <CustomNotification Icon={<ListTodo size={33} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} title={"Order status"} body={"Never miss an update! Receive notifications about your fuel delivery."} />
          <CustomNotification Icon={<Mailbox size={33} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} title={"Announcements and offers"} body={"Never miss a new release, grab limited-time deals, and be the first to know about exclusive events."} />
          <CustomNotification Icon={<MessagesSquare size={33} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} title={"Feedback"} body={"Get notified about bug fixes, feature additions and more. Be the first to know."} />
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
