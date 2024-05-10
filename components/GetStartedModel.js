import { View, Text, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import MyCustomButton from './MyCustomButton';

const GetStartedModel = ({ visible }) => {
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
      backdropColor="rgba(0,0,0,0.3)" // Semi-transparent black color for the overlay
      backdropOpacity={1} // Full opacity of the color specified
      style={{
        justifyContent: 'flex-end',
        margin: 0,
        marginBottom: 30,
      }}
      className="items-center">
      <View
        style={{
          backgroundColor: 'white',
          height: 280,
          width: 348,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.8,
          shadowRadius: 12,
          elevation: 28,
          alignSelf: 'center',
        }}
        className="rounded-[30px] items-center">
        <View className="flex-row py-4 mx-3 space-x-4 items-center mt-3">
          <Image source={require('./../assets/Icon(40x40).png')} />

          <View>
            <Text className="font-[400] text-[17px] text-[#242424]">
              Track your loans and payments
            </Text>
            <Text className="text-[13px]  font-[400] text-[#616161]">
              Efficiently pay for your bike’s loan and
            </Text>
            <Text className="font-[400] text-[#616161]">
              have a smoother workflow.
            </Text>
          </View>
          <View></View>
        </View>

        <View className="flex-row py-4 mx-3 space-x-4 items-center mt-3">
          <Image source={require('./../assets/Icon240x40).png')} />

          <View>
            <Text className="font-[400] text-[17px] text-[#242424]">
              Get optimized routes
            </Text>
            <Text className="text-[13px]  font-[400] text-[#616161]">
              Get to the swapping stations 2X faster
            </Text>
            <Text className="font-[400] text-[#616161]">
              with our route optimization technology.
            </Text>
          </View>
        </View>

        <MyCustomButton handleModel={handleNextNavigation} title='Contnue' />

      </View>
    </Modal>
  );
};

export default GetStartedModel;
