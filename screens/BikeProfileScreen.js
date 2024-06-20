import React, { useContext } from 'react'
import { View, Text, SafeAreaView, Pressable } from 'react-native';
import { Pen } from 'lucide-react-native';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/slices/authSlice';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';
import PrimaryNav from '../components/PrimaryNav';



const BikeProfileScreen = ({ navigation }) => {

  const { theme } = useContext(ThemeContext);
  const currentUser = useSelector(selectUser);

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background
      }}
      className='h-full'>
      <View className=''>
      
       <PrimaryNav title={"Bike profile"} onPress={() => navigation.goBack()}/>

        <View className='items-center py-4 px-2'>

          <View
            style={{
              backgroundColor: theme === 'light' ? colors.light.container : colors.dark.container
            }}
            className='w-full py-2 rounded-[12px]'>

            <Pressable
              onPress={() => navigation.navigate('BikeManufactureDetailsScreen')}

              className='m-5 flex-row justify-between items-center'>
              <View>
                <Text
                  style={{
                    color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                  }}
                  className='text-[17px] font-[400] '>
                  Bike manufacturer
                </Text>
                <Text
                  style={{
                    color: theme === 'light' ? colors.light.text : colors.dark.text
                  }}
                  className=' text-[13px] font-[400]'>
                  {currentUser?.bikeManufacturer}
                </Text>
              </View>
              <Pressable onPress={() => navigation.navigate('BikeManufactureDetailsScreen')}>
                <Pen size={18} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
              </Pressable>
            </Pressable>


            <Pressable
              onPress={() => navigation.navigate('BikeCapacityDetailsScreen')}
              className='m-5 flex-row justify-between items-center'>
              <View>
                <Text
                  style={{
                    color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                  }}
                  className='text-[17px] font-[400]'>
                  Battery capacity
                </Text>
                <Text
                  style={{
                    color: theme === 'light' ? colors.light.text : colors.dark.text
                  }}
                  className='text-[13px] font-[400]'>
                  {currentUser?.batteryCapacity}
                </Text>
              </View>
              <Pressable onPress={() => navigation.navigate('BikeCapacityDetailsScreen')}>
                <Pen size={18} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
              </Pressable>

            </Pressable>

            <Pressable
              onPress={() => navigation.navigate('BikePlateDetailsScreen')}
              className='m-5 flex-row justify-between items-center'>
              <View>
                <Text
                  style={{
                    color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                  }}
                  className='text-[17px] font-[400]  '>
                  Number plate
                </Text>
                <Text
                  style={{
                    color: theme === 'light' ? colors.light.text : colors.dark.text
                  }}
                  className=' text-[13px] font-[400]'>
                  {currentUser?.numberPlateValue}
                </Text>
              </View>
              <Pressable onPress={() => navigation.navigate('BikePlateDetailsScreen')}>
                <Pen size={18} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
              </Pressable>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BikeProfileScreen;