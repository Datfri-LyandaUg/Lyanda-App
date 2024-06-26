import React, { useContext, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/slices/authSlice';
import { deleteAccount } from '../services/userService';
import { useMutation } from 'react-query';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';

const DeleteAccountModal = ({ visible, toggleModalVisibility, handleRemoveAccount }) => {

  const currentUser = useSelector(selectUser);
  const { theme } = useContext(ThemeContext);

  const styles = createStyles(theme);

  const deleteAccountMutation = useMutation(() =>
    deleteAccount(currentUser?._id)
  );

  const handleDeleteAccount = async () => {
    try {
      const { data } = await deleteAccountMutation.mutateAsync();
    
    } catch (ex) {
      if (ex.response) {
        console.log(ex.response.data);
      }
    }
  }

  useEffect(() => {
    if (deleteAccountMutation.isSuccess) {
      handleRemoveAccount();
    }
  }, [deleteAccountMutation.isSuccess]);

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
          backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background,
          height: '41%',
          width: '100%',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.8,
          shadowRadius: 28,
          elevation: 28,
          alignSelf: 'center',
        }}
        className="rounded-t-[30px] items-center pt-6">

        <Text
          style={{
            color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
          }}
          className='text-[18px]  font-[600]'>
          Warning!
        </Text>

        <Text
          style={{
            color: theme === 'light' ? colors.light.text : colors.dark.text
          }}
          className='mx-3 text-[13px] font-[400] mt-5'>
          Deleting your account will permanently erase all your data and activity from the app. This action cannot be undone.
        </Text>

        <View className="flex w-full items-center justify-center px-4">
          <Pressable style={styles.button}
            onPress={handleDeleteAccount}
          >

            {
              deleteAccountMutation?.isLoading ? (
                <View className="flex flex-row items-center space-x-1 justify-center">
                  <View className="flex items-center justify-center">
                    <Text className="mr-2"><ActivityIndicator size="small" color="white" /></Text>
                  </View>

                  <View className="flex items-center justify-center">
                    <Text style={styles.buttonText}>{'Deleting Account ..'}</Text>
                  </View>
                </View>
              ) : (<Text style={styles.buttonText}>
                Delete account
              </Text>)
            }

          </Pressable>

          <Pressable className='mt-7' onPress={toggleModalVisibility}>
            <Text
              style={{
                color: theme === 'light' ? colors.light.text : colors.dark.text
              }}
              className='text-[17px] font-[600]'>
              Cancel
            </Text>
          </Pressable>
        </View>

      </View>
    </Modal>
  )
}


const createStyles = (theme) => StyleSheet.create({
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
    color: theme === 'light' ? colors.light.primaryButtonText : colors.dark.primaryButtonText,
    fontSize: 17,
    fontWeight: '600',
  },
});
export default DeleteAccountModal;