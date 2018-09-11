import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { PrimaryBtn, SecondaryBtn } from '../buttons/BigButtons'
import { getDeck } from '../api/storage'


export default class DeckFront extends React.Component {
  state = {
    numberOfCards: 0,
    isLoading: true,
  }

  componentDidMount() {
    const { deckName } = this.props.navigation.state.params
    getDeck(deckName)
    .then((deck) => {
      const numberOfCards = deck.questions.length
      this.setState(() => ({ 
        numberOfCards,
        isLoading: false,
      }))
    })
  }

  render() {
    const { deckName, justAdded } = this.props.navigation.state.params
    const questions = this.state.numberOfCards

    if (this.state.isLoading) {
      return <View><Text>Loading...</Text></View>
    }
    console.log(questions)
    return (
      <View style={styles.container}>
        <View style={{ maxHeight: 55, flex: 1, marginTop: 50 }}>
          <Text style={styles.header}>
            {deckName}
          </Text>
        </View>

        <View style={{ alignSelf: 'center' }}>
          <Text style={{ color: 'rgba(97, 99, 102, 1)' }}>
            Cards in deck: {justAdded ? 0 : questions}
          </Text>
        </View>

        <View style={{ justifyContent: 'flex-end', flex: 1, marginBottom: 30 }}>
          {
            justAdded === false && questions != 0 &&
            <View>
              <PrimaryBtn
                onPress={() => { }}
                buttonText="Start Quiz"
              />
              <View style={{ marginTop: 20 }} />
            </View>
          }
          <SecondaryBtn
            onPress={() => { this.props.navigation.navigate('AddQuestions', { deckName: deckName }) }}
            buttonText="Add Questions"
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
    fontSize: 45,
  },
})
