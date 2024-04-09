import React, { Component, useState } from 'react'
import { Image, Text, View } from 'react-native'

export default function Notification () {
  return (
    <View style={{height:'90%', alignSelf:'center', justifyContent:'center', alignItems:'center',}}>
    <View style={{ justifyContent:'center'}}>
        <Image
        source={require('../assets/noNotif.png')}
        style={{width:300, height:300, alignSelf:'center', resizeMode:'contain'}} />
    </View>
    <View style={{ justifyContent:'center', flexDirection:'row'}}>
        <Text style={{alignSelf:'center', justifyContent:'center', marginTop: 10, fontSize:16, fontStyle:'italic' }}>"You Have no new Notification" </Text>
        {/* <Image source={require('../assets/slide.gif')} style={{ width: 70, height:50, position:'absolute', right:-60, bottom:1 }}/> */}
    </View>
</View>  );
};