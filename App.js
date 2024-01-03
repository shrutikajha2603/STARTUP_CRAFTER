import React from 'react';
import { View, StyleSheet } from 'react-native';
import RootNavigation from './RootNavigation';
import BottomAppBar from './components/BottomAppBar';
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <RootNavigation />
        </NavigationContainer>
      {/* <BottomAppBar /> */}
    </View>
  );
};

export default App;
