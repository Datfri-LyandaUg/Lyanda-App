import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const SecondaryButton = ({title, handleOnPress}) => {
  return (
    <Pressable className="border border-[#2C7721] "
    onPress={handleOnPress}
    style={styles.button}>

    <Text style={styles.buttonText}>{title}</Text>
  </Pressable>
  )
}




const styles = StyleSheet.create({
    button: {
      backgroundColor: 'white',
     paddingBottom:13,
     paddingTop:13,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
      width: '100%',
      marginTop: 15,
     border:'#2C7721'
    },
    buttonText: {
      color: '#2c7721',
      fontSize: 17,
      fontWeight: '600',
    },
  });
  
export default SecondaryButton