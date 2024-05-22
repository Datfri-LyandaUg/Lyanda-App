import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PrivateStack from './PrivateStack';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';
import LoginScreen from '../screens/LoginScreen';
import NotificationScreen from '../screens/NotificationScreen';
import BikeManufactureDetailsScreen from '../screens/BikeManufactureDetailsScreen';
import DeleteAccountScreen from '../screens/DeleteAccountScreen';
import TermsAndConditions from '../screens/TermsAndConditions';
import SignupLoginOptionScreen from '../screens/SignupLoginOptionScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileUser from '../screens/ProfileUser';
import BikeProfileScreen from '../screens/BikeProfileScreen';
import HelpScreen from '../screens/HelpScreen';
import AboutScreen from '../screens/AboutScreen';


const AppNav = () => {
  const token = useSelector(state => state.auth.token);
  return (
    <NavigationContainer>
      {/* {token === null ? <AuthStack /> : <PrivateStack />} */}
      {/* <LoginScreen/> */}
      {/* <DeleteAccountScreen/> */}
      {/* <BikeManufactureDetailsScreen/> */}
      {/* <NotificationScreen/> */}
      {/* <TermsAndConditions/> */}
      {/* <SignupLoginOptionScreen/> */}
      {/* <ProfileScreen /> */}
      {/* <ProfileUser /> */}
      {/* <BikeProfileScreen /> */}
      {/* <DeleteAccountScreen /> */}
        {/* <HelpScreen /> */}
        <AboutScreen />

      {/* <PrivateStack /> */}
    </NavigationContainer>
  );
};

export default AppNav;