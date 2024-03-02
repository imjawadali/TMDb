/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
    const [text, setText] = useState('')
    const [textList, setTextList] = useState([])

    useEffect(() => {
        async function checkStorage() {
            let existingList = await AsyncStorage.getItem('list')
            if (existingList) {
                existingList = JSON.parse(existingList)
                setTextList(existingList || [])
            }
        }
        checkStorage();
    }, [])

    const handleSubmit = () => {
        if (text) {
            let temp = [text, ...textList]
            setTextList(temp)
            AsyncStorage.setItem('list', JSON.stringify(temp))
            setText('')
        }
    }

    const onDelete = (index) => {
        let temp = [...textList.slice(0, index), ...textList.slice(index + 1, textList.length)]
        setTextList(temp)
        AsyncStorage.setItem('list', JSON.stringify(temp))
    }

    return (
        <ScrollView style={styles.Container}>
            <TextInput placeholder='Enter text here' style={styles.TextBox} value={text} onChangeText={(text) => setText(text)} />
            <TouchableOpacity style={styles.Button} onPress={handleSubmit}>
                <Text style={styles.ButtonText}>Submit</Text>
            </TouchableOpacity>
            {textList.map((text, index) => {
                return (<TouchableOpacity key={index.toString()} style={styles.ListText} onPress={() => onDelete(index)}>
                    <Text>{text}</Text>
                </TouchableOpacity>)
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginTop: 45,
        padding: 10
    },
    TextBox: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        width: '100%',
        height: 40,
        padding: 5
    },
    Button: {
        marginTop: 10,
        backgroundColor: 'black',
        borderRadius: 10,
        width: '100%',
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonText: {
        color: 'white',
        fontSize: 16
    },
    ListText: {
        marginTop: 5
    }
})

export default App;
