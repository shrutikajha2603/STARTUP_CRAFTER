import React, { Component, useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { User, onAuthStateChanged } from 'firebase/auth'
import { FIREBASE_AUTH } from './FirebaseConfig';

import Home from './screens/Home';
import EducationalContent from './screens/EducationalContent';
import HireTalent from './screens/HireTalent';
import Blogs from './screens/Blogs';
import IdeaSubmission from './screens/IdeaSubmission';
import EventCalendar from './screens/EventCalendar';
import Discussion from './screens/Discussion';
import DummyLogin2 from './screens/DummyLogin2';
import DummySignup from './screens/DummySignup';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const LoggedinStack = createStackNavigator()

function LoggedinLayout() {
  return (
    <LoggedinStack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
      <LoggedinStack.Screen name="Home" component={Home} />
      <LoggedinStack.Screen name="EventCalendar" component={EventCalendar} />
      <LoggedinStack.Screen name="Discussion" component={Discussion} />
      <LoggedinStack.Screen name="EducationalContent" component={EducationalContent} />
      <LoggedinStack.Screen name="HireTalent" component={HireTalent} />
      <LoggedinStack.Screen name="Blogs" component={Blogs} />
      <LoggedinStack.Screen name="IdeaSubmission" component={IdeaSubmission} />
    </LoggedinStack.Navigator>
  )
}

export default function RootNavigation() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setCurrentUser(user)
      console.log('heyUser', user)
    })

  }, [])

  return (
      <Stack.Navigator initialRouteName='DummySignup' screenOptions={screenOptions}>
        {
        currentUser ? (
          <Stack.Screen name="LoggedinLayout" component={LoggedinLayout} />
        ) : (
        <Stack.Screen name="DummyLogin2" component={DummyLogin2} />
        )
        }
      </Stack.Navigator>
  );
  
  }
//   <Stack.Navigator initialRouteName='DummySignup' screenOptions={screenOptions}>
//   <Stack.Screen name="DummyLogin2" component={DummyLogin2} />
//   <Stack.Screen name="DummySignup" component={DummySignup} />
//   <Stack.Screen name="Home" component={Home} />
//   <Stack.Screen name="EventCalendar" component={EventCalendar} />
//   <Stack.Screen name="Discussion" component={Discussion} />
//   <Stack.Screen name="EducationalContent" component={EducationalContent} />
//   <Stack.Screen name="HireTalent" component={HireTalent} />
//   <Stack.Screen name="Blogs" component={Blogs} />
//   <Stack.Screen name="IdeaSubmission" component={IdeaSubmission} />
// </Stack.Navigator>