import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import GetStartedModel from '../components/GetStartedModel';
import PrimaryButton from '../components/PrimaryButton';
import { ThemeContext } from '../utils/ThemeContext';
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/native';

const SignupLoginOptionScreen = () => {

  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const toggleModalVisibility = () => {
    setVisible(true);
  }

  const handleNextNavigation = () => {
    setVisible(false);
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? colors.light.background : colors.dark.background
      }}
      className="h-full w-full flex-1">

      { visible && <GetStartedModel visible={visible} onPress={handleNextNavigation}   /> } 

      <View className="mt-36 items-center flex-1">
        <ImageBackground
          source={require('./../assets/image30.png')}
          className="h-[337px] w-[327px]  relative  justify-end  items-center "
          resizeMode="cover">
          <View style={styles.shadow}>
            <Text
              style={{
                color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
              }}
              className="text-[34px] font-[700] bottom-96 items-center">
              Lyanda
            </Text>
          </View>
        </ImageBackground>

        <View className="items-center mt-7">
          <View className=''>
            <Text
              style={{
                color: theme === 'light' ? colors.light.headerText : colors.dark.headerText
              }}
              className="text-[#242424] font-[600] mb-4 text-[17px]">
              Battery swapping stations at your fingertips
            </Text>

          </View>
          
          <Text
            style={{
              color: theme === 'light' ? colors.light.text : colors.dark.text
            }}
            className="text-[15px] font-[400]">
            The super app for electric bike owners
          </Text>

        </View>
      </View>

      <View className='items-center px-4 mb-7'>
        <PrimaryButton handlePress={toggleModalVisibility} text={'Get started'} />
      </View>

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
