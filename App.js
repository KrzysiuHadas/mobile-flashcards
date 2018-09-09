import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { PrimaryBtn, SecondaryBtn } from './buttons/BigButtons'
import { getDeck, saveDeckTitle, addCardToDeck, fillStorageWithData, getDecks } from './api/storage'

export default class App extends React.Component {

  state = {
    isLoading: true,
    arrayOfDecks: []
  }

  componentDidMount() {
    getDecks()
      .then((decks) => {
        const arrayOfDecks = Object.keys(decks)
        this.setState({
          arrayOfDecks,
          isLoading: false
        })
      })
  }
  render() {

    if (this.state.isLoading) {
      return <View><Text>Loading...</Text></View>
    }
    return (

      <View style={styles.container}>

        <View style={{ maxHeight: 35, flex: 1, marginTop: 50}}>
          <Text style={styles.header}>Choose your deck</Text>
        </View>

        <View style={{ flex: 1, width: 300, marginTop: 50 }}>
          {<FlatList
            data={this.state.arrayOfDecks.map((deck) => { return { "key": deck } })}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity onPress={() => { }}>
                    <Text style={styles.listLabel}> 
                      {item.key}
                    </Text>
                  </TouchableOpacity>
                  <View style={{borderBottomColor: 'grgba(209, 209, 209, 1)ray', borderBottomWidth: 1}} />
                </View>
              )
            }}
          />}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(233, 237, 239, 1)',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    fontFamily: 'Helvetica',

  },
  listLabel: {
    fontSize: 20,
    marginBottom: 10,
  }
});
