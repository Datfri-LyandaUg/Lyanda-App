import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomAppearanceButton from '../components/CustomAppearanceButton';


const AppearanceScreen = ({ navigation }) => {
    return (
        <SafeAreaView className='bg-white h-full'>
            <View className="flex-row items-center mt-7 relative mb-2  justify-center">
                <TouchableOpacity
                    className="absolute  left-2.5"
                    onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon color="#616161" size={20} />
                </TouchableOpacity>

                <Text className="text-[#242424] text-[17px] font-[600]">
                    Appearance
                </Text>
            </View>

            <View className="flex items-center justify-center px-4">
                <View className='bg-[#FAFAFA] rounded-[12px] mt-5 py-3 w-full'>

                    <CustomAppearanceButton active={true} title="Light mode" Icon1={<MaterialIcons name="check" size={18} color='#2C7721' />} Icon2={<MaterialIcons name="light-mode" size={25} color='#808080' />} />

                    <CustomAppearanceButton active={false} title="Dark mode" Icon1={<MaterialIcons name="check" size={18} color='#2C7721' />} Icon2={<MaterialIcons name="dark-mode" size={25} color='#808080' />} />

                    <CustomAppearanceButton active={false} title="System settings" Icon1={<MaterialIcons name="check" size={18} color='#2C7721' />} Icon2={<MaterialIcons name="settings" size={25} color='#808080' />} />

                </View>

                <View className="w-full flex flex-row space-x-3 mt-5">
                    <View className="flex items-center">
                        <MaterialIcons name="info-outline" size={25} color='#808080' />
                    </View>

                    <View className="flex items-center justify-center">
                        <Text>
                            If system settings is selected, the appearance will automatically adjust based on your device’s system settings.
                        </Text>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default AppearanceScreen;