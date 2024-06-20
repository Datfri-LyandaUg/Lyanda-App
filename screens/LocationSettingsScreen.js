import React, { useContext, useState } from 'react';
import { SafeAreaView, Text, View, Switch } from 'react-native'
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';
import PrimaryNav from '../components/PrimaryNav';


const LocationSettingsScreen = ({ navigation }) => {

    const { theme } = useContext(ThemeContext);

    const [isLocationEnabled, setIsLocationEnabled] = useState(true);

    const toggleLocationSwitch = () => setIsLocationEnabled(previousState => !previousState);

    return (
        <SafeAreaView
            style={{
                backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background
            }}
            className='h-full'>
            
            <PrimaryNav title={"Location"} onPress={() => navigation.goBack()}/>

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
                                className="text-xl font-semibold">Location</Text>
                            <Text style={{
                                color: theme === 'light' ? colors.light.text : colors.dark.text
                            }}>
                                Enables us to know your current location so as
                                to enable  smooth deliveries.
                            </Text>
                        </View>
                        <View className="w-10 flex items-center justify-center">
                            <Switch
                                onValueChange={toggleLocationSwitch}
                                value={isLocationEnabled}
                            />
                        </View>
                    </View>

                </View>
            </View>

        </SafeAreaView>
    )
}

export default LocationSettingsScreen;