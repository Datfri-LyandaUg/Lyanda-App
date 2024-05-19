import React from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from './redux/store';
import AppNav from './Navigation/AppNav';
import NotificationBanner from './components/NotificationBanner';
import { StyleSheet, SafeAreaView } from 'react-native';

import  ProfileScreen from './screens/ProfileScreen'
import SplashScreen from './screens/SplashScreen';
import ProfileUser from './screens/ProfileUser';
import BikeProfileScreen from './screens/BikeProfileScreen';


const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView style={styles.container}>
          <NotificationBanner />
          <AppNav />
        </SafeAreaView>
      </QueryClientProvider>
    </Provider>
   







    // <SplashScreen />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
