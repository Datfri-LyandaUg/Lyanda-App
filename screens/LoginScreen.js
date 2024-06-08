import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import {
  ChevronLeftIcon,
} from 'react-native-heroicons/solid';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useMutation } from 'react-query';
import { registerUser } from '../services/userService';
import { ErrorMessage } from '../components/forms';
import PrimaryButton from '../components/PrimaryButton';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string().required('Enter a valid phone number to continue.').label('PhoneNumber'),
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


      <Formik
        initialValues={{ phoneNumber: '' }}
        onSubmit={values => handleAuthentication(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, touched }) => (

          <>

            { theme === 'light' && (<View className="border-[#E0E0E0] border-[0.5px]" />)}

            <View className="items-center mt-7">
              <Text
                style={{
                  color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                }}
                className="font-[400] text-[17px] mb-7">
                Enter your phone number
              </Text>
              <View className="w-[375] h-[48] px-4">
                <Text
                  style={{
                    color: theme === 'light' ? colors.light.text : colors.dark.text
                  }}
                  className="text-[12px] font-[400]">
                  Phone number
                </Text>

                <TextInput
                  placeholder="07.."
                  onChangeText={handleChange('phoneNumber')}
                  placeholderTextColor="#616161"
                  className="w-52"
                  style={{
                    color: theme === 'light' ? colors.light.text : colors.dark.text
                  }}
                />

              </View>
            </View>
            <View className="pl-3">

              <View className="border-[#E0E0E0] border-[0.5px] px-3 w-80 mt-2 my-2" />

              <ErrorMessage error={errors['phoneNumber']} visible={touched['phoneNumber']} />

            </View>

            <View className="items-center mb-72 px-4">
              <PrimaryButton handlePress={handleSubmit} isLoading={signUpMutation.isLoading} text='Continue' loadingText='Continuing...' />
            </View>
          </>
        )}
      </Formik>

    </SafeAreaView>
  );
};

export default LoginScreen;
