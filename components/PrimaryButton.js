import React from 'react';
import { Pressable, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PrimaryButton = ({ isLoading, handlePress, text, loadingText, Icon, IconName, isDisabled }) => {
    return (

        <Pressable
            onPress={handlePress}
            disabled={isDisabled}
            style={({ pressed }) => [
                styles.button,
                isDisabled ? styles.disabled : pressed ? styles.pressed : styles.rest
            ]}
        >

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
                <View className="flex flex-row items-center space-x-1 justify-center">
                    {
                        Icon && (<View className="flex items-center justify-center">
                            <Text className="mr-2"><MaterialIcons name={IconName} size={30} color={`${isDisabled ? "#BDBDBD" : "white"}`} /></Text>
                        </View>)
                    }

                    <View className="flex items-center justify-center">
                        <Text style={isDisabled ? styles.disabledText : styles.buttonText}>{text}</Text>
                    </View>
                </View>
            )}

        </Pressable>
    );
};


const styles = StyleSheet.create({
    button: {
        paddingBottom: 13,
        paddingTop: 13,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        width: '100%',
        marginTop: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: '600',
    },
    disabledText: {
        color: '#BDBDBD',
        fontSize: 17,
        fontWeight: '600',
    },
    rest: {
        backgroundColor: '#2C7721',
    },
    pressed: {
        backgroundColor: '#214A19',
    },
    disabled: {
        backgroundColor: '#F0F0F0',
    },
});

export default PrimaryButton;
