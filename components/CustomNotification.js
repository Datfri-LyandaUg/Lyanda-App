import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';

const CustomNotification = ({ Icon, title, body }) => {

    const { theme } = useContext(ThemeContext);

    return (
        <View className="w-full items-center px-4 mb-2">
            <View className="flex-row mx-3 space-x-4 items-center">
                <View className="flex items-center justify-center">
                    { Icon }
                </View>

                <View className="">
                    <Text
                        style={{
                            color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                        }}
                        className="font-[400] text-[17px]">
                         { title }
                    </Text>
                    <Text
                        style={{
                            color: theme === 'light' ? colors.light.text : colors.dark.text
                        }}
                        className="text-[13px] font-[400]">
                       { body }
                    </Text>
                </View>

            </View>
        </View>
    );
}

export default CustomNotification;