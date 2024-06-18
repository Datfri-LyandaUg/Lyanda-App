import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import jwt_decode from 'jwt-decode';
import PrivateStack from './PrivateStack';
import AuthStack from './AuthStack';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setToken, setUserData } from '../redux/slices/authSlice';
import SecondSplashScreen from '../screens/SecondSplashScreen';
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
import SplashScreen from '../screens/SplashScreen';


const AppNav = () => {

  const token = useSelector(state => state.auth.token);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  // Keeping User Authenticated.....
  useEffect(() => {

    const authenticateUser = async () => {
      setIsLoading(true);
      try {

        const token = await AsyncStorage.getItem("currentUserToken");

        if (token !== null) {
          dispatch(setToken(token));
          const decodedToken = jwt_decode(token);
          dispatch(setUserData(decodedToken));
        }

        setIsLoading(false);

      } catch (error) {
        console.error("Error Retrieving Token:", error);
      }
    };

    authenticateUser();

  }, []);

  if(isLoading){
    return <SecondSplashScreen/>
  }

  return (
    <NavigationContainer
      // Persisting the Navigation State ...
      persistNavigationState={async (state) => {
        try {
          await AsyncStorage.setItem('NAVIGATION_STATE', JSON.stringify(state));
        } catch (error) {
          console.error('Error persisting navigation state:', error);
        }
      }}

      // Loading the Stored Navigation state ...
      loadNavigationState={async () => {
        try {
          const savedState = await AsyncStorage.getItem('NAVIGATION_STATE');
          return savedState ? JSON.parse(savedState) : undefined;
        } catch (error) {
          console.error('Error loading navigation state:', error);
        }
      }}
    >
      {token === null ? <AuthStack /> : <PrivateStack />}
      {/* <LoginScreen/> */}
      {/* <OtpScreen/> */}
      {/* <SignupLoginOptionScreen/> */}
      {/* <TermsAndConditions/>  */}
      {/* <NotificationScreen/> */}
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