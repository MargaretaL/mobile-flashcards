/**
 * Created by lilit on 2018-08-13.
 */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';


const Questions = (props) => {
    const { questions } = props.navigation.state.params;

    let i = 0;

    function next () {
        i = i + 1;

    }
    alert(i);

    return (
        <View>
            {/*     {questions.map((question, i)=> {
             return (<Text key={i}>{question.question}</Text>)
             })}*/}
            <Text>             {Object.values(questions[i].question)}
            </Text>
            <Button onPress={next} title='next'>Next</Button>
        </View>
    )
};

export default  Questions;