import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { ChevronRightIcon, WifiIcon } from 'react-native-heroicons/solid';

const NotificationBanner = () => {
  
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (isConnected) {
    return (
      <SafeAreaView style={styles.bannerOnline}>
        <View className='flex-row  space-x-2  justify-between mx-4'>
          <View className='flex-row  space-x-5 '>
            <WifiIcon color='white' />
            <Text style={styles.text}> Back Online  </Text>

          </View>
          <ChevronRightIcon color='white' size={24} />
        </View>

      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.bannerOffline}>
      <View className='flex-row items-center space-x-2  justify-between mx-4'>
        <View className='items-center flex-row space-x-5'>
          <WifiIcon color='white' />
          <View><Text style={styles.text}>No internet Connection to wi-fi  or </Text>
            <Text className='text-white  font-bold'>cellular network.</Text>
          </View>

        </View>
        <ChevronRightIcon color='white' size={24} />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bannerOnline: {
    backgroundColor: '#107c10', // Background color when online
    padding: 10,


    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  bannerOffline: {
    backgroundColor: '#c50f1f', // Background color when offline
    padding: 10,

    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default NotificationBanner;
