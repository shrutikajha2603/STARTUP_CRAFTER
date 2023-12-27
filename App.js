import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeApp from './screens/HomeApp';
import Calinder from './screens/Calinder';

// const  Tab = createBottomTabNavigator();
const screensOptions = {
  
}
export default function App() {
  return (<>
    <NavigationContainer>
      {/* <Tab.Navigator screensOptions={screensOptions} >
        <Tab.Screen name='HomeApp'component={HomeApp} />
        <Tab.Screen name='Calinder'component={Calinder} />
      </Tab.Navigator> */}
    </NavigationContainer>
<HomeApp />
</>
  );
}
