import React, { Component, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import LoginStyle from '../components/authentication/LoginStyle';
import { useNavigation } from '@react-navigation/native';

export default function DummyLogin2() {
const auth = FIREBASE_AUTH
const navigation = useNavigation();

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [showError, setShowError] = useState('')
const [loading, setLoading] = useState(false)
const [showPassword, setShowPassword] = useState(false)
const toggleShowPassword = () => {
    setShowPassword(!showPassword)
}

const signIn = async () => {
    setLoading(true)
    try {
        const response = await signInWithEmailAndPassword(auth, email.trim(), password)
        console.log(response)
        alert('signIn Suggessful!')
    } catch (err) {
        console.log(err)
        setShowError('Login Failed:' + err.code)
    } finally {
        setLoading(false)
    }
}
    return (
      <SafeAreaView style={LoginStyle.wholeView}>
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            // keyboardVerticalOffset={60}
             >
                <ScrollView>
                <View style={{ justifyContent:'center'}}>
                    <Image
                     source={require('../assets/loginimg2.png')}
                     style={{width:'85%', height:250, alignSelf:'center', resizeMode:'contain'}} />
                </View>
                <Text style={LoginStyle.headText}> Welcome Back </Text>
                <TextInput 
                style={LoginStyle.input}
                placeholder="@ Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
                />
                <View>
                    <TextInput
                    style={LoginStyle.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity onPress={toggleShowPassword} style={LoginStyle.eye}>
                        <Icon name={showPassword ? "eye-off" : "eye" } size={22} color="black"  />
                    </TouchableOpacity>
                </View>
                <Text style={LoginStyle.error} > {showError} </Text>
                {loading ? (
                <ActivityIndicator size={40} /> 
                ) : ( <>
                <TouchableOpacity
                 activeOpacity={0.7}
                 style={LoginStyle.button}
                 onPress={signIn}
                >
                    <Text style={LoginStyle.loginText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 activeOpacity={0.7}
                 style={LoginStyle.alternate}
                 onPress={() => { navigation.navigate('DummySignup'); }}
                >
                    <Text style={{alignSelf:'center', marginVertical:10}}>Or Signup</Text>
                </TouchableOpacity>
                </> )}
        </ScrollView>
            </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
