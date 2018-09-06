import React from 'react'
import { AsyncStorage } from 'react-native'

export const getDecks = () => {

}

export const getDeck = async (id) => {
    try {
        let deck = await AsyncStorage.getItem(id)
        return deck
    } catch (error) {
        console.log("There was an error fetching deck: ", error)
    }
}

export const saveDeckTitle = async (title) => {
    const deck = {
        title,
        questions: []
    }

    try {
        await AsyncStorage.setItem(title, JSON.stringify(deck))
    } catch (error) {
        console.log("There was an error saving data: ", error)
    }
}

export const addCardToDeck = async (title, card) => {
    const { question, answer } = card
    getDeck(title)
        .then((deck) => {
            deck.questions.push({
                question,
                answer,
            })

            try {
                await AsyncStorage.setItem(title, JSON.stringify(deck))
            } catch (error) {
                console.log("There was an error saving data: ", error)
            }
        })
}
