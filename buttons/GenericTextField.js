import React from 'react'
import { TextInput, StyleSheet, Platform } from 'react-native'

const GenericTextField = ({ placeholder, value, onChangeText }) => {
    return (
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
          />
    )
}


const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 32,
    borderRadius: Platform.OS === 'ios' ? 3 : 0,
    padding: 8,
    marginTop: 20,
    borderColor: 'rgba(209, 209, 209, 1)',
    borderWidth: 1,
    backgroundColor: 'white',
  }
})

export default GenericTextField
