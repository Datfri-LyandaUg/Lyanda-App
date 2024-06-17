import React, { useContext } from 'react'
import { View, Text, Pressable } from 'react-native';
import { Check } from 'lucide-react-native';
import { ThemeContext } from '../utils/ThemeContext';

const CustomAppearanceButton = ({ active, Icon, title, onPress }) => {
    const { theme } = useContext(ThemeContext);
    return (

        <Pressable onPress={onPress} className='mx-4'>
            <View className="flex flex-row items-center justify-between w-full">
                <View className='flex-row space-x-4  items-center justify-center py-3'>
                    <View className=" flex items-center justify-center w-5 h-5">
                        { active && <Check size={18} color='#2C7721' />}
                    </View>
                    <View>
                        <Text className={`font-[400]  text-[17px]  ${theme === 'light' ? 'text-[#242424]' : 'text-white'} `}>
                            {title}
                        </Text>
                    </View>
                </View>

                <View className="flex items-center justify-center">
                  {Icon}
                </View>
            </View>
        </Pressable>

    )
}

export default CustomAppearanceButton;