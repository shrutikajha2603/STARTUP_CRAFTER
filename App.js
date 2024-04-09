import React, { Component, useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
// import RootNavigation from './RootNavigation';
import BottomAppBar from './components/BottomAppBar';
import { NavigationContainer } from '@react-navigation/native'
import { User, onAuthStateChanged } from 'firebase/auth'
import { FIREBASE_AUTH } from './FirebaseConfig';
import Home from './screens/Home';
import EducationalContent from './screens/EducationalContent';
import HireTalent from './screens/HireTalent';
import Blogs from './screens/Blogs';
import IdeaSubmission from './screens/IdeaSubmission';
import Login from './screens/Login';
import Signup from './screens/Signup';
import TabNavigator from './TabNavigator';
import Notification from './screens/Notification';
import Discussion from './screens/Discussion';
// import DrawerNavigator from './DrawerNavigator'; 
// import messaging from '@react-native-firebase/messaging';
//   import {PermissionsAndroid} from 'react-native';
//   PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

//   async function initFirebase() {
//     await messaging().registerDeviceForRemoteMessages();
//     // You can handle other Firebase configurations here if needed
//   }
  
//   initFirebase();

//   async function requestUserPermission() {
//     const authStatus = await messaging().requestPermission();
//     const enabled =
//       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//       authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
//     if (enabled) {
//       console.log('Authorization status:', authStatus);
//     }
//   }
//   requestUserPermission();

//   messaging().onMessage(async remoteMessage => {
//     console.log('Received a new notification', remoteMessage);
//     // Handle the notification here, e.g., display a local notification
//   });

const parentStack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const App = () => {

  // async function requestUserPermission() {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
  //   if (enabled) {
  //     console.log('Authorization status:', authStatus);
  //   }
  // }
  // const getToken = async () => {
  //   const token = await messaging().getToken()
  //   console.log('Token= ',token)
  // }
  
  // useEffect(() => {
  //   requestUserPermission()
  //   getToken()
  // }, [])

  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setCurrentUser(user)
      console.log('heyUser',  user)
    })

  }, [])
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
      {/* <parentStack.Navigator initialRouteName={currentUser ? 'TabNavigator' : 'Login'} screenOptions={{ headerShown: false }}> */}
        <parentStack.Navigator initialRouteName='TabNavigator' screenOptions={{ headerShown: false }}>
          {/* <parentStack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
          <parentStack.Screen name="TabNavigator" component={TabNavigator} />
          <parentStack.Screen name="EducationalContent" component={EducationalContent} />
          <parentStack.Screen name="HireTalent" component={HireTalent} />
          <parentStack.Screen name="Discussion" component={Discussion} />
          <parentStack.Screen name="Blogs" component={Blogs} />
          <parentStack.Screen name="IdeaSubmission" component={IdeaSubmission} />
          <parentStack.Screen name="Notification" component={Notification} />
          <parentStack.Screen name="Signup" component={Signup} />
          <parentStack.Screen name="Login" component={Login} />
        </parentStack.Navigator>

      </NavigationContainer>
    </View>
  );
};

export default App;
