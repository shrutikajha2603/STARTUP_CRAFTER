import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BottomAppBar from '../components/BottomAppBar'
import Header from '../components/Header'
import {Calendar, LocaleConfig} from 'react-native-calendars';

export default function EventCalendar() {
return (<>
<Header title={'IIC Event Calendar'} />
    <View style={{ flex: 1}}>
        <Calendar style={{elevation:4, margin:20, padding:10, borderRadius:20,}}
        // markedDates={{
        //     '2024-01-01': {selected: true, marked: true, selectedColor: 'blue'},
        //     '2024-01-02': {marked: true},
        //     '2024-01-03': {selected: true, marked: true, selectedColor: 'blue'}
        // }}
        />
    <BottomAppBar />
    </View>

</>)
}
