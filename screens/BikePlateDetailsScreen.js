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

const validationSchema = Yup.object().shape({
    numberPlateValue: Yup.number().required('Enter the Plate Number of Your Bike.').label('numberPlateValue'),
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

            <View
                style={{
                    backgroundColor: theme === 'dark' ? colors.dark.container : colors.light.background
                }}
                className="flex-row items-center relative py-4 justify-center">
                <TouchableOpacity
                    className="absolute  left-2.5 w-10"
                    onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} size={20} />
                </TouchableOpacity>

                <Text
                    style={{
                        color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                    }}
                    className="text-[17px] font-[600]">
                    Bike plate
                </Text>
            </View>

            <Formik
                initialValues={{ numberPlateValue: '' }}
                onSubmit={values => handleBikeCapacityUpdate(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors, touched, values }) => (

                    <>
                        { theme === 'light' && (<View className="border-[#E0E0E0] border-[0.5px]" />)}

                        <View className="items-center mt-7">
                            <Text
                                style={{
                                    color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                                }}
                                className="font-[400] text-[17px]  mb-7">
                                Enter your bike's number plate
                            </Text>
                            <View className="w-full h-[48] px-5">

                                <TextInput
                                    placeholder="value"
                                    onChangeText={handleChange('numberPlateValue')}
                                    placeholderTextColor="#616161"
                                    keyboardType="numeric"
                                    className="w-52"
                                    style={{
                                        color: theme === 'light' ? colors.light.text : colors.dark.text
                                    }}
                                />

                            </View>
                        </View>

                        <View className="pl-3">
                            <View className="border-[#E0E0E0] border-[0.5px] px-3 w-80 mt-2 my-2" />
                            <ErrorMessage error={errors['numberPlateValue']} visible={touched['numberPlateValue']} />
                            <Text style={{
                                color: theme === 'light' ? colors.light.text : colors.dark.text
                            }} className="text-xs">This information is safe and thus not shared with a third party.</Text>
                        </View>

                        <View className="items-center mb-72 px-4">
                            <PrimaryButton handlePress={handleSubmit} isDisabled={values.numberPlateValue === '' ? true : false} isLoading={updateBikeNumberMutation.isLoading} text='Save' loadingText='Saving...' />
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
