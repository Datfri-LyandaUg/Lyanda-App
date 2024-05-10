import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { ChevronRightIcon, WifiIcon } from 'react-native-heroicons/solid';

const NotificationBanner = () => {
  const [isConnected, setIsConnected] = useState(null); // To track the current network state
  const [showOnlineBanner, setShowOnlineBanner] = useState(false); // To control the temporary display of the "Back Online" banner

  useEffect(() => {
    // Check the initial network state when the component mounts
    NetInfo.fetch().then(state => {
      setIsConnected(state.isConnected);
      if (state.isConnected) {
        triggerOnlineBanner();
      }
    });

    // Subscribe to network state changes
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
      if (state.isConnected) {
        triggerOnlineBanner();
      }
    });

    return () => unsubscribe();
  }, []);

  const triggerOnlineBanner = () => {
    setShowOnlineBanner(true); // Show the online banner
    setTimeout(() => {
      setShowOnlineBanner(false); // Hide the online banner after 3 seconds
    }, 3000);
  };

  // Logic to render the banners based on the network state and whether the online banner should be shown temporarily
  if (showOnlineBanner) {
    return (
      <SafeAreaView style={styles.bannerOnline}>
        <View style={[styles.row, styles.justifyBetween, styles.padding]}>
          <View style={[styles.row, styles.spaceX5]}>
            <WifiIcon color="white" />
            <Text style={styles.text}>Back Online</Text>
          </View>
          <ChevronRightIcon color="white" size={24} />
        </View>
      </SafeAreaView>
    );
  } else if (isConnected === false) {
    return (
      <SafeAreaView style={styles.bannerOffline}>
        <View style={[styles.row, styles.justifyBetween, styles.padding]}>
          <View style={[styles.row, styles.spaceX5]}>
            <WifiIcon color="white" />
            <View style={styles.row}>
              <Text style={styles.text}>No internet connection </Text>
              
            </View>
          </View>
          <ChevronRightIcon color="white" size={24} />
        </View>
      </SafeAreaView>
    );
  }

  return null;  // If the connection is online and the online banner is not being shown, render nothing
};

const styles = StyleSheet.create({
  bannerOnline: {
    backgroundColor: '#107c10',
    padding: 10,
  },
  bannerOffline: {
    backgroundColor: '#c50f1f',
    padding: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 15
  },
  textBold: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 15
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  spaceX5: {
    marginRight: 5,
  },
  padding: {
    padding: 10,
  },
});

export default NotificationBanner;
