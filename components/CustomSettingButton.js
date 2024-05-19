import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const CustomSettingButton = ({HandleOnClick, icon1, icon2, title}) => {
  return (
    <SafeAreaView>
      <View className='flex-row  items-center justify-between mx-4 space-y-7'>
    <View className='flex-row space-x-4 items-center'>
    {icon1} 
    <Text className='text-[#242424] font-[400]  text-[17px]'>
      {title}
    </Text>
    </View>
    {icon2}
    </View>




    </SafeAreaView>
  )
}

export default CustomSettingButton