import React, { Component } from 'react'
import { ScrollView, Text, View, StyleSheet, Image } from 'react-native'

export default function StartupCredentials () {
return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style= {styles.outerBox}>
            <Image source={require('../assets/submit.png')} 
                style={{
                    width:'100%',
                    height: 80,
                    resizeMode: 'contain',
                    padding:15,
                }} />
            <Text>Submit Idea</Text>
            <Text>Educational Content</Text>
            <Text>Hire Talent</Text>
        </View>
    </ScrollView>
)
}

const styles = StyleSheet.create({
    outerBox: {
        width: 100,
        Height: 170,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'white',
        backgroundColor: '#C9D9FF',

    },

}
)