/**
 * Created by lilit on 2018-08-05.
 */
import { AsyncStorage } from 'react-native';
import decks from './_DATA';
import {View, Text, StyleSheet} from 'react-native';


export function getDecks () {
    return AsyncStorage.getItem(decks)
        .then(decks)
}



export default _retrieveData;