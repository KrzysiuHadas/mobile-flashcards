import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { PrimaryBtn, SecondaryBtn } from '../buttons/BigButtons'

const DeckFront = (props) => {
  const { deckName, justAdded, questions } = props.navigation.state.params
  if(!justAdded) {
    console.log(questions);
  }
  return (
    <View style={styles.container}>
      <View style={{ maxHeight: 55, flex: 1, marginTop: 50}}>
        <Text style={styles.header}>
          {deckName}
        </Text>
      </View>

      <View style={{alignSelf: 'center'}}>
        <Text style={{color: 'rgba(97, 99, 102, 1)'}}>
          Cards in deck: {justAdded ? 0 : questions.length}
        </Text>
      </View>

      <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 30 }}>
      { 
        justAdded === false && questions.length != 0 && 
          <View>
            <PrimaryBtn
              onPress={()=> {}}
              buttonText="Start Quiz"
              />
            <View style={{marginTop: 20}} /> 
          </View>
      }
        <SecondaryBtn
          onPress={()=> {}}
          buttonText="Add Questions"
          />
      </View>
    </View>
  )
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

export default DeckFront