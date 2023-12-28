import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home';
import EducationalContent from './screens/EducationalContent';
import HireTalent from './screens/HireTalent';
import Blogs from './screens/Blogs';

export default function RootNavigation() {
  const Stack = createStackNavigator()
  const screenOptions = {
    headerShown: false,
  }
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EducationalContent" component={EducationalContent} />
        <Stack.Screen name="HireTalent" component={HireTalent} />
        <Stack.Screen name="Blogs" component={Blogs} />
      </Stack.Navigator>
      </NavigationContainer>
    )
  }
