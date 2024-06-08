import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';

const AwarenessModal = ({ title, Icon, description }) => {

    const { theme } = useContext(ThemeContext);

    return (

        <View className="">
            <View className="flex items-center justify-center my-6">
                <View className="flex items-center justify-center w-9 h-9 rounded-full">
                    {Icon}
                </View>
            </View>

            <View className='flex items-center justify-center'>
                <Text
                    style={{
                        color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                    }}
                    className="font-[600] mb-4 text-[17px]">
                    {title}
                </Text>

            </View>

            <View className="flex items-center justify-center my-4">
                <Text
                    style={{
                        color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className="text-center text-[15px] font-[400]">
                    {description}
                </Text>
            </View>

        </View>

    )
}

export default AwarenessModal;