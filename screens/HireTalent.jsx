import React, { Component } from 'react'
import { RootTagContext, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Header from '../components/Header';
import StartupCredentials from '../components/StartupCredentials';
import { Image } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';


const categories = [
    'Developer', 'Designer', 'Social Media Manager', 'Content Writers', 'Photographer', 'Videographer',
]

export default function HireTalent() {
return (
<>
    <Header />
    <ScrollView vertical >
        <HireHeader />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
    </ScrollView>

</>
)
}

const HireHeader = () => {
    return (

    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {categories.map((category, index) => (
            <TouchableOpacity key={index} >
                <Text style={{
                    height:'100%',
                    borderWidth:1,
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                    borderRadius:20,
                    marginHorizontal:6,
                }}>
                    {category}
                </Text>
            </TouchableOpacity>
        ))}
    </ScrollView>
    )
}
const ProfileCard = () => {
    return(
    <View style={{
        width:'94%',
        margin:'3%',
        height:180,
        // borderWidth:1,
        borderRadius:15,
        backgroundColor:'white',
        padding:15,
        justifyContent:'space-around'
        // alignItems:'center'
    }}>
        {/* details */}
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image source={require('../assets/userIcon.png')} 
            style={{ width: 40, height: 40,  resizeMode:'contain', borderRadius:30, borderWidth:1}} />
            <Text style={{fontWeight:'bold', padding:5, fontSize:15}}>Ashhar Ali Ahmed</Text>
        </View>
        <View style={{flexDirection:'row',
          flexWrap:'wrap',
          alignItems:'center',
          marginLeft:20,
        //   backgroundColor:'pink'
    }}>
            {/*skills || shlould be loop */}
            <Text style={{paddingHorizontal:6, fontSize:12, borderWidth:1, borderRadius:20, margin:2}} >Graphic
            Designer</Text>
            <Text style={{paddingHorizontal:6, fontSize:12, borderWidth:1, borderRadius:20, margin:2}} >Graphic
            Designer</Text>
            <Text style={{paddingHorizontal:6, fontSize:12, borderWidth:1, borderRadius:20, margin:2}} > Developer</Text>
            <Text style={{paddingHorizontal:6, fontSize:12, borderWidth:1, borderRadius:20, margin:2}} >Web Developoer</Text>
            <Text style={{paddingHorizontal:6, fontSize:12, borderWidth:1, borderRadius:20, margin:2}} >App Developer</Text>

        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        {/* Contacts */}
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Entypo name='location-pin' size={18} />
                <Text style={{fontSize:12}}>Kolkata</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity><Feather name='external-link' size={18} style={{paddingHorizontal:4}} /></TouchableOpacity>
                <TouchableOpacity><Entypo name='instagram' size={18} style={{paddingHorizontal:4}} /></TouchableOpacity>
                <TouchableOpacity><Entypo name='linkedin' size={18} style={{paddingHorizontal:4}} /></TouchableOpacity>
                <TouchableOpacity><Entypo name='behance' size={18} style={{paddingHorizontal:4}} /></TouchableOpacity>
            </View>
        </View>
    </View>
    )
}