// import React from 'react'
import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const DECKS_STORAGE_KEY = "Mobileflashcards:decks"
const NOTIFICATION_KEY = "Mobileflashcards:notification"


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

export const fillStorageWithData = () => {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(initialData))
}

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
  return {
    title: "Reminder",
    body: "Make sure you start at least one quiz today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}