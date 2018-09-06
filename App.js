import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { PrimaryBtn, SecondaryBtn } from './buttons/BigButtons'
import { getDeck, saveDeckTitle } from './api/storage'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>    
        <PrimaryBtn 
          onPress={() => {
            saveDeckTitle("React")
        }}
        buttonText="Primary Btn" />

        <SecondaryBtn 
          onPress={() => {
            getDeck("React").then((deck) => console.log(deck))
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
