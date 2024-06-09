import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect } from 'react';
import Modal from 'react-native-modal';
import { XMarkIcon } from 'react-native-heroicons/solid';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';


const ErrorNotificationModal = ({ showError, handleClose, errorMessage }) => {

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        setTimeout(() => {
            if (showError) {
                handleClose();
            }
        }, 4000);
    });

    return (
        <Modal
            isVisible={showError}
            animationIn="bounceInDown"
            animationOut="bounceOutUp"
            animationInTiming={900}
            animationOutTiming={500}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={500}
            hasBackdrop={false}
            coverScreen={true}

            style={{
                justifyContent: 'flex-start',
                backgroundColor: 'rgba(0,0,0,0.2)',
                margin: 0,
                paddingTop: 15
            }}

            className="items-center">
            <View
                style={{
                    backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background,
                    height: 50,
                    width: "90%",
                    alignItems: "center",
                    justifyContent: "center",
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.8,
                    shadowRadius: 12,
                    elevation: 28,
                    alignSelf: 'center',
                }}
                className="rounded-[12px] items-center">
                <View className="flex-row  space-x-2 items-center justify-between  w-full  py-2 px-4">
                    <TouchableOpacity className="flex items-center justify-center bg-red-500 w-5 h-5 rounded-full">
                        <XMarkIcon color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} size={10} />
                    </TouchableOpacity>

                    <View className="items-center">
                        <Text
                            style={{
                                color: theme === 'light' ? colors.light.text : colors.dark.text
                            }}
                            className="text-center text-[15px] font-[400]">
                            {errorMessage}
                        </Text>

                    </View>

                    <TouchableOpacity onPress={handleClose}>
                        <XMarkIcon color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default ErrorNotificationModal;
