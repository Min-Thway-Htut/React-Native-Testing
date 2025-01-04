import { useNavigation } from 'expo-router';
import React from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native';

function HomeScreen(){

    const navigation = useNavigation();

    return(
        <View>
            <Text>This is the home screen!</Text>
        </View>
    )
}

export default HomeScreen;