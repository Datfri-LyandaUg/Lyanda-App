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
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useMutation } from 'react-query';
import { ErrorMessage } from '../components/forms';
import { updateBikeProfile } from '../services/userService';
import PrimaryButton from '../components/PrimaryButton';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/slices/authSlice';
import ErrorNotificationModal from '../components/ErrorNotificationModal';
import SuccessNotificationModal from '../components/SuccessNotificationModal';

const validationSchema = Yup.object().shape({
    numberPlateValue: Yup.number().required('Enter the Plate Number of Your Bike.').label('numberPlateValue'),
});

const BikePlateDetailsScreen = ({ navigation }) => {

    const currentUser = useSelector(selectUser);
    const dispatch = useDispatch();
    const [errorDetails, setErrorDetails] = useState("");
    const [showErrorNotification, setShowErrorNotification] = useState(false);
    const [successDetails, setSuccessDetails] = useState("");
    const [showSuccessNotification, setShowSuccessNotification] = useState(false);

    const updateBikeNumberMutation = useMutation((updateParameters) =>
        updateBikeProfile(currentUser?._id, updateParameters)
    );

    const handleBikeCapacityUpdate = async (values) => {

        try {
            const { data } = await updateBikeNumberMutation.mutateAsync(values);
            dispatch(setUserData(data));
        } catch (ex) {
            if (ex.response) {
                setErrorDetails(ex.response.data);
                setShowErrorNotification(true);
            }
        }
    };


    useEffect(() => {
        if (updateBikeNumberMutation.isSuccess) {
            setSuccessDetails('BikeNumber updated.');
            setShowSuccessNotification(true);
        }
    }, [updateBikeNumberMutation.isSuccess]);

    return (
        <SafeAreaView className=" bg-white h-full">

            <View className="flex-row items-center mt-7 relative mb-2  justify-center">
                <TouchableOpacity
                    className="absolute  left-2.5 w-10"
                    onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon color="#616161" size={20} />
                </TouchableOpacity>

                <Text className="text-[#242424] text-[17px] font-[600]">
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
                        <View className="border-[#E0E0E0] border-[0.5px]"></View>

                        <View className="items-center mt-7">
                            <Text className="font-[400] text-[17px] text-[#242424] mb-7">
                                Enter your bike's number plate
                            </Text>
                            <View className="w-full h-[48] px-5">

                                <TextInput
                                    placeholder="value"
                                    onChangeText={handleChange('numberPlateValue')}
                                    placeholderTextColor="#616161"
                                    keyboardType="numeric"
                                    className="w-52"
                                />

                            </View>
                        </View>

                        <View className="pl-3">
                            <View className="border-[#E0E0E0] border-[0.5px] px-3 w-80 mt-2 my-2" />
                            <ErrorMessage error={errors['numberPlateValue']} visible={touched['numberPlateValue']} />
                            <Text className="text-xs">This information is safe and thus not shared with a third party.</Text>
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
