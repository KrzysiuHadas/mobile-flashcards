import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import GenericTextField from '../buttons/GenericTextField'
import { PrimaryBtn, SecondaryBtn } from '../buttons/BigButtons'

export default class AddQuestions extends Component {
  state = {
      question: '',
      answer: ''
  }

  addQuestionsToDeck = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ maxHeight: 30, flex: 1, marginTop: 50}}>
          <Text style={styles.header}>
            Fill the deck with cards
          </Text>
        </View>
        <View style={{marginTop: 30}}/>
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