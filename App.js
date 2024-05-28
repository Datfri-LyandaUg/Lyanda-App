import React, { useContext } from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from './redux/store';
import AppNav from './Navigation/AppNav';
import NotificationBanner from './components/NotificationBanner';
import { StyleSheet, SafeAreaView } from 'react-native';
import { ThemeContext, ThemeProvider } from './utils/ThemeContext';

const queryClient = new QueryClient();

const App = () => {

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <ThemedApp />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

const ThemedApp = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <SafeAreaView className="h-full" style={[styles.container, theme === 'dark' ? styles.darkContainer : styles.lightContainer]}>
      <NotificationBanner />
      <AppNav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: 'white',
  },
  darkContainer: {
    backgroundColor: 'black',
  },
});

export default App;
