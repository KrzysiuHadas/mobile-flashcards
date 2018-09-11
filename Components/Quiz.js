import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, ScrollView } from 'react-native'
import FlipCard from 'react-native-flip-card'
import { getDeck } from '../api/storage'
import { SecondaryBtn, RedBtn, PrimaryBtn } from '../buttons/BigButtons'

export default class Quiz extends Component {
  state = {
    deck: {},
    isLoading: true,
    counter: 0,
  }

  getTheDeck() {
    const { deckName } = this.props.navigation.state.params
    
    getDeck(deckName)
      .then((deck) => {
        this.setState({
          deck,
          isLoading: false
        })
      })
  }

  resetQuiz = () => {
    this.refs._scrollView.scrollTo({
      x: 0,
      y: 0,
      animated: true
    })
    this.setState({counter: 0})
  }
  componentDidMount() {
    this.getTheDeck()
  }

  increaseCounter = () => {
    this.setState((prevState) => ({counter: prevState.counter +1}))
  }

  render() {
    const { deck, isLoading, counter } = this.state
    const questions = deck.questions
    if (isLoading) {
      return <View><Text>Loading...</Text></View>
    }

    const { deckName } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <ScrollView ref='_scrollView'>
          <Text style={styles.header}> {deckName} </Text>
          <View style={styles.instructions}>
            <Text style={styles.instructionText}> Carefully read the question on the card.</Text>
            <Text style={styles.instructionText}> Touch the card to flip it and confirm if your answer was right.</Text>
          </View>

          {questions.map(({question, answer}) => {
            return (
              <FlipCard key={question} style={{borderWidth: 0, flex: 1}}>
            <View style={[styles.card, styles.face]}>
              <Text style={styles.cardContentText}>
                {question}
              </Text>
            </View>
            <View style={[styles.card, styles.back]}>
                <Text style={styles.cardContentText}>
                  {answer}
                </Text>
                <View style={styles.btnContainer}>
                  <SecondaryBtn 
                    buttonText='Correct'
                    onPress={this.increaseCounter}
                    style={{width: 200}}
                    />
                  <View style={{marginTop: 10}} />>
                  <RedBtn 
                    buttonText='Incorrect'
                    onPress={()=> {this.forceUpdate()}}
                    />
                </View>
              
            </View>
          </FlipCard>
            )
          })}
          <View style={[styles.btnContainer, {marginTop: 30}]}>
            <Text style={styles.resultLabel}>
              Your result is: {counter}
            </Text>
            <View style={{marginTop: 20}} />
            <PrimaryBtn
              buttonText='Reset'
              onPress={this.resetQuiz}
              />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  card: {
    flex: 1,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    height: 400,
    borderRadius: Platform.OS === 'ios' ? 10 : 0,
    borderWidth: 1,
    borderColor: 'rgba(97, 99, 102, 0.5)',
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
        width: 0,
        height: 3
      },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  header: {
    fontSize: 32,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  instructions: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
  },
  instructionText: {
    textAlign: 'center',
    color: 'rgba(97, 99, 102, 1)',
    fontSize: 11,
  },
  btnContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 15,
  },
  cardContentText: {
    fontSize: 32,
    textAlign: 'center',
    marginTop: 40,
  },
  resultLabel: {
    fontSize: 20,

  }
})