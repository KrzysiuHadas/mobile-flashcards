import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, ScrollView } from 'react-native'
import FlipCard from 'react-native-flip-card'

export default class Quiz extends Component {
  render() {
    const { deckName } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.header}> {deckName} </Text>
          <View style={styles.instructions}>
            <Text style={styles.instructionText}> Carefully read the question on the card.</Text>
            <Text style={styles.instructionText}> Touch the card to flip it and confirm if your answer was right.</Text>
          </View>
          <FlipCard style={{borderWidth: 0}}>
            <View style={[styles.card, styles.face]}>
              <Text>
                Face
              </Text>
            </View>
            <View style={[styles.card, styles.back]}>
              <Text>
                Back
              </Text>
            </View>
          </FlipCard>
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
    borderColor: 'rgba(97, 99, 102, 1)',
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
  }
})