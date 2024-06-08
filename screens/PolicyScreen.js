import React, { useContext } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Pressable, ScrollView } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';


const PolicyScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background
      }}
      className="h-full">
      <View
        style={{
          backgroundColor: theme === 'dark' ? colors.dark.container : colors.light.background
        }}
        className="flex-row items-center py-4 relative  justify-center">
        <TouchableOpacity
          className="absolute  left-2.5 w-10"
          onPress={() => navigation.goBack()}>
          <ChevronLeftIcon color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} size={20} />
        </TouchableOpacity>

        <Text
          style={{
            color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
          }}
          className="text-[17px] font-[600]">
          Terms of service
        </Text>
      </View>

      <View className="border-[#E0E0E0] border-[0.5px]" />


      <View className='items-center py-3 px-2 flex-1'>

        <View
          style={{
            backgroundColor: theme === 'light' ? colors.light.container : colors.dark.container
          }}
          className="w-full py-2 rounded-[12px]">

          <ScrollView className="">


            <View className=' items-center'>

              <View>
                <Text
                  style={{
                    color: theme === 'light' ? colors.light.text : colors.dark.text
                  }}
                  className='text-[13px] font-[400]'>
                  Our user agreement outlines the terms and conditions of
                </Text>
                <Text
                  style={{
                    color: theme === 'light' ? colors.light.text : colors.dark.text
                  }}
                  className='text-[13px] font-[400]'>
                  using our app, including your rights and responsibilities.
                </Text>
                <Text
                  style={{
                    color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                  }}
                  className='text-[17px] font-[600]  mt-10'>Last Updated: September 01st , 2023</Text>
              </View>

            </View>

            <Pressable
              className='m-5 flex-row justify-between items-center'>
              <View className='flex-row space-x-2 items-center'>

                <View>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[13px] font-[400] '>
                    Welcome to Lyanda! These Terms of Service ("Terms'') are a legally binding agreement between you and Gasfilup App (''we," "us," or "our"), governing your use of the Gasfilup mobile application and related services ("Services''). Before you start using our app, please read these Terms very carefully. By accessing or using Gasfilup, you agree to be bound by these Terms. If you do not agree to any of these Terms, please do not use our Services.
                  </Text>

                </View>
              </View>
            </Pressable>

            <View
            >
              <View className='space-y-4 py-4 px-5'>
                <Text
                  style={{
                    color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                  }}
                  className='text-[17px] font-[600]'>Account Creation and Usage</Text>

                <View >

                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[400]'>
                    Account Creation:
                  </Text>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[13px] font-[400]'>
                    To use our Services, you are required to have an account. You agree to provide accurate, current, and complete information during the account creation process.
                  </Text>

                </View>
                <View>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[400] '>
                    Account Security:
                  </Text>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[13px] font-[400] '>
                    You are solely responsible for maintaining the confidentiality of your account credentials, including your password. You agree not to share your account details with anyone else.
                  </Text>

                </View>

                <View>

                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[400] '>
                    Unauthorized Use:
                  </Text>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[13px] font-[400] '>
                    You are responsible for all activities that occur under your account. If you suspect any unauthorized use of your account, you must notify us Immediately so we can block access to that particular account.
                  </Text>
                </View>


                <View>

                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                    }}
                    className='text-[17px] font-[600]  mb-5'>
                    Ordering and Delivery
                  </Text>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[400] '>
                    Order Placement:

                  </Text>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[13px] font-[400] '>
                    Our Services allow you to place orders for fuel delivery
                    through the app. You can select the type and quantity of
                    fuel you need.
                  </Text>

                </View>

                <View>

                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[400] '>
                    Location Information:
                  </Text>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[13px] font-[400] '>
                    To ensure accurate delivery, you must provide us your
                    exact/accurate location for the fuel delivery

                  </Text>

                </View>


                <View>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[400] '>
                    Delivery times:
                  </Text>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[13px] font-[400] '>
                    While we strive to provide accurate delivery estimates,
                    please note that unexpected circumstances may cause
                    delays.
                  </Text>
                </View>

                <View>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                    }}
                    className='text-[17px] font-[600] mb-5'> Payment and Transactions
                  </Text>

                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[400] '>
                    Payment Authorization:
                  </Text>

                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[13px] font-[400] '>
                    By placing an order, you authorize us to charge you for
                    the cost of fuel and the delivery services provided.
                  </Text>

                </View>


                <View>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[400] '>
                    Payment Methods:
                  </Text>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[13px] font-[400] '>
                    Cash and/or Cashless (e-transactions) like mobile money
                    payments and/or our e-wallet can be used for payment
                    while using our platform.
                  </Text>
                </View>


                <View>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                    }}
                    className='text-[17px] font-[600]  mb-5'>
                    Cancellation and Refunds</Text>

                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[400]'>
                    Order Cancellation:
                  </Text>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[13px] font-[400] '>
                    If you need to cancel an order, you can do so before the
                    fuel dispatches.
                    Cancelation policies are available within the app.
                  </Text>

                </View>

                <View>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[400] '>
                    Refund Policy:
                  </Text>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[13px] font-[400] '>
                    Refunds, if applicable, will be processed based on the
                    refund policy

                    outlined in the app. Specific circumstances may affect
                    refund eligibility
                  </Text>

                </View>


                <View>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                    }}
                    className='text-[17px] font-[600]  mb-5'>Prohibited Activities</Text>

                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[400] '>
                    Misuse:
                  </Text>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[13px] font-[400] '>
                    You agree not to use our Services for any illegal;0
                  </Text>
                </View>

                <View>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                    }}
                    className='text-[17px] font-[600] mb-5'>Intellectual Property</Text>

                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[400] '>
                    Ownership:
                  </Text>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[13px] font-[400] '>

                    All content, features, and intellectual property within the
                    app are owned by Datfri Cleaning Company International
                    SMC Uganda Limited and protected by copyright and
                    other intellectual property laws.

                  </Text>
                </View>
                <View>


                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[400] '>
                    Use Restrictions:
                  </Text>

                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[13px] font-[400] '>

                    You may not reproduce, distribute, modify, or create
                    derivative works from any part of the app without our
                    prior written consent

                  </Text>
                </View>


                <View>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                    }}
                    className='text-[17px] font-[600] mb-5'>Privacy</Text>

                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[400] '>
                    Data Collection:
                  </Text>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[13px] font-[400] '>
                    Your use of the app is subject to our Privacy Policy,...
                  </Text>

                </View>



                <View>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                    }}
                    className='text-[17px] font-[600]   mb-5'>
                    Termination </Text>

                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[400] '>
                    Termination Rights:
                  </Text>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[13px] font-[400] '>
                    We reserve the right to terminate your account and
                    access to the app at our sole discretion.
                  </Text>
                </View>


                <View>

                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[600] mb-5'>Disclaimer of Warranties</Text>


                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[13px] font-[400]'>
                    "As Is" Basis:

                    Our Services are provided "as is" and "as available." We
                    do not make any warranties or representations regarding
                    the app's accuracy, reliability, or suitability for your
                    specific needs.
                  </Text>


                </View>

                <View>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                    }}
                    className='text-[17px] font-[600]  mb-5'>Limitation of Liability</Text>

                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[400] '>
                    Liability Exclusion:
                  </Text>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[13px] font-[400] '>
                    1- We shall not be liable for any direct, indirect,
                    incidental, special, or consequential damages arising
                    from your use of the app or any actions taken based on
                    the information provided within the app.
                  </Text>

                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[13px] font-[400]  mt-5 '>
                    2- Gasfilup will NOT be liable/answerable for any
                    property(s) lost, stolen, taken from a user of our
                    platform/customer/client by a delivery person(s), guy(s),
                    agent(s), courier(s) whom you interact with in or around
                    your location of command/need while using our
                    platform(s). Users of our platform(s) are to take care of
                    their security, personal property(s), automobile(s),
                    automobile parts and belonging(s) in and around their
                    surrounding(s) etc.
                  </Text>

                </View>


                <View>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                    }}
                    className='text-[17px] font-[600]  mb-5'>Changes to Terms</Text>

                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[15px] font-[400]'>
                    Modification:
                  </Text>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.text : colors.dark.text
                    }}
                    className='text-[13px] font-[400]'>
                    We reserve the right to modify these Terms at any time0
                  </Text>
                </View>

                <View>
                  <Text
                    style={{
                      color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                    }}
                    className='text-[17px] font-[600]  '>Governing Law</Text>
                  <Text 
                  style={{
                    color: theme === 'light' ? colors.light.text : colors.dark.text
                }}
                  className='text-[15px] font-[400]  mt-5'>
                    Applicable Law:
                  </Text>
                  <Text 
                  style={{
                    color: theme === 'light' ? colors.light.text : colors.dark.text
                }}
                  className='text-[13px] font-[400]  '>
                    These Terms are governed by and construed in
                    accordance with the laws of the Republic of Uganda,
                    without regard to its conflict of law principles.
                  </Text>

                  <Text 
                  style={{
                    color: theme === 'light' ? colors.light.text : colors.dark.text
                }}
                  className='text-[13px] font-[400]  mt-5'>
                    By using the Gasfilup app, you acknowledge that you
                    have read, understood, and agreed to these detailed
                    Terms. If you have any questions, please contact us on:
                  </Text>

                  <Text 
                  style={{
                    color: theme === 'light' ? colors.light.text : colors.dark.text
                }}
                  className='text-[13px] font-[400]  mt-5'>
                    WhatsApp: +256 755 954 420
                    Email: lyanda@gmail.com
                    Twitter/X: @lyanda
                  </Text>

                  <Text 
                  style={{
                    color: theme === 'light' ? colors.light.text : colors.dark.text
                }}
                  className='text-[13px] font-[400] '>
                    LinkedIn: lyanda
                  </Text>

                  <Text 
                  style={{
                    color: theme === 'light' ? colors.light.text : colors.dark.text
                }}
                  className='text-[13px] font-[400]  mt-5'>
                    lyanda Kampala, Uganda
                  </Text>
                </View>
              </View>
            </View>

          </ScrollView>

        </View>

      </View>

    </SafeAreaView>
  )
}

export default PolicyScreen