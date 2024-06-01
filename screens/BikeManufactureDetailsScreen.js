import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {
    ChevronLeftIcon,
} from 'react-native-heroicons/solid';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useMutation } from 'react-query';
import { ErrorMessage } from '../components/forms';
import { updateBikeProfile } from '../services/userService';
import PrimaryButton from '../components/PrimaryButton';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setUserData } from '../redux/slices/authSlice';
import ErrorNotificationModal from '../components/ErrorNotificationModal';
import SuccessNotificationModal from '../components/SuccessNotificationModal';

const validationSchema = Yup.object().shape({
    bikeManufacturer: Yup.string().required('Enter the Manufacturer of your bike.').label('bikeManufacturer'),
});

const BikeManufactureDetailsScreen = ({ navigation }) => {

    const currentUser = useSelector(selectUser);
    const dispatch = useDispatch();
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
            const { data } = await updateBikeManufactureMutation.mutateAsync(values);
            dispatch(setUserData(data));
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
        <SafeAreaView className=" bg-white h-full">

            <View className="flex-row items-center mt-7 relative mb-2  justify-center">
                <TouchableOpacity
                    className="absolute  left-2.5 w-10"
                    onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon color="#616161" size={20} />
                </TouchableOpacity>

                <Text className="text-[#242424] text-[17px] font-[600]">
                    Bike manufacturer
                </Text>
            </View>


            <Formik
                initialValues={{ bikeManufacturer: '' }}
                onSubmit={values => handleManufacturesUpdate(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors, touched, values }) => (

                    <>
                        <View className="border-[#E0E0E0] border-[0.5px]"></View>

                        <View className="items-center mt-7">
                            <Text className="font-[400] text-[17px] text-[#242424] mb-7">
                                What brand is your bike?
                            </Text>
                            <View className="w-[375] h-[48] px-4">

                                <TextInput
                                    placeholder="Type your brand..."
                                    onChangeText={handleChange('bikeManufacturer')}
                                    placeholderTextColor="#616161"
                                    className="w-52"
                                />

                            </View>
                        </View>
                        <View className="pl-3">

                            <View className="border-[#E0E0E0] border-[0.5px] px-3 w-80 mt-2 my-2" />

                            <ErrorMessage error={errors['bikeManufacturer']} visible={touched['bikeManufacturer']} />

                        </View>
                        <View className="items-center mb-72 px-4">
                            <PrimaryButton handlePress={handleSubmit} isDisabled={values.bikeManufacturer === '' ? true : false} isLoading={updateBikeManufactureMutation.isLoading} text='Save' loadingText='Saving...' />
                        </View>
                    </>
                )}
            </Formik>

            <ErrorNotificationModal showError={showErrorNotification} errorMessage={errorDetails} handleClose={toggleErrorNotificationVisibility} />
            <SuccessNotificationModal open={showSuccessNotification} successMessage={successDetails} handleClose={toggleSuccessNotificationVisibility} />

        </SafeAreaView>
    );
};

export default BikeManufactureDetailsScreen;
