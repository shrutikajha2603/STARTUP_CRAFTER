import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet, Image } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';

export default function StartupCredentials () {
return (
    <View>
        <Text style={{fontSize:18, fontWeight: 'bold', padding:12, paddingTop:20}}>Startup Credentials</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* <StartupCredentialsCard text='Submit Idea' outerBoxColor='#C9D9FF' img={require('../assets/ideaSubmit2.png')} /> */}
        <StartupCredentialsCard text='Educational Content' outerBoxColor='#BFF4C8' img={require('../assets/educational.png')} />
        <StartupCredentialsCard text='Hire Talent' outerBoxColor='#FFC9D1' img={require('../assets/talent2.png')} />
        <StartupCredentialsCard text='Blogs' outerBoxColor='#F4E3A5' img={require('../assets/blog.png')} />
    </ScrollView>
    <SubmitIdeaUpload />
    </View>
)
}
const StartupCredentialsCard = ({text, outerBoxColor, img}) => {
return (
    <View style= {{
        width: 120,
        Height: 270,
        // borderWidth: 1,
        borderRadius: 18,
        borderColor: 'white',
        backgroundColor: outerBoxColor,
        // margin:10,
        marginHorizontal:12,
    }}>
    <View style= {{
        borderRadius: 12,
        margin:10,
        marginBottom:20,
        backgroundColor: 'white',
    }}>
        <Image source={img} 
            style={{
                width:'100%',
                height: 90,
                resizeMode: 'contain',
                padding:15,
            }} />
    </View>
        <Text style= {{
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom:10,
        fontSize: 14
    }}>{text}</Text>
</View>
)
}

const SubmitIdeaUpload = () => {
return(
    <View style={{
        marginHorizontal:'3%',
        marginVertical:20,
        width:'94%',
        height:220,
        backgroundColor: '#C9D9FF',
        borderStyle: 'dashed',
        borderWidth: 2,
        borderColor: '#697BA4',
        borderRadius: 18,    
        // flexDirection:'coloumn',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }}>

            <Image source={require('../assets/ideaSubmit.png')} 
                style={{
                    width:'100%',
                    height: '65%',
                    resizeMode: 'contain',
                    padding:15,
                }} />
            <Entypo name="upload-to-cloud" size={40} />
            <Text style= {{
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom:10,
        fontSize: 14
    }}>Submit Idea</Text>

    </View>
)
}