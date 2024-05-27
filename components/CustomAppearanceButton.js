import React from 'react'
import { View, Text } from 'react-native';
import { Check } from 'lucide-react-native';

const CustomAppearanceButton = ({ active, Icon, title }) => {
    return (

        <View className='flex-row  items-center justify-between mx-4 space-y-6 '>
            <View className='flex-row space-x-4 items-center'>
                <View className=" flex items-center justify-center w-5 h-5">
                    {active && <Check size={18} color='#2C7721' />}
                </View>
                <View>
                    <Text className='text-[#242424] font-[400]  text-[17px]'>
                        {title}
                    </Text>
                </View>
            </View>

            <View className="flex items-center justify-center">
                {Icon}
            </View>
        </View>

    )
}

export default CustomAppearanceButton;