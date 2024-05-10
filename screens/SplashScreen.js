import { Text, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Options');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <SafeAreaView className="bg-[#38C92B] h-full w-full flex-1 justify-center items-center">
      <Text className="text-white font-[700] text-[60px]">Lyanda</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
