import React from 'react'
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarIIC from './screens/CalendarIIC';
import Discussion from './screens/Discussion'
import Home from './screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HireTalent from './screens/HireTalent';


const Tab = createBottomTabNavigator();

export default function TabNavigator () {
const myScreenOptions = ({ route }) => ({
  headerShown: false,

  tabBarShowLabel: false,
  tabBarActiveTintColor: 'white',
  // tabBarActiveTintColor: '#252525',
  tabBarInactiveTintColor: '#252525',
  tabBarIcon: ({ focused, color, size }) => {
    
    let iconName;

    if (route.name === 'Home') {
      iconName =focused ? 'home' : 'home-outline'
    } else if (route.name === 'Calendar') {
      iconName = focused ? 'calendar' : 'calendar-outline'
    } else if (route.name === 'HireTalent') {
      // iconName = focused ? 'chatbubbles' : 'chatbubbles-outline'
      iconName = focused ? 'people' : 'people-outline'
    }
    return (
      <View
        style={{
          padding: focused ? 8 : 0,
          backgroundColor: focused ? '#263E65' : 'transparent',
          // backgroundColor: focused ? '#C9D9FF' : 'transparent',
          borderRadius: 30,
          elevation: focused ? 5 : 0,
          marginVertical:10,
          position: 'absolute',
          bottom:10

        }}
      >
        <Ionicons name={iconName} size={28} color={color} />
      </View>
    )
    },
  tabBarStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    // backgroundColor: '#252525',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    bottom:0,
    right:0,
    left:0,
    height: 70,
    flex: 1,
    elevation: 15,
  },
});
return (
  <Tab.Navigator initialRouteName='Home' screenOptions={myScreenOptions}>         
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Calendar" component={CalendarIIC} />
    <Tab.Screen name="HireTalent" component={HireTalent} />
</Tab.Navigator>
);
}