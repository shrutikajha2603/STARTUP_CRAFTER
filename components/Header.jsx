import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image } from 'react-native'
import GlobalStyles from './GlobalStyles'

export default function Header () {
return (
<>
    <View style={GlobalStyles.statusBarArea}>
    </View>
    <View style={GlobalStyles.bar}>
        <View >
            <Image
            source={require('../assets/scLogo.png')}
            style={{ width: 90, height: 35,  resizeMode:'contain' }}
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

