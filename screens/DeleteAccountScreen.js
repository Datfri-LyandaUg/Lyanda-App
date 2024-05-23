import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { BadgeInfo } from 'lucide-react-native';


const DeleteAccountScreen = ({ navigation }) => {

    return (
        <SafeAreaView className="bg-[#FFFFFF] h-full w-full flex-1">
            <View className="flex-row items-center mt-7 mb-2  justify-center">
                <Text className="text-[#242424] text-[17px] font-[500]">
                    Delete account
                </Text>
                <View className="border-[#E0E0E0] border-[0.5px] mt-2 " />
            </View>
            <View className="border-[#E0E0E0] border-[0.5px] mt-2 " />

            <View className="flex-1 flex items-center justify-center">

                <View className="flex items-center justify-center  p-8">

                    <View className="">
                        <View className="">
                            <View className="flex items-center justify-center my-6">
                                <View className="flex items-center justify-center w-9 h-9 rounded-full">
                                    <BadgeInfo color="#C50F1F" size={40} />
                                </View>
                            </View>

                            <View className='flex items-center justify-center'>
                                <Text className="text-[#242424] font-[600] mb-4 text-[17px]">
                                    Account Deleted
                                </Text>

                            </View>

                            <View className="flex items-center justify-center my-4">
                                <Text className="text-[#616161] text-center text-[15px] font-[400]">
                                    Your Lyanda information has been removed. We hope you had a great experience and we hope to see you soon.
                                </Text>
                            </View>

                        </View>

                        <View className=''>
                            <PrimaryButton handlePress={() => {}} text={"Create Account"} />
                        </View>
                    </View>

                </View>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
            backgroundColor: 'white',
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
export default DeleteAccountScreen;
