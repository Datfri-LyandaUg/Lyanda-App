import React from 'react'
import { View, Text } from 'react-native';

const AwarenessModal = ({ title, Icon, description }) => {
    return (

        <View className="">
            <View className="flex items-center justify-center my-6">
                <View className="flex items-center justify-center w-9 h-9 rounded-full">
                    {Icon}
                </View>
            </View>

            <View className='flex items-center justify-center'>
                <Text className="text-[#242424] font-[600] mb-4 text-[17px]">
                    {title}
                </Text>

            </View>

            <View className="flex items-center justify-center my-4">
                <Text className="text-[#616161] text-center text-[15px] font-[400]">
                    {description}
                </Text>
            </View>

        </View>

    )
}

export default AwarenessModal;