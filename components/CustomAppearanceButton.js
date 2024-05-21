import React from 'react'
import { View, Text } from 'react-native';

const CustomAppearanceButton = ({ active, Icon1, Icon2, title }) => {
    return (

        <View className='flex-row  items-center justify-between mx-4 space-y-6 '>
            <View className='flex-row space-x-4 items-center'>
                <View className=" flex items-center justify-center w-5 h-5">
                    {active && Icon1}
                </View>
                <View>
                    <Text className='text-[#242424] font-[400]  text-[17px]'>
                        {title}
                    </Text>
                </View>
            </View>

            <View className="flex items-center justify-center">
                {Icon2}
            </View>
        </View>

    )
}

export default CustomAppearanceButton;