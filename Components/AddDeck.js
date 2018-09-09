import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, Platform } from 'react-native'
import { PrimaryBtn } from '../buttons/BigButtons'

export default class AddDeck extends Component {

  state = {
    deckName: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ maxHeight: 35, flex: 1, marginTop: 50}}>
          <Text style={styles.header}>
            Add a deck
          </Text>
        </View>
        <View >
          <TextInput
            placeholder='Name'
            value={this.state.deckName}
            style={styles.input}
            onValueChange={text => this.setState({ deckName: text })} />
          <View style={{marginTop: 35}}/>
          <PrimaryBtn
            buttonText="Add"
            onPress={() => {}}
            />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
  },
  input: {
    width: 300,
    height: 32,
    borderRadius: Platform.OS === 'ios' ? 3 : 0,
    padding: 8,
    marginTop: 50,
    borderColor: 'rgba(209, 209, 209, 1)',
    borderWidth: 1,
    backgroundColor: 'white',
  }
});
