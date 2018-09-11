import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'
import GenericTextField from '../buttons/GenericTextField'
import { PrimaryBtn } from '../buttons/BigButtons'
import { addCardToDeck } from '../api/storage'
export default class AddQuestions extends Component {

  state = {
      question: '',
      answer: '',
      isCardAdded: false,
      bounceValue: new Animated.Value(1),
  }

  addQuestionsToDeck = () => {
    const { bounceValue, question, answer } = this.state    
    const { deckName } = this.props.navigation.state.params
    if( question !== '' && answer !== '') {
      
      const card = {
        question,
        answer
      }

      addCardToDeck(deckName, card)

          Animated.sequence([
            Animated.timing(bounceValue, { duration: 200, toValue: 1.2 }),
            Animated.spring(bounceValue, { toValue: 1, friction: 4 })
          ]).start()


      this.setState(() => ({
        isCardAdded: true,
        question: '',
        answer: ''
      }))
      
    }
  }

  render() {
    const { bounceValue } = this.state
    const { deckName } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <View style={{ maxHeight: 30, flex: 1, marginTop: 50}}>
          <Text style={styles.header}>
            Fill the deck with cards {deckName}
          </Text>
        </View>
        <View style={{alignSelf: 'center', marginBottom: 30}}>
        
          { 
          this.state.isCardAdded === true &&
            <Animated.Text style={{color: 'rgba(97, 99, 102, 1)', position: "absolute", alignSelf: 'center', transform: [{scale: bounceValue}]}}>
              Card added!
            </Animated.Text>
          }
        
      </View>
        <View style={{flex: 1}} >
          <GenericTextField
            placeholder='Front'
            value={this.state.question}
            onChangeText={(text) => this.setState({question: text})}
            />
            <GenericTextField
            placeholder='Back'
            value={this.state.answer}
            onChangeText={(text) => this.setState({answer: text})}
            />
          <View style={{marginTop: 35}}/>
          <PrimaryBtn
            buttonText="Add"
            onPress={this.addQuestionsToDeck}
            />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
  }
})