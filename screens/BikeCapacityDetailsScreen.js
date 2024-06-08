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
import { ErrorMessage } from '../components/forms';
import jwt_decode from 'jwt-decode';
import { updateBikeProfile } from '../services/userService';
import PrimaryButton from '../components/PrimaryButton';
import { BatteryFull } from 'lucide-react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setToken, setUserData } from '../redux/slices/authSlice';
import ErrorNotificationModal from '../components/ErrorNotificationModal';
import SuccessNotificationModal from '../components/SuccessNotificationModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';


const validationSchema = Yup.object().shape({
    batteryCapacity: Yup.string().required('Enter the Capacity of your Bike.').label('BikeCapacity'),
});

const BikeCapacityDetailsScreen = ({ navigation }) => {

    const currentUser = useSelector(selectUser);
    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext);
    const [errorDetails, setErrorDetails] = useState("");
    const [showErrorNotification, setShowErrorNotification] = useState(false);
    const [successDetails, setSuccessDetails] = useState("");
    const [showSuccessNotification, setShowSuccessNotification] = useState(false);

    const updateBikeCapacityMutation = useMutation((updateParameters) =>
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
            const { data: token } = await updateBikeCapacityMutation.mutateAsync(values);
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
        if (updateBikeCapacityMutation.isSuccess) {
            setSuccessDetails('BatteryCapacity updated.');
            setShowSuccessNotification(true);
        }
    }, [updateBikeCapacityMutation.isSuccess]);

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
                className="flex-row items-center py-4 relative justify-center">
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
                    Bike capacity
                </Text>
            </View>

            <Formik
                initialValues={{ batteryCapacity: '' }}
                onSubmit={values => handleBikeCapacityUpdate(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors, touched, values }) => (

                    <>

                        {theme === 'light' && (<View className="border-[#E0E0E0] border-[0.5px]" />)}

                        <View className="items-center mt-7 mb-4">
                            <Text
                                style={{
                                    color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                                }}
                                className="font-[400] text-[17px]  mb-7">
                                What is the capacity of your bike?
                            </Text>

                            <View className="flex flex-row space-x-2 w-full px-5">

                                <View className="flex items-center justify-center">
                                    <BatteryFull size={30} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
                                </View>

                                <View className="h-[48] flex-1">
                                    <TextInput
                                        placeholder="250Watt-hours"
                                        onChangeText={handleChange('batteryCapacity')}
                                        placeholderTextColor="#616161"
                                        className="w-52"
                                        style={{
                                            color: theme === 'light' ? colors.light.text : colors.dark.text
                                        }}
                                    />

                                    <View className="border-[#E0E0E0] border-[0.5px] mt-2 my-2" />

                                </View>

                            </View>

                        </View>

                        <View className="pl-3">
                            <ErrorMessage error={errors['batteryCapacity']} visible={touched['bikeCapacity']} />
                        </View>

                        <View className="items-center mb-72 px-4">
                            <PrimaryButton isDisabled={values.batteryCapacity === "" ? true : false} handlePress={handleSubmit} isLoading={updateBikeCapacityMutation.isLoading} text='Save' loadingText='Saving...' />
                        </View>
                    </>
                )}
            </Formik>

            <ErrorNotificationModal showError={showErrorNotification} errorMessage={errorDetails} handleClose={toggleErrorNotificationVisibility} />
            <SuccessNotificationModal open={showSuccessNotification} successMessage={successDetails} handleClose={toggleSuccessNotificationVisibility} />

        </SafeAreaView>
    );
};

export default BikeCapacityDetailsScreen;
