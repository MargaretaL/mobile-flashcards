/**
 * Created by lilit on 2018-08-05.
 */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, ScrollView, Animated} from 'react-native';
import {fetchDecks} from '../utils/_DATA';
import Deck from  './Deck';

import {
    setLocalNotification,
} from '../utils/helpers';

class Decks extends React.Component {
    state = {
        decks: [],
        animate: new Animated.Value(1)
    };

    async componentDidMount() {
        setLocalNotification();
        let decks = await fetchDecks();
        this.setState({
            decks
        });
    }



    render() {


        return (
            <View style={styles.container}>

                <Text style={[styles.fonts, {marginBottom: 10}, {color: 'lightblue'}]}>Welcome To Native
                    FlashCards!</Text>
                <Text style={[fontSize = 24, marginBottom = 5]}>Available Decks:</Text>
                <ScrollView>
                    {
                        this.state.decks.map((deck, i) => {
                                return (
                                    <TouchableOpacity key={i} onPress={() => this.props.navigation.navigate('Deck', {
                                        title: deck.title,
                                        deck: deck,
                                        nBrOfCards: deck.questions.length,
                                        decks: this.state.decks
                                    })}>
                                        <Text style={styles.fonts }>{deck.title}</Text>
                                        <Text h1 style={styles.text}>{deck.questions.length} Cards</Text>
                                    </TouchableOpacity>
                                )
                            }
                        )
                    }
                </ScrollView>
                <Button title='Add New Deck'
                        onPress={() => this.props.navigation.navigate('AddDeck', {decks: this.state.decks})}>Add New
                    Deck</Button>
            </View>


        );
    }
}

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
    fonts: {
        fontSize: 34,
        textAlign: 'center',
    },
    text: {
        textAlign: 'center',
    },
    buttons: {
        marginBottom: 5,
        alignContent: 'space-between'
    }
});

export default Decks;
