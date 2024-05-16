import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PrivateStack from './PrivateStack';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';
import LoginScreen from '../screens/LoginScreen';
import NotificationScreen from '../screens/NotificationScreen';
import BikeManufactureDetailsScreen from '../screens/BikeManufactureDetailsScreen';


const AppNav = () => {
  const token = useSelector(state => state.auth.token);
  return (
    <NavigationContainer>
      {token === null ? <AuthStack /> : <PrivateStack />}
    </NavigationContainer>
  );
};

export default AppNav;