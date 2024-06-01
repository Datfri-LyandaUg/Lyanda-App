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
import { BatteryFull } from 'lucide-react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/slices/authSlice';
import ErrorNotificationModal from '../components/ErrorNotificationModal';
import SuccessNotificationModal from '../components/SuccessNotificationModal';


const validationSchema = Yup.object().shape({
    bikeCapacity: Yup.string().required('Enter the Capacity of your Bike.').label('BikeCapacity'),
});

const BikeCapacityDetailsScreen = ({ navigation }) => {

    const currentUser = useSelector(selectUser);
    const dispatch = useDispatch();
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
            const { data } = await updateBikeCapacityMutation.mutateAsync(values);
            dispatch(setUserData(data));
        } catch (ex) {
            if (ex.response) {
                setErrorDetails(ex.response.data);
                setShowErrorNotification(true);
            }
        }
    };


    useEffect(() => {
        if (updateBikeCapacityMutation.isSuccess) {
            setSuccessDetails('BikeCapacity updated.');
            setShowSuccessNotification(true);
        }
    }, [updateBikeCapacityMutation.isSuccess]);

    return (
        <SafeAreaView className="bg-white h-full">

            <View className="flex-row items-center mt-7 relative mb-2  justify-center">
                <TouchableOpacity
                    className="absolute  left-2.5 w-10"
                    onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon color="#616161" size={20} />
                </TouchableOpacity>

                <Text className="text-[#242424] text-[17px] font-[600]">
                    Bike capacity
                </Text>
            </View>

            <Formik
                initialValues={{ bikeCapacity: '' }}
                onSubmit={values => handleBikeCapacityUpdate(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors, touched, values }) => (

                    <>

                        <View className="border-[#E0E0E0] border-[0.5px]"></View>

                        <View className="items-center mt-7 mb-4">
                            <Text className="font-[400] text-[17px] text-[#242424] mb-7">
                                What is the capacity of your bike?
                            </Text>

                            <View className="flex flex-row space-x-2 w-full px-5">

                                <View className="flex items-center justify-center">
                                    <BatteryFull size={30} color="#808080" />
                                </View>

                                <View className="h-[48] flex-1">
                                    <TextInput
                                        placeholder="250Watt-hours"
                                        onChangeText={handleChange('bikeCapacity')}
                                        placeholderTextColor="#616161"
                                        className="w-52"
                                    />

                                    <View className="border-[#E0E0E0] border-[0.5px] mt-2 my-2" />

                                </View>

                            </View>

                        </View>

                        <View className="pl-3">
                            <ErrorMessage error={errors['bikeCapacity']} visible={touched['bikeCapacity']} />
                        </View>

                        <View className="items-center mb-72 px-4">
                            <PrimaryButton isDisabled={values.bikeCapacity === "" ? true : false} handlePress={handleSubmit} isLoading={updateBikeCapacityMutation.isLoading} text='Save' loadingText='Saving...' />
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
