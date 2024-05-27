import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Switch } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'


const NotificationSettingsScreen = ({ navigation }) => {
    return (
        <SafeAreaView className='bg-white h-full'>
            <View className="flex-row items-center mt-7 relative mb-2  justify-center">
                <TouchableOpacity
                    className="absolute  left-2.5"
                    onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon color="#616161" size={20} />
                </TouchableOpacity>

                <Text className="text-[#242424] text-[17px] font-[600]">
                    Notifications
                </Text>
            </View>

            <View className="flex items-center justify-center px-4">
                <View className='bg-[#FAFAFA] rounded-[12px] mt-5 py-3 px-3 w-full'>
                    <View className="w-full flex flex-row mb-3">
                        <View className="flex-1">
                            <Text className="text-xl font-semibold">Messages</Text>
                            <Text>
                                We will send you information regards our latest
                                deals, promotions, special offers, etc.
                            </Text>
                        </View>
                        <View className="w-10 flex items-center justify-center">
                            <Switch
                                // onValueChange={toggleSwitch}
                                value={true}
                            />
                        </View>
                    </View>

                    <View className="w-full flex flex-row mb-3">
                        <View className="flex-1">
                            <Text className="text-xl font-semibold">News</Text>
                            <Text>
                                We will send you information about new
                                products and campaigns.
                            </Text>
                        </View>
                        <View className="w-10 flex items-center justify-center">
                            <Switch
                                // onValueChange={toggleSwitch}
                                value={true}
                            />
                        </View>
                    </View>

                    <View className="w-full flex flex-row mb-3">
                        <View className="flex-1">
                            <Text className="text-xl font-semibold">Orders</Text>
                            <Text>
                               We will notify you of updates to your order.
                            </Text>
                        </View>
                        <View className="w-10 flex items-center justify-center">
                            <Switch
                                // onValueChange={toggleSwitch}
                                value={true}
                            />
                        </View>
                    </View>

                </View>
            </View>

        </SafeAreaView>
    )
}

export default NotificationSettingsScreen;