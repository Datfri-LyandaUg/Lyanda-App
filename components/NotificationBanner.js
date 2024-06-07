import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { ChevronRightIcon } from 'react-native-heroicons/solid';
import { Wifi,WifiOff } from 'lucide-react-native';

const NotificationBanner = () => {

  const [isConnected, setIsConnected] = useState(null);
  const [showOnlineBanner, setShowOnlineBanner] = useState(false);
  const [prevConnection, setPrevConnection] = useState(null);  // Track the previous connection status

  useEffect(() => {
    // Check the initial network state when the component mounts
    NetInfo.fetch().then(state => {
      setIsConnected(state.isConnected);
      setPrevConnection(state.isConnected);  // Initialize the previous connection state
    });

    // Subscribe to network state changes
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
      if (state.isConnected && prevConnection === false) {  // Only trigger if going from offline to online
        triggerOnlineBanner();
      }
      setPrevConnection(state.isConnected);  // Update the previous connection state after handling
    });

    return () => unsubscribe();
  }, [prevConnection]);

  const triggerOnlineBanner = () => {
    setShowOnlineBanner(true);
    setTimeout(() => {
      setShowOnlineBanner(false);
    }, 3000);
  };

  if (showOnlineBanner) {
    return (
      <SafeAreaView style={styles.bannerOnline}>
        <View style={[styles.row, styles.justifyBetween, styles.padding]}>
          <View style={[styles.row, styles.spaceX5]}>
            <Wifi color="white" />
            <Text style={styles.text}>Back Online</Text>
          </View>
          
        </View>
      </SafeAreaView>
    );
  } else if (isConnected === false) {

    return (
      <SafeAreaView style={styles.bannerOffline}>
        <View style={[styles.row, styles.justifyBetween, styles.padding]}>
          <View style={[styles.row, styles.spaceX5]}>
            <WifiOff color="white" />
            <View style={styles.row}>
              <Text style={styles.text}> No internet. Connect to wi-fi or cellular network.</Text>
          
            </View>
          </View>
          <ChevronRightIcon color="white" size={24} />
        </View>
      </SafeAreaView>
    );
  }

  return null;  // No banner is shown when the internet is connected and no transition has happened
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
