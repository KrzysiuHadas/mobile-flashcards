import React from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import { createBottomTabNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import DeckList from './Components/DeckList'
import AddDeck from './Components/AddDeck'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { Constants } from 'expo'
import DeckFront from './Components/DeckFront'
import AddQuestions from './Components/AddQuestions'


const Tabs = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-browsers" size={25} color={tintColor} />,
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="plus-square" size={25} color={tintColor} />
    },
  },
}, {
    tabBarOptions: {
      activeTintColor: 'rgba(80, 135, 246, 1)',
      style: {
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  })



const AndroidTabs = createMaterialTopTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
    },
  },
}, {
    tabBarOptions: {
      style: {
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  })


const Stack = createStackNavigator({
  Home: {
    screen: Platform.OS === 'ios' ? Tabs : AndroidTabs,
    navigationOptions: {
      header: null
    }
  },
  DeckFront: {
    screen: DeckFront,
    navigationOptions: {
      title: 'Deck',
      headerTitleStyle: {
        fontSize: 23,
      },
    },
  },
  AddQuestions: {
    screen: AddQuestions,
    navigationOptions: {
      title: 'Edit deck',
      headerTitleStyle: {
        fontSize: 23,
      }
    }
  }
})

export default class App extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: Constants.statusBarHeight }}>
          <StatusBar
            translucent
          />
        </View>
        <View style={styles.container}>
          {<Stack />}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(233, 237, 239, 1)',
  },
})
