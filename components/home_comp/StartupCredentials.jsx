import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';


export default function StartupCredentials () {
  const navigation = useNavigation();
return (
<View>
        <Text style={{fontSize:18, fontWeight: 'bold', padding:12, paddingTop:20}}>Startup Credentials</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity activeOpacity={0.7}
        onPress={() => { navigation.navigate('EducationalContent'); }}>
            <StartupCredentialsCard text='Educational Content' outerBoxColor='#B5EDBE' img={require('../../assets/educational.png')} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7}
        onPress={() => { navigation.push('Discussion'); }}>
            <StartupCredentialsCard text='Discussion' outerBoxColor='#FFC9D1' img={require('../../assets/talent2.png')} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7}
        onPress={() => { navigation.navigate('Blogs'); }}>
            <StartupCredentialsCard text='Blogs' outerBoxColor='#EDD993' img={require('../../assets/blog.png')} />
        </TouchableOpacity>

    </ScrollView>
    <TouchableOpacity activeOpacity={0.7} onPress={() => { navigation.navigate('IdeaSubmission'); }}>
        <SubmitIdeaUpload />
    </TouchableOpacity>
</View>
)
}
const StartupCredentialsCard = ({text, outerBoxColor, img}) => {

return (

    <View style= {{
        width: 120,
        borderRadius: 18,
        borderColor: 'white',
        backgroundColor: outerBoxColor,
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
        alignSelf: 'center',
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
            <Image source={require('../../assets/ideaSubmit.png')} 
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