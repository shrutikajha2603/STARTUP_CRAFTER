import React from 'react';
import { Button, Linking } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const FeedbackScreen = ({ navigation }) => {
  const handleFeedback = () => {
    // Open default mail app with pre-filled email
    Linking.openURL('mailto:iic.tech21@gmail.com');
  };

  return (
    <Button title="Send Feedback" onPress={handleFeedback} />
  );
};

const LogoutScreen = () => {
  return (
    <Button title="Logout" onPress={() => {}} />
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Feedback">
      <Drawer.Screen name="Feedback" component={FeedbackScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
