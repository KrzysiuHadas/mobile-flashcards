import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { PrimaryBtn } from '../buttons/BigButtons'
import { saveDeckTitle } from '../api/storage'
import GenericTextField from '../buttons/GenericTextField'

export default class AddDeck extends Component {

  state = {
    deckName: ''
  }

  addDeck = () => {
    if(this.state.deckName !== '' ) {
      saveDeckTitle(this.state.deckName)
        .then(() => {
          this.props.navigation.navigate('DeckFront', { deckName: this.state.deckName, justAdded: true, questions: [] })
          this.setState({ deckName: ''})
        })
    }
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
          <GenericTextField
            placeholder='Name'
            value={this.state.deckName}
            onChangeText={(text) => this.setState({deckName: text})}
            />
          <View style={{marginTop: 35}}/>
          <PrimaryBtn
            buttonText="Add"
            onPress={this.addDeck}
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
  }
})


