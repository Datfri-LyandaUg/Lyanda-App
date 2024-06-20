import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Sun, Moon, Cog, Info } from 'lucide-react-native';
import CustomAppearanceButton from '../components/CustomAppearanceButton';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';
import PrimaryNav from '../components/PrimaryNav';

const AppearanceScreen = ({ navigation }) => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (

        <View style={{
            backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background
        }} className={`h-full`}>

            <PrimaryNav title={"Appearance"} onPress={() => navigation.goBack()} />

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

                <View className="w-full flex flex-row space-x-3  mt-4">
                    <View className="flex items-center">
                        <Info size={18} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
                    </View>

                    <View className="flex items-center justify-center flex-1">
                        <Text style={{
                            color: theme === 'light' ? colors.light.text : colors.dark.text
                        }}>
                            If system settings is selected, the appearance will automatically adjust based on your device’s system settings.
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default AppearanceScreen;