import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { PrimaryBtn, SecondaryBtn } from '../buttons/BigButtons'
import { getDeck, clearLocalNotification, setLocalNotification } from '../api/storage'
import { NavigationEvents } from 'react-navigation'

export default class DeckFront extends React.Component {
  state = {
    numberOfCards: 0,
    isLoading: true,
  }

  getQuestionNumberAndSetAsState() {
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

  componentDidMount() {
    this.getQuestionNumberAndSetAsState()
  }

  startQuiz = () => {
    clearLocalNotification()
      .then(setLocalNotification)
    this.props.navigation.navigate('AddQuestions', { deckName: deckName }) 
  }

  render() {
    const { deckName, justAdded } = this.props.navigation.state.params
    const questions = this.state.numberOfCards

    if (this.state.isLoading) {
      return <View><Text>Loading...</Text></View>
    }

    return (
      <View style={styles.container}>
      <NavigationEvents
          onWillFocus={() => {
            this.getQuestionNumberAndSetAsState()
          }}
        />
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
                onPress={() => { this.props.navigation.navigate('Quiz', { deckName: deckName})}}
                buttonText="Start Quiz"
              />
              <View style={{ marginTop: 20 }} />
            </View>
          }
          <SecondaryBtn
            onPress={() => { }}
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
