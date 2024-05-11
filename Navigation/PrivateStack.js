import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TermsAndConditons from '../screens/TermsAndConditons';
import NotificationScreen from '../screens/NotificationScreen';
import LocationScreen from '../screens/LocationScreen';

const PrivateStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Home"
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
    </Stack.Navigator>
  )
}

export default PrivateStack