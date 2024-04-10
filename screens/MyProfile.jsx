import React, { useEffect, useState } from 'react';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function MyProfile() {
  const navigation = useNavigation();

  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const contactMail = () => {
    Linking.openURL('mailto:iic.tech21@gmail.com?subject=Feedback/Contact for Startup Crafter')
  }
  const signOut = async () => {
    try {
      await FIREBASE_AUTH.signOut();
      console.log('User signed out successfully.');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <SafeAreaView style={{ width: '100%' }}>
      <SubHeading text='Profile' />
      <Card heading='Profile' name={currentUser ? currentUser.displayName : 'Loading...'} email={currentUser ? currentUser.email : 'Loading...'} />

      <SubHeading text='Contact' />
      <Card2 text={'Contact'} icon={'support-agent'} action={contactMail}  />

      {/* <SubHeading text='Contact' /> */}
      <Card2 text={'Sign Out'} icon={'logout'} action={signOut} color={'red'} />

    </SafeAreaView>
  );
}

const Card2 = ({  text, icon, action, color }) => {
  return (
    <TouchableOpacity style={{
        width:'90%',
        alignSelf: 'center',

        padding:20,
        marginVertical:10,
        backgroundColor:'white',
        elevation:1,
        borderRadius:18,
    }}
    onPress={(action)}
    >

        <View style={{ flexDirection:'row', alignItems: 'center', paddingHorizontal:10 }}>
            <MaterialIcons name={icon} color={color}  size={22} />
            <Text style={{ color:color }}> {text} </Text>
            <MaterialIcons style={{ position:'absolute', right:0 }} name='keyboard-arrow-right' color={color}  size={20} />
        </View>


    </TouchableOpacity>
  );
};
const Card = ({ heading, name, email }) => {
  return (
    <View style={{
        width:'90%',
        alignSelf: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
        padding:20,
        marginVertical:10,
        backgroundColor:'white',
        elevation:1,
        borderRadius:18,
    }}>
        <View style={{ flexDirection:'row', alignItems: 'center', marginBottom:20, }}>
            <MaterialIcons name='account-circle'  size={50} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', }}> {name} </Text>
        </View>
        <View style={{ flexDirection:'row', alignItems: 'center', paddingHorizontal:10 }}>
            <MaterialIcons name='mark-email-read'  size={20} />
            <Text style={{  }}> {email} </Text>
        </View>

      {/* <Text>{heading}</Text> */}
      {/* <Text> {text2}</Text> */}
    </View>
  );
};

const SubHeading = ({ text }) => {
  return (
    <View style={{
      marginTop: 30,
    //   marginBottom: 10,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      padding: 4,
      paddingHorizontal: 8,
      borderRadius: 20,
      backgroundColor: '#C9D9FF'
    }}>
      <Text>{text}</Text>
    </View>
  );
};
