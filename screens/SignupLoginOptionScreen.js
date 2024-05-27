import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import GetStartedModel from '../components/GetStartedModel';
import PrimaryButton from '../components/PrimaryButton';

const SignupLoginOptionScreen = () => {

  const [visible, setVisible] = useState(false);

  const toggleModalVisibility = () => {
    setVisible(true);
  }

  const title = 'Get started'

  return (
    <SafeAreaView className="bg-[#FFFFFF] h-full w-full flex-1">
      <View className="mt-36 items-center flex-1">
        <ImageBackground
          source={require('./../assets/image30.png')}
          className="h-[337px] w-[327px]  relative  justify-end  items-center "
          resizeMode="cover">
          <View style={styles.shadow}>
            <Text className="text-[#242424] text-[34px] font-[700] bottom-96 items-center">
              Lyanda
            </Text>
          </View>
        </ImageBackground>

        <View className="items-center mt-7   ">
          <View className=''>
            <Text className="text-[#242424] font-[600] mb-4 text-[17px]">
              Battery swapping stations at your fingertips
            </Text>

          </View>
          <Text className="text-[#616161]  text-[15px] font-[400]  ">
            The super app for electric bike owners
          </Text>

        </View>



      </View>

      <View className='items-center px-4 mb-7'>
        <PrimaryButton handlePress={toggleModalVisibility} text={title} />
      </View>

      <GetStartedModel visible={visible} />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
      backgroundColor: 'white',
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default SignupLoginOptionScreen;
