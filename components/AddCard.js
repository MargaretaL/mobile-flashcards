/**
 * Created by lilit on 2018-08-14.
 */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, TextInput} from 'react-native';
import {saveDecks} from '../utils/_DATA';


class AddCard extends React.Component {
    state = {
        question: '',
        answer: ''
    };

    createCard = () => {
        const {deck, decks} = this.props.navigation.state.params;

        const {question, answer} = this.state;

        deck.questions.push({question: question, answer: answer});

        saveDecks(decks);

        this.props.navigation.navigate('Decks');
    };


    render() {

        const {question, answer} = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.fonts2}>Add a new Card to this Deck</Text>

                <Text>Add a question</Text>
                <TextInput value={question} onChangeText={(question) => this.setState({question})}/>
                <Text>Add an answer to your question</Text>
                <TextInput value={answer} onChangeText={(answer) => this.setState({answer})}/>
                <TouchableOpacity>
                    <Text onPress={this.createCard}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 10,
        borderColor: 'orange',
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
    fonts2: {
        fontSize: 28,
        textAlign: 'center',
    },
    buttons: {
        width: 300,
        marginBottom: 5,
        alignContent: 'space-between',
        color: 'green'
    }
});

export default  AddCard;