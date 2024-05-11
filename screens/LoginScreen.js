import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  ChevronLeftIcon,
} from 'react-native-heroicons/solid';
import MyCustomButton from '../components/MyCustomButton';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useMutation } from 'react-query';
import { registerUser } from '../services/userService';
import { ErrorMessage } from '../components/forms';

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string().required('Enter a valid phone number to continue.').label('PhoneNumber'),
});

const LoginScreen = ({ navigation }) => {

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
      if (ex.response && ex.response.status === 400) {
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
    <SafeAreaView className=" bg-white h-full ">
      <TouchableOpacity
        className="mb-5 mt-4 mx-2.5"
        onPress={() => navigation.goBack()}>
        <ChevronLeftIcon color="#616161" size={26} />
      </TouchableOpacity>


      <Formik
        initialValues={{ phoneNumber: '' }}
        onSubmit={values => handleAuthentication(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, touched }) => (

          <>

            <View className="border-[#E0E0E0] border-[0.5px]"></View>

            <View className="items-center mt-7">
              <Text className="font-[400] text-[17px] text-[#242424] mb-7">
                Enter your phone number
              </Text>
              <View className="w-[375] h-[48] px-4">
                <Text className="text-[#616161]  text-[12px] font-[400]">
                  Phone number
                </Text>

                <TextInput
                  placeholder="07.."
                  onChangeText={handleChange('phoneNumber')}
                  placeholderTextColor="#616161"
                  className="w-52"
                />

              </View>
            </View>
            <View className="pl-3">

              <View className="border-[#E0E0E0] border-[0.5px] px-3 w-80 mt-2 my-2" />
      
              <ErrorMessage error={errors['phoneNumber']} visible={touched['phoneNumber']} />

            </View>
            <View className="items-center mb-72">

              <MyCustomButton handleModel={handleSubmit} isLoading={signUpMutation.isLoading} title='Continue' loadingText='Continuing...' />

            </View>
          </>
        )}
      </Formik>



    </SafeAreaView>
  );
};

export default LoginScreen;
