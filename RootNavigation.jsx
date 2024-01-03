import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home';
import EducationalContent from './screens/EducationalContent';
import HireTalent from './screens/HireTalent';
import Blogs from './screens/Blogs';
import IdeaSubmission from './screens/IdeaSubmission';
import EventCalendar from './screens/EventCalendar';
import Discussion from './screens/Discussion';

export default function RootNavigation() {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  };
  
  return (
      <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EventCalendar" component={EventCalendar} />
        <Stack.Screen name="Discussion" component={Discussion} />
        <Stack.Screen name="EducationalContent" component={EducationalContent} />
        <Stack.Screen name="HireTalent" component={HireTalent} />
        <Stack.Screen name="Blogs" component={Blogs} />
        <Stack.Screen name="IdeaSubmission" component={IdeaSubmission} />
      </Stack.Navigator>
  );
  
  }
