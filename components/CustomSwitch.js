import React, { useContext, useState } from 'react';
import { TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';

const CustomSwitch = ({ value, onValueChange }) => {

    const { theme } = useContext(ThemeContext);

    const [animatedValue] = useState(new Animated.Value(value ? 1 : 0));

    const toggleSwitch = () => {
        Animated.timing(animatedValue, {
            toValue: value ? 0 : 1,
            duration: 300,
            useNativeDriver: false
        }).start();
        onValueChange(!value);
    };

    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [2, 20]  // Adjust these values to match your design
    });


    return (
        <TouchableOpacity
            style={[
                styles.switchContainer,
                {
                    backgroundColor: value ? colors[theme].switchOn : colors[theme].switchOff
                }
            ]}
            activeOpacity={1}
            onPress={toggleSwitch}
        >
            <Animated.View
                style={[
                    styles.switchThumb,
                    {
                        transform: [{ translateX }]
                    }
                ]}
            />
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    switchContainer: {
        width: 51,
        height: 31,
        borderRadius: 16,
        padding: 1
    },
    switchThumb: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: 'white', 
    }
});

export default CustomSwitch;