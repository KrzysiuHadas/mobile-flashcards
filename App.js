import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { PrimaryBtn, SecondaryBtn } from './buttons/BigButtons'
import { getDeck, saveDeckTitle, addCardToDeck } from './api/storage'

export default class App extends React.Component {
  render() {
    const card = {
      question: 'How old is Donald Trump?',
      answer: "Nobody knows, he's a lizard",
    }

    return (
      <View style={styles.container}>
          <PrimaryBtn         
            onPress={() => {
              saveDeckTitle("React")
          }}
            buttonText="Primary Btn" />

          <SecondaryBtn         
            onPress={() => {
              getDeck("React").then((deck) => console.log(JSON.parse(deck)))
          }}
            buttonText="Secondary Btn"/>          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  }
});
