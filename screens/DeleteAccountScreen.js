import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { BadgeInfo } from 'lucide-react-native';
import AwarenessModal from '../components/AwarenessModal';


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
                        <AwarenessModal title={"Account Deleted"} Icon={<BadgeInfo color="#C50F1F" size={40} />} description={"Your Lyanda information has been removed. We hope you had a great experience and we hope to see you soon."} />
        
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
