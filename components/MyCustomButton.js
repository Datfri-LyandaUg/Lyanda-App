import React from 'react';
import { Pressable, View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const MyCustomButton = ({ isLoading, handleModel, title, loadingText }) => {


  return (

    <Pressable
      onPress={handleModel}
      style={styles.button}>

      {isLoading ? (
        <View className="flex flex-row items-center space-x-1 justify-center">
          <View className="flex items-center justify-center">
            <Text className="mr-2"><ActivityIndicator size="small" color="white" /></Text>
          </View>

          <View className="flex items-center justify-center">
            <Text style={styles.buttonText}>{loadingText}</Text>
          </View>
        </View>
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}

    </Pressable>
  );
};


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2c7721',
    height: '27%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    width: '87%',
    marginTop: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default MyCustomButton;
