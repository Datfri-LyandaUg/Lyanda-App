import React, { useContext, useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TextInput
} from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useMutation } from 'react-query';
import { ErrorMessage } from '../components/forms';
import { updateBikeProfile } from '../services/userService';
import jwt_decode from 'jwt-decode';
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
    bikeManufacturer: Yup.string().required('Enter the Manufacturer of your bike.').label('bikeManufacturer'),
});

const BikeManufactureDetailsScreen = ({ navigation }) => {

    const currentUser = useSelector(selectUser);
    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext);
    const [errorDetails, setErrorDetails] = useState("");
    const [showErrorNotification, setShowErrorNotification] = useState(false);
    const [successDetails, setSuccessDetails] = useState("");
    const [showSuccessNotification, setShowSuccessNotification] = useState(false);


    const toggleErrorNotificationVisibility = () => {
        setShowErrorNotification(false);
    }

    const toggleSuccessNotificationVisibility = () => {
        setShowSuccessNotification(false);
    }

    const updateBikeManufactureMutation = useMutation((updateParameters) =>
        updateBikeProfile(currentUser?._id, updateParameters)
    );

    const handleManufacturesUpdate = async (values) => {

        try {
            const { data: token } = await updateBikeManufactureMutation.mutateAsync(values);
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
        if (updateBikeManufactureMutation.isSuccess) {
            setSuccessDetails('BikeManufacturer updated.');
            setShowSuccessNotification(true);
        }
    }, [updateBikeManufactureMutation.isSuccess]);

    return (
        <SafeAreaView
            style={{
                backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background
            }}
            className="h-full">

            <PrimaryNav title={"Bike manufacturer"} onPress={() => navigation.goBack()}/>

            <Formik
                initialValues={{ bikeManufacturer: '' }}
                onSubmit={values => handleManufacturesUpdate(values)}
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
                                    What brand is your bike?
                                </Text>

                            </View>

                            <View className="">

                                <View className="flex items-center justify-center px-4 py-3 w-full">
                                    <TextInput
                                        placeholder="Type your brand..."
                                        onChangeText={handleChange('bikeManufacturer')}
                                        placeholderTextColor="#616161"
                                        className="w-full"
                                        style={{
                                            color: theme === 'light' ? colors.light.text : colors.dark.text
                                        }}
                                    />
                                </View>

                                <View className="px-4">
                                    <View className="border-[#E0E0E0] border-[0.5px] w-full" />
                                    <ErrorMessage error={errors['bikeManufacturer']} visible={touched['bikeManufacturer']} />
                                </View>

                            </View>

                            <View className="items-center">
                                <PrimaryButton handlePress={handleSubmit} isDisabled={values.bikeManufacturer === '' ? true : false} isLoading={updateBikeManufactureMutation.isLoading} text='Save' loadingText='Saving...' />
                            </View>

                        </View>
                    </>
                )}
            </Formik>

            <ErrorNotificationModal showError={showErrorNotification} errorMessage={errorDetails} handleClose={toggleErrorNotificationVisibility} />
            <SuccessNotificationModal visible ={showSuccessNotification} successMessage={successDetails} handleClose={toggleSuccessNotificationVisibility} />

        </SafeAreaView>
    );
};

export default BikeManufactureDetailsScreen;
