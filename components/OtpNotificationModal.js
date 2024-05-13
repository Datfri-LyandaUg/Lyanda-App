import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import Modal from 'react-native-modal';
import { CheckIcon, XMarkIcon } from 'react-native-heroicons/solid';

const OtpNotificationModal = ({ visible, handleClose }) => {

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
      backdropColor="rgba(0,0,0,0.3)"
      backdropOpacity={1}
      style={{
        justifyContent: '',
        margin: 0,
        marginBottom: 30,
        marginTop : 15
      }}
      className="items-center">
      <View
        style={{
          backgroundColor: 'white',
          height: 55,
          width: 311,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.8,
          shadowRadius: 12,
          elevation: 28,
          alignSelf: 'center',
        }}
        className="rounded-[12px] items-center  pb-3">
        <View className="flex-row  space-x-2 items-center py-2 px-4">
          <TouchableOpacity>
            <CheckIcon color="#616161" size={20} />
          </TouchableOpacity>

          <View className="items-center">
            <Text className="text-[#242424] text-[15px] font-[400]">
              A new OTP code has been sent to
            </Text>
            <Text className="text-[#242424] text-[15px] font-[400]]">
              your number
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

export default OtpNotificationModal;
