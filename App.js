import React from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from './redux/store';
import AppNav from './Navigation/AppNav';
import NotificationBanner from './components/NotificationBanner';
import { View, StyleSheet } from 'react-native';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <View style={styles.container}>
          <NotificationBanner />
          <AppNav />
        </View>
      </QueryClientProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
