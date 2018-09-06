import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { PrimaryBtn, SecondaryBtn } from './buttons/BigButtons'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>    
        <PrimaryBtn 
          onPress={() => {
            alert("Primary")
        }}
        buttonText="Primary Btn" />

        <SecondaryBtn 
          onPress={() => {
            alert("Secondary")
        }}
        buttonText="Secondary Btn" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
