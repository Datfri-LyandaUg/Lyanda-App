import React, { useRef } from 'react';
import { Animated, View, Button, StyleSheet } from 'react-native';

const QuinticEaseInOutScreen = () => {
  const animationValue = useRef(new Animated.Value(0)).current;

  const quinticEaseInOut = (t) => {
    return t < 0.5
      ? 16 * t * t * t * t * t
      : 1 - Math.pow(-2 * t + 2, 5) / 2;
  };

  const startAnimation = () => {
    animationValue.setValue(0);
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 2000,
      easing: quinticEaseInOut,
      useNativeDriver: true,
    }).start();
  };

  const translateY = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.box, { transform: [{ translateY }] }]}
      />
      <Button title="Start Animation" onPress={startAnimation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
  },
});

export default QuinticEaseInOutScreen;
