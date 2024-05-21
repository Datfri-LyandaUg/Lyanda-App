import React from 'react'
import { View, Text } from 'react-native';

const CustomSettingButton = ({ HandleOnClick, icon1, icon2, title }) => {
  return (
   
      <View className='flex-row  items-center justify-between mx-4 space-y-6 '>
        <View className='flex-row space-x-4 items-center'>
          {icon1}
          <Text className='text-[#242424] font-[400]  text-[17px]'>
            {title}
          </Text>
        </View>
        {icon2}
      </View>

  )
}

export default CustomSettingButton;