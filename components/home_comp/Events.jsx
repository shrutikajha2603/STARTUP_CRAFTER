import React, { Component } from 'react'
import { Text, View, Image, Linking, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function Events () {
return (
    <View style={{paddingBottom:90, paddingHorizontal:12, paddingTop:20}}>
        <Text style={{fontSize:18, fontWeight:'bold', marginBottom:20,}}> Events </Text>
        <EventsCard eventName='B-Plan' backgroundColor='#B5EDBE' textColor='#4E8F57' description="Have an Idea that can do wonders. Take part in our Business Event and get a change to get your IDEA across Judges, win Prizes and even get a chance to be funded"
         link='https://unstop.com/competitions/b-plan-envisage24-techno-main-salt-lake-kolkata-west-bengal-946281' />
        <EventsCard eventName='HackUrWay' backgroundColor='#FFC9D1' textColor='#C25D81' description="A platform where students will have to design web/software solutions to the relevant problem statements like healthcare, public services, etc.. through their problem-solving skills."
         link='https://unstop.com/hackathons/hackurway-envisage-2022-techno-main-salt-lake-kolkata-west-bengal-317036' />
    </View>
)
}
const EventsCard = ({eventName, description, backgroundColor, textColor, link}) => {
    return(
        <View style={{
            // marginTop:20,
            marginBottom:5,
            width:'98%',
            alignSelf: 'center',
            height:150,
            backgroundColor: backgroundColor,
            borderRadius: 18,    
            justifyContent: 'space-around',
            padding:20
        }}>
    
            <Text style= {{
                fontWeight: 'bold',
                // paddingBottom:0,
                fontSize: 14
            }}>{eventName}</Text>
            <Text style={{
                padding:8,
                marginRight: 20,
                fontSize: 12,
                color: textColor,
            }}>{description} </Text>
                <TouchableOpacity>
                    <AntDesign style={{position:'absolute', right:0,bottom:-8}} name="rightcircleo" size={30} color={textColor}
                 onPress={() => {Linking.openURL(link)}} />
                    </TouchableOpacity>
    
        </View>
    )
}