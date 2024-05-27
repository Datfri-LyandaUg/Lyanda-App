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
import PolicyScreen from '../screens/PolicyScreen';
import FaqScreen from '../screens/FaqScreen';
import AppearanceScreen from '../screens/AppearanceScreen';
import NotificationSettingsScreen from '../screens/NotificationSettingsScreen';
import LocationSettingsScreen from '../screens/LocationSettingsScreen';
import BikeCapacityDetailsScreen from '../screens/BikeCapacityDetailsScreen';
import BikePlateDetailsScreen from '../screens/BikePlateDetailsScreen';
import LocationScreen from '../screens/LocationScreen';
import OtpScreen from '../screens/OtpScreen';



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
      {/* <LocationScreen/> */}
      {/* <OtpScreen/> */}
      {/* <SignupLoginOptionScreen/> */}
      {/* <BikeCapacityDetailsScreen/> */}
      {/* <BikePlateDetailsScreen/> */}
      {/* <ProfileScreen /> */}
      {/* <ProfileUser /> */}
      {/* <BikeProfileScreen /> */}
      {/* <DeleteAccountScreen /> */}
      {/* <HelpScreen /> */}
      {/* <AboutScreen /> */}
      {/* <PolicyScreen /> */}
      {/* <FaqScreen /> */}
      {/* <AppearanceScreen /> */}
      {/* <NotificationSettingsScreen /> */}
      {/* <LocationSettingsScreen/> */}
      <PrivateStack />
    </NavigationContainer>
  );
};

export default AppNav;