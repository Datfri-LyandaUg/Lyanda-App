import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import PrimaryButton from './PrimaryButton';
import { HandCoins, Route } from 'lucide-react-native';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';

const GetStartedModel = ({ visible }) => {

  const { theme } = useContext(ThemeContext);

  const navigation = useNavigation();
  const handleNextNavigation = () => {
    navigation.navigate('Login');
  };

  return (
    <Modal
      isVisible={visible}
      animationIn="bounceInUp"
      animationOut="bounceOutDown"
      animationInTiming={900}
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
          height: '40%', // Adjusted for assumed screen height of 667px
          width: '92.8%',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.8,
          shadowRadius: 28,
          elevation: 28,
          alignSelf: 'center',
        }}
        className="rounded-[28px]  items-center pt-14">
        <View className="flex-row  mx-3 space-x-4">

          <View className="flex items-center justify-center">
            <HandCoins size={40} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
          </View>

          <View>
            <Text
              style={{
                color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
              }}
              className="font-[400] text-[17px] ">
              Track your loans and payments
            </Text>
            <Text
              style={{
                color: theme === 'light' ? colors.light.text : colors.dark.text
              }}
              className="text-[13px]  font-[400] ">
              Efficiently pay for your bike’s loan and
            </Text>
            <Text
              style={{
                color: theme === 'light' ? colors.light.text : colors.dark.text
              }}
              className="font-[400] ">
              have a smoother workflow.
            </Text>
          </View>
          <View></View>
        </View>

        <View className="flex-row py-4 mx-3 space-x-4 items-center mt-3">

          <View className="flex items-center justify-center">
            <Route size={40} color={`${theme === 'light' ? colors.light.icon : colors.dark.icon}`} />
          </View>

          <View>
            <Text
              style={{
                color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
              }}
              className="font-[400] text-[17px] ">
              Get optimized routes
            </Text>
            <Text
              style={{
                color: theme === 'light' ? colors.light.text : colors.dark.text
              }}
              className="text-[13px]  font-[400] ">
              Get to the swapping stations 2X faster
            </Text>
            <Text
              style={{
                color: theme === 'light' ? colors.light.text : colors.dark.text
              }}
              className="font-[400] ">
              with our route optimization technology.
            </Text>
          </View>
        </View>

        <View className="w-full items-center px-4">
          <PrimaryButton handlePress={handleNextNavigation} text='Continue' />
        </View>

      </View>
    </Modal>
  );
};

export default GetStartedModel;
