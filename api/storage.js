// import React from 'react'
import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = "Mobileflashcards:decks"

const initialData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
}

export const getDecks = async () => {
  try {
    let decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
    return JSON.parse(decks)
  } catch (error) {
    console.log("There was an error fetching deck: ", error)
  }
}

export const getDeck = async (id) => {
  try {
    let deck = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
    return JSON.parse(deck)[id]
  } catch (error) {
    console.log("There was an error fetching deck: ", error)
  }
}

export const saveDeckTitle = (title) => {
  const deck = {
    title,
    questions: [],
  }

  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: deck
  }))
}

export const addCardToDeck = (title, card) => {
  const { question, answer } = card
  getDeck(title)
    .then((deck) => {
      deck.questions.push({ question, answer })
      return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: deck
      }))
    })
    .catch((error) => console.log("there was an error: ", error))
}

const saveDeckAtTitle = async (title, deck) => {
  try {
    await AsyncStorage.setItem(title, JSON.stringify(deck))
  } catch (error) {
    console.log("There was an error saving data: ", error)
  }
}

export const fillStorageWithData = () => {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(initialData))
}

