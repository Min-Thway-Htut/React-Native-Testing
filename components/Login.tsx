import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import { Route } from 'expo-router';

type RootStackParamList = {
    HomeTabs: undefined;
    LoginScreen: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'LoginScreen'>;

type Props = {
    navigation: LoginScreenNavigationProp;
    route: LoginScreenRouteProp;
}


const LoginScreen: React.FC<Props> = ({navigation}) => {
    return (
        <View>
            <Text>Login or Signup</Text>
            <Button title='Login' onPress={() => navigation.replace('HomeTabs')}/>
        </View>
    )
}

export default LoginScreen;