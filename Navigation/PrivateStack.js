import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TermsAndConditons from '../screens/TermsAndConditions';
import NotificationScreen from '../screens/NotificationScreen';
import LocationScreen from '../screens/LocationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileUser from '../screens/ProfileUser';
import BikeManufactureDetailsScreen from '../screens/BikeManufactureDetailsScreen';
import BikeProfileScreen from '../screens/BikeProfileScreen';
import BikeCapacityDetailsScreen from '../screens/BikeCapacityDetailsScreen';
import BikePlateDetailsScreen from '../screens/BikePlateDetailsScreen';
import AppearanceScreen from '../screens/AppearanceScreen';
import NotificationSettingsScreen from '../screens/NotificationSettingsScreen';
import LocationSettingsScreen from '../screens/LocationSettingsScreen';
import PolicyScreen from '../screens/PolicyScreen';
import HelpScreen from '../screens/HelpScreen';
import AboutScreen from '../screens/AboutScreen';
import FaqScreen from '../screens/FaqScreen';

const PrivateStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TermsAndConditons"
        component={TermsAndConditons}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LocationScreen"
        component={LocationScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ProfileUser"
        component={ProfileUser}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="BikeProfileScreen"
        component={BikeProfileScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="BikeManufactureDetailsScreen"
        component={BikeManufactureDetailsScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="BikeCapacityDetailsScreen"
        component={BikeCapacityDetailsScreen}

        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="BikePlateDetailsScreen"
        component={BikePlateDetailsScreen}

        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AppearanceScreen"
        component={AppearanceScreen}

        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="NotificationSettingsScreen"
        component={NotificationSettingsScreen}

        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="LocationSettingsScreen"
        component={LocationSettingsScreen}

        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PolicyScreen"
        component={PolicyScreen}

        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="HelpScreen"
        component={HelpScreen}

        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}

        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="FaqScreen"
        component={FaqScreen}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  )
}

export default PrivateStack;