import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function BottomAppBar () {
    const navigation = useNavigation()
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
        flex: 1,
        elevation: 15,
        paddingLeft:15,

        }}>
        <Icons onPress={()=> {navigation.navigate('Home')}} iconName='home' title='Home'/>
        <Icons onPress={()=> {navigation.navigate('EventCalendar')}} iconName='calendar' title='Calendar'/>
        <Icons onPress={()=> {navigation.navigate('Discussion')}} iconName='chatbubbles' title='Discussion'/>

    </View>
)
}

const Icons = ({onPress, iconName, title}) => {
return (
    <TouchableOpacity onPress={onPress}>
        <View style={{ alignItems: 'center', paddingVertical:8 }}>
            <Ionicons name={iconName} color='#252525' size={28} /> 
            <Text style={{fontSize: 11}}> {title} </Text>
        </View>
    </TouchableOpacity>
)
}
