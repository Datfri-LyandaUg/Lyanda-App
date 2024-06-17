import React, { useContext } from 'react'
import { View, Text, Pressable } from 'react-native';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';

const CustomSettingButton = ({ onPress, icon1, icon2, title }) => {

  const { theme } = useContext(ThemeContext);
  return (
    <Pressable onPress={onPress} className='mx-4'>
      <View className="flex flex-row py-2 items-center justify-between">
        <View className='flex-row space-x-4 items-center'>
          {icon1}
          <Text
            style={{
              color: theme === 'light' ? colors.light.text : colors.dark.text
            }}
            className='font-[400] text-[17px]'>
            {title}
          </Text>
        </View>
        <View className=''>
          {icon2}
        </View>
      </View>
    </Pressable>
  )
}

export default CustomSettingButton;