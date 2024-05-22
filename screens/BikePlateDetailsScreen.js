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
import { updateManufacturer } from '../services/userService';
import PrimaryButton from '../components/PrimaryButton';

const validationSchema = Yup.object().shape({
    numberPlateValue: Yup.string().required('Enter the Plate Number of your bike.').label('numberPlateValue'),
});

const BikePlateDetailsScreen = ({ navigation }) => {

    const [currentUser] = useState({});

    const updateBikeNumberMutation = useMutation((updateParameters) =>
        updateManufacturer(currentUser?._id, updateParameters)
    );

    const handleBikeCapacityUpdate = async (values) => {

        try {
            const { data } = await updateBikeNumberMutation.mutateAsync(values);
        } catch (ex) {
            if (ex.response) {
                console.error(ex.response.data);
            }
        }
    };


    useEffect(() => {
        if (updateBikeNumberMutation.isSuccess) {
            // success logic....
        }
    }, [updateBikeNumberMutation.isSuccess]);

    return (
        <SafeAreaView className=" bg-white h-full">

            <View className="flex-row items-center mt-7 relative mb-2  justify-center">
                <TouchableOpacity
                    className="absolute  left-2.5"
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
                {({ handleChange, handleSubmit, errors, touched }) => (

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
                            <PrimaryButton handlePress={handleSubmit} isDisabled={touched['numberPlateValue'] ? false : true } isLoading={updateBikeNumberMutation.isLoading} text='Save' loadingText='Saving...' />
                        </View>
                    </>
                )}
            </Formik>

        </SafeAreaView>
    );
};

export default BikePlateDetailsScreen;
