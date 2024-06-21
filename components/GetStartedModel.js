import { View } from 'react-native';
import React, { useContext } from 'react';
import Modal from 'react-native-modal';
import PrimaryButton from './PrimaryButton';
import { HandCoins, Route } from 'lucide-react-native';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';
import CustomNotification from './CustomNotification';

const GetStartedModel = ({ visible, onPress }) => {

  const { theme } = useContext(ThemeContext);

  return (
    <Modal
      isVisible={visible}
      animationIn="bounceInUp"
      animationOut="bounceOutDown"
      animationInTiming={1000}
      animationOutTiming={500}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={500}
      hasBackdrop={false}
      coverScreen={true}
      style={{
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.2)',
        margin: 0,
        paddingBottom: 20,
      }}

      className="items-center">
      <View
        style={{
          backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background,
          width: '92.8%',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.8,
          shadowRadius: 28,
          elevation: 28,
          alignSelf: 'center',
        }}
        className="rounded-[28px] flex items-center pb-3 pt-6">

        <CustomNotification Icon={<HandCoins size={40} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} title={"Track your loans and payments"} body={"Efficiently pay for your bike’s loan and have a smoother workflow."} />
        <CustomNotification Icon={<Route size={40} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />} title={"Get optimized routes"} body={"Get to the swapping stations 2X faster with our route optimization technology."} />

        <View className="w-full items-center px-4">
          <PrimaryButton handlePress={onPress} text='Continue' />
        </View>

      </View>
    </Modal>
  );
};

export default GetStartedModel;
