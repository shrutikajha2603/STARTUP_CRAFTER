import React, { Component } from 'react'
import { Text, View, Image, } from 'react-native'


export default function Blogs() {
return (
    <View style={{height:'90%', alignSelf:'center', justifyContent:'center', alignItems:'center',}}>
        <View style={{ justifyContent:'center'}}>
            <Image
            source={require('../assets/workingOnProgress.png')}
            style={{width:350, height:350, alignSelf:'center', resizeMode:'contain'}} />
        </View>
        <View style={{ justifyContent:'center', flexDirection:'row'}}>
            <Text style={{alignSelf:'center', justifyContent:'center', marginTop: 10, fontSize:16, fontStyle:'italic' }}>"The next update is worth waiting" </Text>
            <Image source={require('../assets/slide.gif')} style={{ width: 70, height:50, position:'absolute', right:-60, bottom:1 }}/>
        </View>
    </View>
)
}

