import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { TriangleAlert } from 'lucide-react-native';
import Modal from 'react-native-modal';
import { XMarkIcon } from 'react-native-heroicons/solid';

const ErrorNotificationModal = ({ showError , handleClose, errorMessage }) => {

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
          backgroundColor: '#FDF3F4',
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
              <TriangleAlert color="#960B18" size={20} />
            </View>

            <View className="items-center flex-1">
              <Text
                style={{
                  color: '#960B18'
                }}
                className="text-[15px] font-[400] text-center">
                {errorMessage}
              </Text>
            </View>

            <TouchableOpacity onPress={handleClose}>
              <XMarkIcon color='#960B18' size={20} />
            </TouchableOpacity>
          </View>
       
      </View>
    </Modal>
  );
};

export default ErrorNotificationModal;
