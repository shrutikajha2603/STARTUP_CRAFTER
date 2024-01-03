import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BottomAppBar from '../components/BottomAppBar';
import Header from '../components/Header';

export default function Discussion() {
return (<>
    <Header title={'Discussion'} />

    <View style={{    flex: 1,}}>
    <Text> textInComponent </Text>
    <Text> textInComponent </Text>
    <Text> textInComponent </Text>
    <Text> textInComponent </Text>
    <Text> textInComponent </Text>
    <BottomAppBar />
    </View>
</>)
}
