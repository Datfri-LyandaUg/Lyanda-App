import React from 'react';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupLoginOptionScreen from '../screens/SignupLoginOptionScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OtpScreen from '../screens/OtpScreen';
import DeleteAccountScreen from '../screens/DeleteAccountScreen';


const AuthStack = () => {

  const Stack = createNativeStackNavigator();

  return (

    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={ DeleteAccountScreen }

        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Options"
        component={SignupLoginOptionScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>

  );
};

export default AuthStack;
