import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function BottomAppBar () {
return (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        position: 'absolute',
        bottom:0,
        right:0,
        left:0,
        // borderWidth:1,
        // margin:15,        
        elevation: 15,

        }}>
        <Icons iconName='home' title='Home'/>
        <Icons iconName='calendar' title='Calendar'/>
        <Icons iconName='chatbubbles' title='Discussion'/>

    </View>
)
}

const Icons = ({iconName, title}) => {
return (
    <TouchableOpacity>
        <View style={{ alignItems: 'center', paddingVertical:8 }}>
            <Ionicons name={iconName} color='#252525' size={28} /> 
            <Text style={{fontSize: 11}}> {title} </Text>
        </View>
    </TouchableOpacity>
)
}
