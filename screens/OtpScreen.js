import React, { useEffect, useState } from 'react';
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
import MyCustomButton from '../components/MyCustomButton';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { reSendOtp, verifyOtp } from '../services/userService';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/slices/authSlice';
import { useRoute } from '@react-navigation/native';
import OtpNotificationModal from '../components/OtpNotificationModal';

const validationSchema = Yup.object().shape({
  otp: Yup.string().min(6).max(6).required('Enter valid OTP to continue').label('OTP'),
});


const OtpScreen = ({ navigation }) => {

  const route = useRoute();
  const userData = route.params;
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch()

  const otpVerificationMutation = useMutation((otpVerificationParameters) =>
    verifyOtp(otpVerificationParameters)
  );

  const resendingOtpMutation = useMutation((resendParameters) =>
    reSendOtp(resendParameters)
  );

  const tongleModel = () => {
    setVisible(!visible);
  };

  const handleVerifyOtp = async (values) => {

    try {
      const { data } = await otpVerificationMutation.mutateAsync(values.otp);
      dispatch(setToken(data))
    } catch (ex) {
      if (ex.response) {
        console.log(ex.response.data);
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
        console.log(ex.response.data);
      }

    };

  }

  useEffect(() => {
    if (resendingOtpMutation.isSuccess) {
      setVisible(true);
    }
  }, [resendingOtpMutation.isSuccess ]);


  return (
    <SafeAreaView className="">
      <TouchableOpacity
        className="mt-7 mx-3"
        onPress={() => navigation.goBack()}>
        <ChevronLeftIcon color="#616161" size={26} />
      </TouchableOpacity>
      <View className="border-[#E0E0E0] border-[0.5px] mt-2 flex-1"></View>


      {/* formik*/}
      <Formik
        initialValues={{ otp: '' }}
        onSubmit={values => handleVerifyOtp(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, touched }) => (

          <>
            <View className="items-center mt-7">
              <Text className="font-[400] text-[17px] text-[#242424] ">
                Enter the 6-digit code from your text message
              </Text>
              <Text className="font-[400] text-[17px] text-[#242424]  mb-7">
                to verify your account
              </Text>
              <View className="w-[375] h-[48] px-4">
                <Text className="text-[#616161]  text-[12px] font-[400]">OTP</Text>
                <TextInput
                  placeholder="Enter code here "
                  onChangeText={handleChange('otp')}
                  placeholderTextColor="#616161"
                  className="w-52"
                  keyboardType='numeric'
                />
              </View>
            </View>
            <View className="items-center">
              <View className="border-[#E0E0E0] border-[0.5px] px-3 w-80 mt-2"></View>

              {touched.otp && errors.otp && (
                <Text className="text-sm text-red-400 my-1">
                  {errors.otp}
                </Text>
              )}

            </View>
            <View className="items-center">

              <MyCustomButton handleModel={handleSubmit} isLoading={otpVerificationMutation.isLoading} title='Continue' loadingText='Verifying Otp...' />

            </View>

            <View className="items-center mt-5 ">
              <TouchableOpacity onPress={handleResendOtp}>
                <Text className=" text-[#2C7721] font-[600] text-[17px]">
                  I did not receive the code
                </Text>
              </TouchableOpacity>
            </View>

          </>
        )}
      </Formik>

      {/* Notify  */}
      <OtpNotificationModal visible={visible} setVisible={setVisible} handleClose={tongleModel} />
    </SafeAreaView>
  );
};

export default OtpScreen;
