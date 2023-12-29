import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, Platform, StatusBar, StyleSheet } from 'react-native'


export default function Header () {
return (
<>
    <SafeAreaView style={GlobalStyles.statusBarArea}>
    </SafeAreaView>
    <View style={GlobalStyles.bar}>
        <View >
            <Image
            source={require('../assets/scLogo.png')}
            style={{ width: 190, height: 35,  resizeMode:'contain' }}
            /> 
        </View>
        <View style={GlobalStyles.userIcon}>
            <Image
            source={require('../assets/userIcon.png')}
            style={{ width: 35, height: 35, borderRadius:30,  resizeMode:'contain' }}
            /> 
        </View>
    </View>

</>
)
}

const GlobalStyles = StyleSheet.create({
    statusBarArea: {
        // backgroundColor: '#C9D9FF',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    bar: {
        // backgroundColor: '',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 13,        
    },
    userIcon: {
        borderColor:'#252525',
        borderWidth:2,
        borderRadius:30,
        padding:5,
    }
}
)
