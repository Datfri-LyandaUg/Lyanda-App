import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  ChevronLeftIcon,
} from 'react-native-heroicons/solid';
import { Formik } from 'formik';
import * as Yup from 'yup';
import jwt_decode from 'jwt-decode';
import { reSendOtp, verifyOtp } from '../services/userService';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { setToken, setUserData } from '../redux/slices/authSlice';
import { useRoute } from '@react-navigation/native';
import ErrorNotificationModal from '../components/ErrorNotificationModal';
import { ErrorMessage } from '../components/forms';
import PrimaryButton from '../components/PrimaryButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';
import SuccessNotificationModal from '../components/SuccessNotificationModal';



const validationSchema = Yup.object().shape({
  otp: Yup.string().min(6).max(6).required('Enter a valid OTP to continue.').label('Otp'),
});


const OtpScreen = ({ navigation }) => {

  const route = useRoute();
  const userData = route.params;
  const { theme } = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);
  const [errorDetails, setErrorDetails] = useState("");
  const [showErrorNotification, setShowErrorNotification] = useState(false);
  const dispatch = useDispatch();

  const otpVerificationMutation = useMutation((otpVerificationParameters) =>
    verifyOtp(otpVerificationParameters)
  );

  const resendingOtpMutation = useMutation((resendParameters) =>
    reSendOtp(resendParameters)
  );

  const toggleModal = () => {
    setVisible(!visible);
  };

  const toggleErrorNotificationVisibility = () => {
    setShowErrorNotification(!showErrorNotification);
  };

  const handleVerifyOtp = async (values) => {

    try {
      const { data: token } = await otpVerificationMutation.mutateAsync(values.otp);
      await AsyncStorage.setItem('currentUserToken', token);
      const decodedToken = jwt_decode(token);
      dispatch(setToken(token));
      dispatch(setUserData(decodedToken));
    } catch (ex) {
      if (ex.response) {
        setErrorDetails(ex.response.data);
        setShowErrorNotification(true);
      }

    };

  }

  const handleResendOtp = async () => {

    const resendParameters = {
      phoneNumber: userData?.phoneNumber,
    };

    try {
      const { data } = await resendingOtpMutation.mutateAsync(resendParameters);

    } catch (ex) {
      if (ex.response) {
        setErrorDetails(ex.response.data);
        setShowErrorNotification(true);
      }

    };

  }

  useEffect(() => {
    if (resendingOtpMutation.isSuccess) {
      setVisible(true);
    }
  }, [resendingOtpMutation.isSuccess]);


  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background
      }}
      className="h-full">

      <View
        style={{
          backgroundColor: theme === 'dark' ? colors.dark.container : colors.light.background
        }}

        className="py-4">
        <TouchableOpacity
          className="mx-2.5 w-10"
          onPress={() => navigation.goBack()}>
          <ChevronLeftIcon color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} size={26} />
        </TouchableOpacity>
      </View>

      { theme === 'light' && (<View className="border-[#E0E0E0] border-[0.5px]" />)}


      <Formik
        initialValues={{ otp: '' }}
        onSubmit={values => handleVerifyOtp(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, touched }) => (

          <>
            <View className="w-full px-4">

              <View className="flex items-center justify-center px-3 py-4">

                <Text
                  style={{
                    color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                  }}
                  className="font-[400] text-[17px] w-full text-center">
                  Enter the 6-digit code from your text
                </Text>
                <Text
                  style={{
                    color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                  }}
                  className="font-[400] text-[17px] w-full text-center">
                  messages to verify your account
                </Text>


              </View>

              <View className="">

                <View className="flex items-center justify-center px-3 pt-3 w-full">
                  <View className="w-full">
                    <Text
                      style={{
                        color: theme === 'light' ? colors.light.text : colors.dark.text
                      }}
                      className="text-[12px] font-[400] w-full text-left">
                      OTP
                    </Text>
                  </View>
                </View>

                <View className="flex items-center justify-center px-4 py-1 w-full">
                  <TextInput
                    placeholder="Enter code here"
                    onChangeText={handleChange('otp')}
                    placeholderTextColor="#616161"
                    className="w-full"
                    keyboardType='numeric'
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                  />
                </View>

                <View className="px-4">
                  <View className="border-[#E0E0E0] border-[0.5px] w-full" />
                  <ErrorMessage error={errors['otp']} visible={touched['otp']} />
                </View>

              </View>

              <View className="items-center">
                <PrimaryButton handlePress={handleSubmit} isLoading={otpVerificationMutation.isLoading} text='Continue' loadingText='Verifying Otp...' />
              </View>

              <View className="items-center mt-3">
                <TouchableOpacity onPress={handleResendOtp}>
                  <Text className="text-[#2C7721] font-[500] text-[15px]">
                    I did not receive the code
                  </Text>
                </TouchableOpacity>
              </View>

            </View>

          </>
        )}
      </Formik>

      {/* Notifications */}
      <SuccessNotificationModal visible={visible} setVisible={setVisible} successMessage = {"A new OTP code has been sent to your number"} handleClose={toggleModal} />
      <ErrorNotificationModal showError={showErrorNotification} errorMessage={errorDetails} handleClose={toggleErrorNotificationVisibility} />
    </SafeAreaView>
  );
};

export default OtpScreen;
