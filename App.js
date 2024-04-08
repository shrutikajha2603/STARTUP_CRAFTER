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
// import DrawerNavigator from './DrawerNavigator'; 

const parentStack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const App = () => {
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
          <parentStack.Screen name="Blogs" component={Blogs} />
          <parentStack.Screen name="IdeaSubmission" component={IdeaSubmission} />
          <parentStack.Screen name="Signup" component={Signup} />
          <parentStack.Screen name="Login" component={Login} />
        </parentStack.Navigator>

      </NavigationContainer>
    </View>
  );
};

export default App;
