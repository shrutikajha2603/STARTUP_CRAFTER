import React, { Component, useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
// import RootNavigation from './RootNavigation';
import BottomAppBar from './components/BottomAppBar';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { User, onAuthStateChanged } from 'firebase/auth'
import { FIREBASE_AUTH } from './FirebaseConfig';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Home from './screens/Home';
import EducationalContent from './screens/EducationalContent';
import HireTalent from './screens/HireTalent';
import Blogs from './screens/Blogs';
import IdeaSubmission from './screens/IdeaSubmission';
import EventCalendar from './screens/EventCalendar';
import Discussion from './screens/Discussion';
import Login from './screens/Login';
import Signup from './screens/Signup';

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

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarShowLabel: false,
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = 'home-variant-outline';
      } else if (route.name === 'Profile') {
        iconName = 'account-box-outline';
      } else if (route.name === 'Calendar') {
        iconName = 'calendar-blank-outline';
      }

      return (
        <View
          style={{
            padding: focused ? 9 : 0,
            backgroundColor: focused ? '#978CD0' : 'transparent',
            borderRadius: 30,
          }}
        >
          <MaterialCommunityIcons name={iconName} size={28} color={color} />
        </View>
      );
    },
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: 'black',
    tabBarStyle: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      backgroundColor: 'white',
      borderRadius: 16,
      position: 'absolute',
      bottom: 16,
      right: 16,
      left: 16,
      height: 75,
      elevation: 2,
    },
  });

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Calendar" component={EventCalendar} />
      <Tab.Screen name="Profile" component={Discussion} />
    </Tab.Navigator>
  );
};

const parentStack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};
const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setCurrentUser(user)
      console.log('heyUser', user)
    })

  }, [])
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        {/* <parentStack.Navigator initialRouteName={currentUser ? 'LoggedinLayout' : 'Login'} screenOptions={{ headerShown: false }}> */}
        <parentStack.Navigator initialRouteName='LoggedinLayout' screenOptions={{ headerShown: false }}>
          <parentStack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
          <parentStack.Screen name="Signup" component={Signup} />
          <parentStack.Screen name="LoggedinLayout" component={LoggedinLayout} />
          <parentStack.Screen name="Login" component={Login} />
        </parentStack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
