import { View, Text, Pressable, SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import { ChevronRightIcon } from 'react-native-heroicons/outline'
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';
import PrimaryNav from '../components/PrimaryNav';

const AboutScreen = ({ navigation }) => {

  const { theme } = useContext(ThemeContext);
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background
      }}
      className="h-full">
      
     <PrimaryNav title={"About"} onPress={() => navigation.goBack()}/>

      <View className='items-center py-4 px-2'>

        <View
          style={{
            backgroundColor: theme === 'light' ? colors.light.container : colors.dark.container
          }}
          className='w-full py-2 rounded-[12px]'>

          <View className="items-center">
            <Text
              style={{
                color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
              }}
              className="font-[700] text-[60px]">lyanda
            </Text>
          </View>

          <View className="py-3 px-4">
            <View className="">
              <Text
                style={{
                  color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                }}
                className="font-[600] text-[17px]">Know more about us
              </Text>
            </View>

            <Pressable
              onPress={() => { }}

              className='my-2 flex-row justify-between items-center'>

              <View className='flex-row space-x-2 items-center'>

                <View>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[400]  '>
                    Website
                  </Text>

                </View>
              </View>
              <Pressable>
                <ChevronRightIcon size={15} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
              </Pressable>
            </Pressable>


            <Pressable
              onPress={() => { }}
              className='my-2 flex-row justify-between items-center'>
              <View className='flex-row space-x-2 items-center'>

                <View>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[400]  '>
                    Twitter
                  </Text>
                </View>
              </View>
              <Pressable>
                <ChevronRightIcon size={15} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
              </Pressable>

            </Pressable>

            <Pressable
              onPress={() => { }}
              className='my-2 flex-row justify-between items-center'>
              <View className='flex-row space-x-2 items-center'>

                <View>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[400]  '>
                    Instagram
                  </Text>

                </View>
              </View>
              <Pressable>
                <ChevronRightIcon size={15} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
              </Pressable>
            </Pressable>

            <Text
              style={{
                color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
              }}
              className="my-2 font-[600] text-[17px] ">About the app
            </Text>
            <Pressable
              onPress={() => { }}
              className='my-2 flex-row justify-between items-center'>
              <View className='flex-row space-x-2 items-center'>
                <View>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[400]  '>
                    Version
                  </Text>
                </View>
              </View>
              <Pressable>
                <Text
                  style={{
                    color: theme === 'light' ? colors.light.text : colors.dark.text
                  }}
                  className='text-[15px] font-[400]  '>
                  Value
                </Text>
              </Pressable>
            </Pressable>
            <Pressable
              onPress={() => { }}
              className='my-2 flex-row justify-between items-center'>
              <View className='flex-row space-x-2 items-center'>
                <View>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[400]  '>
                    Build
                  </Text>
                </View>
              </View>
              <Pressable>
                <Text
                  style={{
                    color: theme === 'light' ? colors.light.text : colors.dark.text
                  }}
                  className='text-[15px] font-[400]  '>
                  Value
                </Text>
              </Pressable>
            </Pressable>
            <Pressable
              onPress={() => { }}
              className='my-2 flex-row justify-between items-center'>
              <View className='flex-row space-x-2 items-center'>

                <View>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[400]  '>
                    Copyright
                  </Text>
                </View>
              </View>
              <Pressable>
                <ChevronRightIcon size={15} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
              </Pressable>
            </Pressable>

            <Pressable
              onPress={() => { }}
              className='my-2 flex-row justify-between items-center'>
              <View className='flex-row space-x-2 items-center'>
                <View>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[400]  '>
                    Software licenses
                  </Text>
                </View>
              </View>
              <Pressable>
                <ChevronRightIcon size={15} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
              </Pressable>
            </Pressable>
          </View>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default AboutScreen;