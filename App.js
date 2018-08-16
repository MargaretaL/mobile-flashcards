import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Decks from './components/Decks';
import Questions from './components/Questions';
import {saveDecks} from './utils/_DATA';
import {AsyncStorage} from 'react-native';
import Deck from './components/Deck';
import Answer from './components/Answer';
import AddCard from './components/AddCard';
import AddDeck from './components/AddDeck';



import {fetchDecks} from './utils/_DATA';


import {StackNavigator, TabNavigator} from 'react-navigation';


export default class App extends React.Component {
    state = {
        decks: []
    };

    async componentDidMount() {
        let decks = await fetchDecks();
        this.setState({
            decks
        })
    }

    render() {
        return (
            <MainNavigator/>
        );
    }
}


const MainNavigator = StackNavigator({
    Decks: {
        screen: Decks,
    },
    Deck: {
        screen: Deck, path: 'Deck/:deck'
    },
    Questions: {
        screen: Questions
    },
    Answer: {
        screen: Answer
    },
    AddCard: {
        screen: AddCard
    },
    AddDeck: {
        screen: AddDeck
    }
});

const Tabs = TabNavigator({

    Deck: {
        screen: Deck,
        navigationOptions: {
            tabBarLabel: 'History',
            tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={tintColor}/>
        },
    },
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        style: {
            height: 56,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    colors: {
        color: 'red'
    },
    text: {
        textAlign: 'center',
    }
});



