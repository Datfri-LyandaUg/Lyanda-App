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
import jwt_decode from 'jwt-decode';
import { ErrorMessage } from '../components/forms';
import { updateBikeProfile } from '../services/userService';
import PrimaryButton from '../components/PrimaryButton';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setToken, setUserData } from '../redux/slices/authSlice';
import ErrorNotificationModal from '../components/ErrorNotificationModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';
import SuccessNotificationModal from '../components/SuccessNotificationModal';
import PrimaryNav from '../components/PrimaryNav';

const validationSchema = Yup.object().shape({
    
    numberPlateValue: Yup.string()
      .required('Enter the Plate Number of Your Bike.')
      .test(
        'length',
        'Plate number must be exactly 7 characters long.',
        (value) => value && value.length === 7
      )
      .test(
        'format',
        'Please enter a valid license number. Format: LETTERS(3)+NUMBER(3)+LETTER(1)',
        (value) => /^[A-Z]{3}[0-9]{3}[A-Z]$/.test(value)
      )
      .test(
        'invalid-characters',
        'Invalid characters entered.',
        (value) => /^[A-Z0-9]+$/.test(value)
      )
      .label('NumberPlateValue')
  });


const BikePlateDetailsScreen = ({ navigation }) => {

    const currentUser = useSelector(selectUser);
    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext);
    const [errorDetails, setErrorDetails] = useState("");
    const [showErrorNotification, setShowErrorNotification] = useState(false);
    const [successDetails, setSuccessDetails] = useState("");
    const [showSuccessNotification, setShowSuccessNotification] = useState(false);

    const updateBikeNumberMutation = useMutation((updateParameters) =>
        updateBikeProfile(currentUser?._id, updateParameters)
    );

    const toggleErrorNotificationVisibility = () => {
        setShowErrorNotification(false);
    }

    const toggleSuccessNotificationVisibility = () => {
        setShowSuccessNotification(false);
    }

    const handleBikeCapacityUpdate = async (values) => {

        try {
            const { data: token } = await updateBikeNumberMutation.mutateAsync(values);
            await AsyncStorage.setItem('currentUserToken', token);
            const decodedToken = jwt_decode(token);
            dispatch(setToken(token));
            dispatch(setUserData(decodedToken));
        } catch (ex) {
            if (ex.response) {
                setErrorDetails(ex.response.data);
                setShowErrorNotification(true);
            }
        }
    };


    useEffect(() => {
        if (updateBikeNumberMutation.isSuccess) {
            setSuccessDetails('BikePlateNumber updated.');
            setShowSuccessNotification(true);
        }
    }, [updateBikeNumberMutation.isSuccess]);

    return (
        <SafeAreaView
            style={{
                backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background
            }}
            className="h-full">

            <PrimaryNav title={"Bike plate"} onPress={() => navigation.goBack()}/>

            <Formik
                initialValues={{ numberPlateValue: '' }}
                onSubmit={values => handleBikeCapacityUpdate(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors, touched, values }) => (

                    <>
                        
                        <View className="w-full px-4">

                            <View className="flex items-center justify-center px-3 py-4 mb-3">

                                <Text
                                    style={{
                                        color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                                    }}
                                    className="font-[400] text-[17px] w-full text-center">
                                    Enter your bike's number plate
                                </Text>

                            </View>

                            <View className="">

                                <View className="flex items-center justify-center px-4 py-1 w-full">
                                    <TextInput
                                        placeholder="Number plate (e.g., UAB123Z)"
                                        onChangeText={handleChange('numberPlateValue')}
                                        placeholderTextColor="#616161"
                                        className="w-full "
                                        style={{
                                            color: theme === 'light' ? colors.light.text : colors.dark.text
                                        }}
                                    />
                                </View>

                                <View className="px-3">
                                    <View className="border-[#E0E0E0] border-[0.5px] w-full mb-1" />
                                    <ErrorMessage error={errors['numberPlateValue']} visible={touched['numberPlateValue']} />
                                    <Text style={{
                                        color: theme === 'light' ? colors.light.text : colors.dark.text
                                    }} className="text-xs my-1">This information is safe and thus not shared with a third party.</Text>
                                </View>

                            </View>

                            <View className="items-center">
                                <PrimaryButton handlePress={handleSubmit} isDisabled={values.numberPlateValue === '' ? true : false} isLoading={updateBikeNumberMutation.isLoading} text='Save' loadingText='Saving...' />
                            </View>

                        </View>
                    </>
                )}
            </Formik>

            <ErrorNotificationModal showError={showErrorNotification} errorMessage={errorDetails} handleClose={toggleErrorNotificationVisibility} />
            <SuccessNotificationModal open={showSuccessNotification} successMessage={successDetails} handleClose={toggleSuccessNotificationVisibility} />

        </SafeAreaView>
    );
};

export default BikePlateDetailsScreen;
