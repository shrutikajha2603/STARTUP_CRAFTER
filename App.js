import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './screens/Home';
import Calinder from './screens/Calinder';
import RootNavigation from './RootNavigation';


// const  Tab = createBottomTabNavigator();
const screensOptions = {
  
}
export default function App() {
  return (<>
<RootNavigation />
</>
  );
}
