import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

const DeleteAccountModal = ({ visible, navigation, toggleModalVisibility }) => {
  return (
    <Modal
      isVisible={visible}
      animationIn="bounceInUp"
      animationOut="bounceOutDown"
      animationInTiming={900}
      animationOutTiming={500}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={500}
      backdropColor="rgba(0,0,0,0.3)"
      backdropOpacity={1}
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}
      className="items-center">
      <View
        style={{
          backgroundColor: 'white',
          height: '35%', // Adjusted for assumed screen height of 667px
          width: '92.8%',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.8,
          shadowRadius: 28,
          elevation: 28,
          alignSelf: 'center',
        }}
        className="rounded-t-[30px]  items-center pt-6">

        <Text className='text-[18px]  font-[600] text-[#242424]'>
          Warning!
        </Text>

        <Text className='mx-3 text-[13px] text-[#242424] font-[400] mt-5 mb-'>
          Deleting your account will permanently erase all your data and activity from the app. This action cannot be undone.
        </Text>

        <View className="flex w-full items-center justify-center px-4">
          <Pressable style={styles.button}
            onPress={() => navigation.navigate('DeleteAccountScreen')}
          >
            <Text style={styles.buttonText}>
              Delete account
            </Text>

          </Pressable>
          <Pressable className='mt-7' onPress={toggleModalVisibility}>
            <Text className='text-[#242424] text-[17px] font-[600]'>
              Cancel
            </Text>
          </Pressable>
        </View>

      </View>
    </Modal>
  )
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#C50F1F',
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
});
export default DeleteAccountModal;