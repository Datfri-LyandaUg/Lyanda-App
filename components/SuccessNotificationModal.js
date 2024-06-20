import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect } from 'react';
import Modal from 'react-native-modal';
import { CheckIcon, XMarkIcon } from 'react-native-heroicons/solid';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';

const SuccessNotificationModal = ({ visible, handleClose, successMessage }) => {

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => {
      if (visible) {
        handleClose();
      }
    }, 4000);
  });

  return (
    <Modal
      isVisible={visible}
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
          height: 55,
          width: "90%",
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.8,
          shadowRadius: 12,
          elevation: 28,
          alignSelf: 'center',
        }}
        className="rounded-[12px] flex items-center justify-center px-3">
       
          <View className="flex flex-row space-x-1 items-center justify-between w-full">
            <View className="flex items-center justify-center">
              <CheckIcon color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} size={20} />
            </View>

            <View className="items-center flex-1">
              <Text
                style={{
                  color: theme === 'light' ? colors.light.text : colors.dark.text
                }}
                className="text-[15px] font-[400] text-center">
                {successMessage}
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

export default SuccessNotificationModal;
