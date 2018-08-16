/**
 * Created by lilit on 2018-08-14.
 */


import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, TextInput} from 'react-native';
import {saveQuestion} from '../utils/_DATA';


class AddCard extends React.Component {

    render() {

        return (
            <View style={styles.container}>
                <Text>Add a new Question to this Deck</Text>
                <TextInput/>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        borderWidth:10,
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
        width:300,
        marginBottom: 5,
        alignContent: 'space-between',
        color: 'green'
    }
});

export default  AddCard;