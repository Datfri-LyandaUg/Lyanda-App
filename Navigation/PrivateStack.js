import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TermsAndConditons from '../screens/TermsAndConditions';
import NotificationScreen from '../screens/NotificationScreen';
import LocationScreen from '../screens/LocationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DeleteAccountScreen from '../screens/DeleteAccountScreen';
import ProfileUser from '../screens/ProfileUser';
import BikeManufactureDetailsScreen from '../screens/BikeManufactureDetailsScreen';
import BikeProfileScreen from '../screens/BikeProfileScreen';

const PrivateStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
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
      /> */}

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
      
      {/* 
       <Stack.Screen
        name="BikeManufactureDetailsScreen"
        component={BikeManufactureDetailsScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DeleteAccountScreen"
        component={DeleteAccountScreen}

        options={{ headerShown: false }}
      /> */}


    </Stack.Navigator>
  )
}

export default PrivateStack