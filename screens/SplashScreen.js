import { Text, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const isFirstLaunch = await AsyncStorage.getItem('isFirstLaunch');
        if (isFirstLaunch === null) {
          // This is the first launch..
          await AsyncStorage.setItem('isFirstLaunch', 'false');
          const timer = setTimeout(() => {
            navigation.navigate('Options');
          }, 3000);

          return () => clearTimeout(timer);
        } else {
          // Not the first launch
          navigation.navigate('Home');
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkFirstLaunch();

  }, [navigation]);
  
  return (
    <SafeAreaView className="bg-[#38C92B] h-full w-full flex-1 justify-center items-center">
      <Text className="text-white font-[700] text-[60px]">Lyanda</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
