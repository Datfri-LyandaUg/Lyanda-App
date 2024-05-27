import React from 'react'
import { View, Text, SafeAreaView, Pressable } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { Pen } from 'lucide-react-native';



const BikeProfileScreen = ({ navigation }) => {

  return (
    <SafeAreaView className='bg-white h-full'>
      <View className=''>
        <View className='flex-row items-center relative mt-6 justify-center mb-3'>
          <Pressable className='absolute left-4'
            onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size={20} color='#242424' />
          </Pressable>
          <Text className='text-[17px] font-[600] text-[#242424]'>
            Bike profile
          </Text>
        </View>

        <View className="border-[#E0E0E0] border-[0.5px] mt-2" />

        <View className='items-center py-4 px-2'>

          <View className='w-full bg-[#FAFAFA] py-2 rounded-[12px]'>

            <Pressable
              onPress={() => navigation.navigate('BikeManufactureDetailsScreen')}

              className='m-5 flex-row justify-between items-center'>
              <View>
                <Text className='text-[17px] font-[400]  text-[#242424]'>
                  Bike manufacturer
                </Text>
                <Text className='text-[#616161] text-[13px] font-[400]'>
                  Value
                </Text>
              </View>
              <Pressable onPress={() => navigation.navigate('BikeManufactureDetailsScreen')}>
                <Pen size={18} color='#808080' />
              </Pressable>
            </Pressable>


            <Pressable
              onPress={() => navigation.navigate('BikeCapacityDetailsScreen')}
              className='m-5 flex-row justify-between items-center'>
              <View>
                <Text className='text-[17px] font-[400]  text-[#242424]'>
                  Battery capacity
                </Text>
                <Text className='text-[#616161] text-[13px] font-[400]'>
                  Value
                </Text>
              </View>
              <Pressable onPress={() => navigation.navigate('BikeCapacityDetailsScreen')}>
                <Pen size={18} color='#808080' />
              </Pressable>

            </Pressable>

            <Pressable
              onPress={() => navigation.navigate('BikePlateDetailsScreen')}
              className='m-5 flex-row justify-between items-center'>
              <View>
                <Text className='text-[17px] font-[400]  text-[#242424]'>
                  Number plate
                </Text>
                <Text className='text-[#616161] text-[13px] font-[400]'>
                  Value
                </Text>
              </View>
              <Pressable onPress={() => navigation.navigate('BikePlateDetailsScreen')}>
                <Pen size={18} color='#808080' />
              </Pressable>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BikeProfileScreen;