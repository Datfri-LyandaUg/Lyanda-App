import {
  SafeAreaView,
  Text,
  View,
  TextInput,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useMutation } from 'react-query';
import { registerUser } from '../services/userService';
import { ErrorMessage } from '../components/forms';
import PrimaryButton from '../components/PrimaryButton';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';
import PrimaryNav from '../components/PrimaryNav';

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string().min(10).max(13).required('Enter a valid phone number to continue.').label('PhoneNumber'),
});

const LoginScreen = ({ navigation }) => {

  const { theme } = useContext(ThemeContext);
  const [currentContact, setCurrentContact] = useState("");
  const signUpMutation = useMutation((signUpParameters) =>
    registerUser(signUpParameters)
  );


  const handleAuthentication = async (values) => {

    const standardisedNumber = '+256' + values.phoneNumber.slice(-9)
    const signUpParameters = {
      phoneNumber: standardisedNumber,
    };

    setCurrentContact(standardisedNumber);

    try {
      const { data } = await signUpMutation.mutateAsync(signUpParameters);
    } catch (ex) {
      if (ex.response) {
        console.error(ex.response.data);
      }
    }
  };

  useEffect(() => {
    if (signUpMutation.isSuccess) {

      const contactParameters = {
        phoneNumber: currentContact
      }

      navigation.navigate('OtpScreen', contactParameters);

    }
  }, [signUpMutation.isSuccess]);


  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background
      }}
      className="h-full">

      <PrimaryNav title={""} onPress={() => navigation.goBack()}/>


      <Formik
        initialValues={{ phoneNumber: '' }}
        onSubmit={values => handleAuthentication(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, touched }) => (

          <>

            <View className="w-full px-4">

              <View className="flex items-center justify-center px-3 py-4 mb-3">

                <Text
                  style={{
                    color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                  }}
                  className="font-[400] text-[17px] w-full text-center">
                  Enter your phone number
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
                      Phone number
                    </Text>
                  </View>
                </View>

                <View className="flex items-center justify-center px-4 py-3 w-full">
                  <TextInput
                    placeholder="07.."
                    onChangeText={handleChange('phoneNumber')}
                    placeholderTextColor="#616161"
                    keyboardType='phone-pad'
                    className="w-full"
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                  />
                </View>

                <View className="px-4">
                  <View className="border-[#E0E0E0] border-[0.5px] w-full" />
                  <ErrorMessage error={errors['phoneNumber']} visible={touched['phoneNumber']} />
                </View>

              </View>

              <View className="items-center">
                <PrimaryButton handlePress={handleSubmit} isLoading={signUpMutation.isLoading} text='Continue' loadingText='Continuing...' />
              </View>

            </View>
          </>
        )}
      </Formik>

    </SafeAreaView>
  );
};

export default LoginScreen;
