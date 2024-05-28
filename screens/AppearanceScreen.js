import React, { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { Sun, Moon, Cog, Info } from 'lucide-react-native';
import CustomAppearanceButton from '../components/CustomAppearanceButton';
import { ThemeContext } from '../utils/ThemeContext';


const AppearanceScreen = ({ navigation }) => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (

        <View className={`h-full ${theme === 'light' ? "bg-white" : "bg-black"}`}>
            <View className="flex-row items-center mt-7 relative mb-2  justify-center">
                <TouchableOpacity
                    className="absolute  left-2.5 w-10"
                    onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon color="#616161" size={20} />
                </TouchableOpacity>

                <Text className={`text-[17px] font-[600] ${theme === 'light' ? 'text-[#242424]': 'text-white'}`}>
                    Appearance
                </Text>
            </View>

            <View className="flex items-center justify-center px-4">
                <View className={`${theme === 'light' ? "bg-[#FAFAFA]" : "bg-black"} rounded-[12px] mt-5 py-3 w-full`}>

                    <CustomAppearanceButton active={theme === 'light'} title="Light mode" Icon={<Sun size={25} color='#808080' />} onPress={() => {
                        toggleTheme('light');
                    }} />

                    <CustomAppearanceButton active={theme === 'dark'} title="Dark mode" Icon={<Moon size={25} color='#808080' />} onPress={() => {
                        toggleTheme('dark');
                    }} />

                    <CustomAppearanceButton active={theme === 'system'} title="System settings" Icon={<Cog size={25} color='#808080' />} onPress={() => {
                        toggleTheme('system');
                    }} />

                </View>

                <View className="w-full flex flex-row space-x-3 mt-5">
                    <View className="flex items-center">
                        <Info size={18} color='#808080' />
                    </View>

                    <View className="flex items-center justify-center">
                        <Text className={`${theme === 'light' ? '' : 'text-white'}`}>
                            If system settings is selected, the appearance will automatically adjust based on your device’s system settings.
                        </Text>
                    </View>
                </View>
            </View>
        </View>


    )
}

export default AppearanceScreen;