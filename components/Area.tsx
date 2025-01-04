import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { TextContext } from './TextProvider';

const Area = () => {

    const context = useContext(TextContext);

     if(!context){
            return <Text>Error: TextProvider is missing.</Text>
        }

    const {text} = context;


    return (
        <View style={{backgroundColor: '#121212'}}>
            <Text style={{color: '#fff', margin: 10,}}>The Content Will Be Displayed Here!</Text>
        <View style={{backgroundColor: 'yellow', padding: 12, margin: 5, borderWidth: 5,}}>
            <View>Hello, {text}</View>
        </View>
        </View>
    )
}

export default Area;
