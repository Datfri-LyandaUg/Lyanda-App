import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import Modal from 'react-native-modal';
import { CheckIcon, XMarkIcon } from 'react-native-heroicons/solid';


const SuccessNotificationModal = ({ open, handleClose, successMessage }) => {

    useEffect(() => {
        setTimeout(() => {
            if (open) {
                handleClose();
            }
        }, 4000);
    });

    return (
        <Modal
            isVisible={open}
            animationIn="bounceInDown"
            animationOut="bounceOutUp"
            animationInTiming={900}
            animationOutTiming={500}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={500}
            backdropColor="rgba(0,0,0,0.3)"
            backdropOpacity={1}
            style={{
                justifyContent: '',
                margin: 0,
                marginBottom: 30,
                marginTop: 15
            }}
            className="items-center">
            <View
                style={{
                    backgroundColor: 'white',
                    height: 50,
                    width: 311,
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
                    <TouchableOpacity className="flex items-center justify-center bg-green-400 w-5 h-5 rounded-full">
                        <CheckIcon color="white" size={10} />
                    </TouchableOpacity>

                    <View className="items-center">
                        <Text className="text-[#242424] text-center text-[15px] font-[400]">
                            {successMessage}
                        </Text>

                    </View>

                    <TouchableOpacity onPress={handleClose}>
                        <XMarkIcon color="#242424" size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default SuccessNotificationModal;
