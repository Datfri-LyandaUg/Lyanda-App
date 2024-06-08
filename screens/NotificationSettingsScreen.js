import React, { useContext, useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Switch } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';


const NotificationSettingsScreen = ({ navigation }) => {

    const { theme } = useContext(ThemeContext);
    const [isMessagesEnabled, setIsMessagesEnabled] = useState(true);
    const [isNewsEnabled, setIsNewsEnabled] = useState(true);
    const [isOrdersEnabled, setIsOrdersEnabled] = useState(true);

    const toggleMessagesSwitch = () => setIsMessagesEnabled(previousState => !previousState);
    const toggleNewsSwitch = () => setIsNewsEnabled(previousState => !previousState);
    const toggleOrdersSwitch = () => setIsOrdersEnabled(previousState => !previousState);

    return (
        <SafeAreaView
            style={{
                backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background
            }}
            className='h-full'>

            <View
                style={{
                    backgroundColor: theme === 'dark' ? colors.dark.container : colors.light.background
                }}
                className="flex-row items-center py-4 relative justify-center">
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
                    Notifications
                </Text>
            </View>

            <View className="flex items-center justify-center px-4">
                <View
                    style={{
                        backgroundColor: theme === 'light' ? colors.light.container : colors.dark.container
                    }}
                    className='rounded-[12px] mt-5 py-3 px-3 w-full'>
                    <View className="w-full flex flex-row mb-3">
                        <View className="flex-1">
                            <Text 
                            style={{
                                color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                            }} 
                            className="text-xl font-semibold">Messages</Text>
                            <Text style={{
                            color: theme === 'light' ? colors.light.text : colors.dark.text
                        }}>
                                We will send you information regards our latest
                                deals, promotions, special offers, etc.
                            </Text>
                        </View>
                        <View className="w-10 flex items-center justify-center">
                            <Switch
                                onValueChange={toggleMessagesSwitch}
                                value={isMessagesEnabled}
                            />
                        </View>
                    </View>

                    <View className="w-full flex flex-row mb-3">
                        <View className="flex-1">
                            <Text 
                            style={{
                                color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                            }} 
                            className="text-xl font-semibold">News</Text>
                            <Text style={{
                            color: theme === 'light' ? colors.light.text : colors.dark.text
                        }}>
                                We will send you information about new
                                products and campaigns.
                            </Text>
                        </View>
                        <View className="w-10 flex items-center justify-center">
                            <Switch
                                onValueChange={toggleNewsSwitch}
                                value={isNewsEnabled}
                            />
                        </View>
                    </View>

                    <View className="w-full flex flex-row mb-3">
                        <View className="flex-1">
                            <Text 
                            style={{
                                color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
                            }} 
                            className="text-xl font-semibold">Orders</Text>
                            <Text style={{
                            color: theme === 'light' ? colors.light.text : colors.dark.text
                        }}>
                                We will notify you of updates to your order.
                            </Text>
                        </View>
                        <View className="w-10 flex items-center justify-center">
                            <Switch
                                onValueChange={toggleOrdersSwitch}
                                value={isOrdersEnabled}
                            />
                        </View>
                    </View>

                </View>
            </View>

        </SafeAreaView>
    )
}

export default NotificationSettingsScreen;