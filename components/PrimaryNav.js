import React, { useContext } from 'react';
import { View, Text, Pressable } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import colors from '../config/colors';
import { ThemeContext } from '../utils/ThemeContext';

export default function PrimaryNav({ title, onPress }) {

  const { theme } = useContext(ThemeContext);

  return (<>
    <View
      style={{
        backgroundColor: theme === 'dark' ? colors.dark.container : colors.light.background
      }}
      className="flex flex-row items-center relative justify-between">
     
      <Pressable
        className="absolute left-0 flex items-center justify-center w-12 py-4"
        onPress={onPress}>
        <ChevronLeftIcon color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} size={20} />
      </Pressable>

      <View className="flex items-center justify-center flex-1 py-4">
        <Text
          style={{
            color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
          }}
          className="text-[17px] font-[600]">
          {title}
        </Text>
      </View>

    </View>

    {theme === 'light' && (<View className="border-[#E0E0E0] border-[0.5px]" />)}
  </>
  );
}
