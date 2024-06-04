import React, { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { Sun, Moon, Cog, Info } from 'lucide-react-native';
import CustomAppearanceButton from '../components/CustomAppearanceButton';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';

const AppearanceScreen = ({ navigation }) => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (

        <View style={{
            backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background
        }} className={`h-full`}>

            <View style={{
                backgroundColor: theme === 'dark' ? colors.dark.container : colors.light.background
            }} className={`flex-row items-center relative mb-2 py-4 justify-center`}>
                <TouchableOpacity
                    className="absolute  left-2.5 w-10"
                    onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} size={20} />
                </TouchableOpacity>

                <Text className={`text-[17px] font-[600] text-[${theme === 'light' ? colors.light.headerText : colors.dark.headerText}] `}>
                    Appearance
                </Text>
            </View>

            <View className="flex items-center justify-center px-4">
                <View
                    style={{
                        backgroundColor: theme === 'light' ? colors.light.container : colors.dark.container
                    }}
                    className={`rounded-[12px] mt-5 py-3 w-full`}>

                    <CustomAppearanceButton active={theme === 'light'} title="Light mode" Icon={<Sun size={25} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} onPress={() => {
                        toggleTheme('light');
                    }} />

                    <CustomAppearanceButton active={theme === 'dark'} title="Dark mode" Icon={<Moon size={25} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} onPress={() => {
                        toggleTheme('dark');
                    }} />

                    <CustomAppearanceButton active={theme === 'system'} title="System settings" Icon={<Cog size={25} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} onPress={() => {
                        toggleTheme('system');
                    }} />

                </View>

                <View className="w-full flex flex-row space-x-3 mt-5">
                    <View className="flex items-center">
                        <Info size={18} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
                    </View>

                    <View className="flex items-center justify-center">
                        <Text style={{
                            color: theme === 'light' ? colors.light.text : colors.dark.text
                        }}>
                            If system settings is selected, the appearance will automatically adjust based on your device’s system settings.
                        </Text>
                    </View>
                </View>
            </View>
        </View>
        
    )
}

export default AppearanceScreen;