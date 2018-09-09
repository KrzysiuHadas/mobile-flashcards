import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'

export const PrimaryBtn = (props) => {
  const { onPress, buttonText } = props

  return (
    <TouchableOpacity onPress={onPress} style={styles.primaryBtn} >
      <Text style={{color: 'white', fontWeight: 'bold'}}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  )
}

export const SecondaryBtn = (props) => {
  const { onPress, buttonText } = props

  return (
    <TouchableOpacity onPress={onPress} style={styles.secondaryBtn} >
      <Text style={{color: 'rgba(0, 122, 255, 1)'}}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  primaryBtn: {
    width: 300,
    height: 40,
    borderColor: 'rgba(0, 122, 255, 1)',
    backgroundColor: 'rgba(0, 122, 255, 1)',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Platform.OS === 'ios' ? 10 : 0,
  },
  secondaryBtn: {
    width: 150,
    height: 40,
    borderColor: 'rgba(0, 122, 255, 1)',
    backgroundColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Platform.OS === 'ios' ? 10 : 0,
  }
});
