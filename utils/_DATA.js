/**
 * Created by lilit on 2018-08-05.
 */

import {AsyncStorage} from 'react-native';

export const decks = [
    {
        title: 'React',
        questions: [
            {question: 'What is React?', answer: 'A library for managing user interfaces'},
            {question: 'Where do you make Ajax requests in React?', answer: 'The componentDidMount lifecycle event'},
            {question: 'Wwwwhat is React?', answer: 'A library for managing user interfaces'}
        ]
    },
    {
        title: 'JavaScript',
        questions: [

            {question: 'What is Javascript?', answer: 'A programming language.'},
            {question: 'What was Javascript originally named?', answer: 'Mocha'},
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }

        ]
    },
];


export function saveDecks(decks) {
    AsyncStorage.setItem('mobileFlashcards:decks', JSON.stringify(decks));
}

export async function fetchDecks() {
    try {
        const value = await AsyncStorage.getItem('mobileFlashcards:decks');
        if (value !== null) {
            // We have data!!
            return JSON.parse(value);
        }
        return decks;
    } catch (error) {
    }
}





