import React from 'react';
import { Text, View, Image, Platform, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { useNavigation } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// const Drawer = createDrawerNavigator();

// export function DrawerApp() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

export default function Header({ home, title }) {
  const navigation = useNavigation();
  const signOut = async () => {
    try {
      await FIREBASE_AUTH.signOut();
      console.log('User signed out successfully.');
      navigation.navigate('Login')
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <SafeAreaView>
      <View style={GlobalStyles.bar}>
        <View>
          {home ? (
            <Image
              source={require('../assets/scLogo.png')}
              style={{ width: 140, height: 45, resizeMode: 'contain' }}
            />
          ) : (
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{title}</Text>
          )}
        </View>
        <View style={GlobalStyles.notificationPanel}>
          <TouchableOpacity activeOpacity={0.7}
          onPress={() => { navigation.navigate('Notification'); }}>
            <View style={GlobalStyles.notificationIcon}>
              <Ionicons name="notifications" size={23} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={GlobalStyles.userIcon} onPress={() => { navigation.push('MyProfile'); }}>
            <Image
              source={require('../assets/userIcon.png')}
              style={{ width: 30, height: 30, borderRadius: 30, resizeMode: 'contain' }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const GlobalStyles = StyleSheet.create({
  statusBarArea: {},
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 13,
  },
  userIcon: {
    borderColor: '#252525',
    borderWidth: 2,
    borderRadius: 30,
    padding: 5,
  },
  notificationPanel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    padding: 10,
  },
});
