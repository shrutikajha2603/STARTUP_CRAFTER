import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import LoginStyle from '../components/authentication/LoginStyle';
import { useNavigation } from '@react-navigation/native';

export default function Signup() {
const auth = FIREBASE_AUTH
const navigation = useNavigation();

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [showError, setShowError] = useState('')
const [loading, setLoading] = useState(false)
const [showPassword, setShowPassword] = useState(false)
const toggleShowPassword = () => {
    setShowPassword(!showPassword)
}

const signUp = async () => {
    setLoading(true)
    try {
        const response = await createUserWithEmailAndPassword(auth, email.trim(), password)
        Alert.alert('signUp Successful!')
        setTimeout(()=> {
            // Alert.dismiss() Need a fix!!
        }, 2000)
        navigation.navigate('TabNavigator')
    } catch (err) {
        setShowError('Signup Failed:' + err.code)
    } finally {
        setLoading(false)
    }
}
    return (
      <SafeAreaView style={LoginStyle.wholeView}>
            <KeyboardAvoidingView>
            <ScrollView>
                <View style={{ justifyContent:'center', }}>
                    <Image
                     source={require('../assets/loginimg2.png')}
                     style={{width:'85%', height:250, alignSelf:'center', resizeMode:'contain'}} />
                </View>
                <Text style={LoginStyle.headText}> Create Account </Text>

                <TextInput 
                style={LoginStyle.input}
                placeholder="Full Name"
                onChangeText={(text) => setName(text)}
                value={name}
                />
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
                 onPress={signUp}
                >
                    <Text style={LoginStyle.loginText}>Signup</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 activeOpacity={0.7}
                 style={LoginStyle.alternate}
                 onPress={() => { navigation.navigate('Login'); }}
                >
                    <Text style={{alignSelf:'center', marginVertical:10}}>Or Login</Text>
                </TouchableOpacity>
                </> )}
                </ScrollView>
            </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }



