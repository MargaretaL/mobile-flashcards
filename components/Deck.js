/**
 * Created by lilit on 2018-08-05.
 */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import Questions from './Questions';
import {Button} from 'react-native-elements';


class Deck extends React.Component {

    state = {
        animate: new Animated.Value(0)
    };

    componentDidMount() {
        const {animate} = this.state;
        Animated.timing(animate, {toValue: 1 , duration: 3000}).start();
    }

    render() {
        const {title, nBrOfCards, deck, decks} = this.props.navigation.state.params;
        const {animate} = this.state;

        return (
            <Animated.View style={[styles.container, {...this.props.style, opacity: animate}]}>
                <View>
                    <Text style={styles.fonts}>{title}</Text>
                    <Text style={styles.fonts2}>{nBrOfCards} Cards</Text>

                </View>
                <Button style={styles.buttons} title="Start Quiz"
                        onPress={() => this.props.navigation.navigate('Questions', {questions: deck.questions})}>Start
                    Quiz</Button>
                <Text style={styles.fonts2}>Or</Text>
                <Button title='Add Question'
                        onPress={() => this.props.navigation.navigate('AddCard', {deck: deck, decks: decks})}>Add
                    Question To Deck</Button>
            </Animated.View>

        );
    }
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

export default Deck;