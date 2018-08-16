
/**
 * Created by lilit on 2018-08-14.
 */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, TextInput} from 'react-native';
import {saveDecks} from '../utils/_DATA';


class AddCard extends React.Component {
    state = {
        title: ''
    };

    createDeck = () => {
        const {decks} = this.props.navigation.state.params;
        const title = this.state.title;
        const newDeck = {title: title, questions: []};
        decks.push(newDeck);

        saveDecks(decks);

        this.props.navigation.navigate('Deck', {
            title: newDeck.title,
            deck: newDeck,
            nBrOfCards: 0,
            decks: decks
        })
    };

    render() {

        const {decks} = this.props.navigation.state.params;

        const {title} = this.state;

        return (
            <View style={styles.container}>
                <Text>What is the Title of your new Deck?</Text>
                <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 100}} value={title}
                           placeholder='Add Deck Title' onChangeText={(title) => this.setState({title})}/>
                <TouchableOpacity>
                    <Text onPress={this.createDeck}>Submit</Text>
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