import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import jwt_decode from 'jwt-decode';
import PrivateStack from './PrivateStack';
import AuthStack from './AuthStack';
import { useDispatch, useSelector } from 'react-redux';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setToken, setUserData } from '../redux/slices/authSlice';



const AppNav = () => {

  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  // Keeping User Authenticated.....
  useEffect(() => {

    const authenticateUser = async () => {

      try {

        const token = await AsyncStorage.getItem("currentUserToken");

        if (token !== null) {
          dispatch(setToken(token));
          const decodedToken = jwt_decode(token);
          dispatch(setUserData(decodedToken));
        }

      } catch (error) {
        console.error("Error Retrieving Token:", error);
      }
    };

    authenticateUser();

  }, []);


  return (
    <NavigationContainer>
      {/* {token === null ? <AuthStack /> : <PrivateStack />} */}
      {/* <LoginScreen/> */}
      
      {/* <TermsAndConditions/> */}
     
      {/* <OtpScreen/> */}
      {/* <SignupLoginOptionScreen/> */}
       
      <NotificationScreen/>
      {/* <LocationScreen/> */}
      {/* <ProfileScreen /> */}
      {/* <BikeManufactureDetailsScreen/> */}
      {/* <BikeCapacityDetailsScreen/> */}
      {/* <BikePlateDetailsScreen/> */}
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
    </NavigationContainer>
  );
};

export default AppNav;