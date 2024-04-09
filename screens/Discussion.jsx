import React, { Component } from 'react'
import { Button, Linking, Text, TouchableOpacity, View, Image } from 'react-native'
import BottomAppBar from '../components/BottomAppBar';
import Header from '../components/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Discussion() {
return (<>
    <Header title={'Discussion'} />

    <View style={{height:'70%', alignSelf:'center', justifyContent:'center', alignItems:'center',}}>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
            <MaterialCommunityIcons style={{elevation:3}} name='discord' color='#5864F2' size={75} />
            <Text style={{fontWeight:'bold', fontSize:18, marginVertical:15}}> × </Text>
            <Image
            source={require('../assets/logoColoured.png')}
            style={{width:80, height:80, alignSelf:'center', resizeMode:'contain'}} />
        </View>
        <Text style={{fontWeight:'bold', fontSize:18, marginVertical:15}}>Startup Crafter IIC</Text>
        <Text style={{ padding:40, textAlign:'center' }}>Connect with fellow members and dive into engaging discussions, share insights, and collaborate on exciting ideas. Join our Discord Community to experience real-time communication and interact with like-minded individuals.</Text>
        <TouchableOpacity
        style={{ marginVertical:15, backgroundColor:'#C25D81', padding:10, paddingHorizontal:40, borderRadius: 28, }}
        onPress={() => {Linking.openURL('https://discord.gg/XujRF6xf')}}>
            <Text style={{color:'white'}}> Join Community  </Text>

        </TouchableOpacity>

    </View>
</>)
}
