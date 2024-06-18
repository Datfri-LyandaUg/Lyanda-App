import React, { useContext } from 'react'
import { View, Text, SafeAreaView, Pressable } from 'react-native'
import { ChevronRightIcon } from 'react-native-heroicons/outline';
import { Phone, MessageCircleQuestion, Bug } from 'lucide-react-native';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';
import PrimaryNav from '../components/PrimaryNav';

const HelpScreen = ({ navigation }) => {

  const { theme } = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background
      }}
      className="h-full">
    
      <PrimaryNav title={"Help"} onPress={() => navigation.goBack()}/>

      <View className='items-center py-4 px-2'>

        <View
          style={{
            backgroundColor: theme === 'light' ? colors.light.container : colors.dark.container
          }}
          className='w-full py-3 px-4 rounded-[12px]'>

          <Pressable
            onPress={() => { }}

            className='flex-row justify-between items-center'>

            <View className='my-2 flex-row space-x-3 flex-1 items-center'>
              <Pressable>
                <Phone size={25} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
              </Pressable>
              <View>
                <Text
                  style={{
                    color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                  }}
                  className='text-[17px] font-[400]  '>
                  Call support
                </Text>
                <Text 
                style={{
                  color: theme === 'light' ? colors.light.text : colors.dark.text
              }}
                className=' text-[13px] font-[400]'>
                  Place a call to our service desk directly.
                </Text>
              </View>
            </View>
            <Pressable className="w-9 flex items-end justify-end">
              <ChevronRightIcon size={15} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
            </Pressable>
          </Pressable>


          <Pressable
            onPress={() => navigation.navigate('FaqScreen')}
            className='my-2 flex-row justify-between items-center'>
            <View className='flex-row space-x-3  items-center flex-1'>
              <Pressable>
                <MessageCircleQuestion size={25} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
              </Pressable>
              <View>
                <Text
                  style={{
                    color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                  }}
                  className='text-[17px] font-[400]  '>
                  FAQ
                </Text>
                <Text
                  style={{
                    color: theme === 'light' ? colors.light.text : colors.dark.text
                  }}
                  className=' text-[13px] font-[400]'>
                  Find answers to frequently asked questions
                </Text>

                <Text
                  style={{
                    color: theme === 'light' ? colors.light.text : colors.dark.text
                  }}
                  className=' text-[13px] font-[400]'>
                  here.
                </Text>

              </View>
            </View>
            <Pressable className="w-9 flex items-end justify-end">
              <ChevronRightIcon size={15} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
            </Pressable>
          </Pressable>

          <Pressable
            onPress={() => { }}
            className='my-2 flex-row justify-between items-center'>

            <View className='flex-row space-x-3 items-center flex-1'>
              <Pressable>
                <Bug size={25} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
              </Pressable>

              <View className="w-60">
                <Text
                  style={{
                    color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                  }}
                  className='text-[17px] font-[400]  '>
                  Report a problem
                </Text>
                <Text
                  style={{
                    color: theme === 'light' ? colors.light.text : colors.dark.text
                  }}
                  className=' text-[13px] font-[400]'>
                  If a feature or product is not working correctly
                  app better.
                </Text>
                <Text
                  style={{
                    color: theme === 'light' ? colors.light.text : colors.dark.text
                  }}
                  className=' text-[13px] font-[400]'>

                  you can give feedback and help us make the

                </Text>
                <Text
                  style={{
                    color: theme === 'light' ? colors.light.text : colors.dark.text
                  }}
                  className=' text-[13px] font-[400]'>
                  app better.
                </Text>
              </View>
            </View>

            <Pressable className="w-9 flex items-end justify-end">
              <ChevronRightIcon size={15} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
            </Pressable>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HelpScreen;