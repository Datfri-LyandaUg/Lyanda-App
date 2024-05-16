import React from 'react';
import { Pressable, View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const TertiaryButton = ({ isLoading, handleModal, title, loadingText }) => {


    return (

        <Pressable
            onPress={handleModal}
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
        backgroundColor: '#F0F0F0',
        paddingBottom: 13,
        paddingTop: 13,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        width: '100%',
        marginTop: 15,
    },
    buttonText: {
        color: '#C9C9C9',
        fontSize: 17,
        fontWeight: '600',
    },
});

export default TertiaryButton;
