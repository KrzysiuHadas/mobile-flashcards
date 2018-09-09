import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { getDecks, fillStorageWithData } from '../api/storage'

export default class DeckList extends React.Component {

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
    fillStorageWithData()
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
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity onPress={() => { }}>
                    <Text style={styles.listLabel}> 
                      {item.key}
                    </Text>
                  </TouchableOpacity>
                  <View style={{borderBottomColor: 'rgba(209, 209, 209, 1)', borderBottomWidth: 1}} />
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
  },
  listLabel: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 10,
  }
});
