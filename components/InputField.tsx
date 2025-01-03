import React, {useContext} from 'react';
import {View, Text, TextInput} from 'react-native';
import { TextContext } from './TextProvider'; 


const InputField = () => {

    const context = useContext(TextContext);

    if(!context){
        return <Text>Error: TextProvider is missing.</Text>
    }

    const { setText } = context;

    return (
        <View style={{backgroundColor: '#fff', margin: 10, borderWidth: 1,}}>
            <TextInput
            style={{margin: 10,}}
            onChangeText={setText}
            placeholder='Enter your name' />
        </View>
    )
}

export default InputField;