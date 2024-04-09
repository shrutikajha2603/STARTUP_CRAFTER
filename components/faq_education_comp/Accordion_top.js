import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Image, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { height } = Dimensions.get('window');

export default function AccordionTop() {
  // !! We are not using any custom fonts

  // const [fontsLoaded] = useFonts({
  //   PoppinsRegular: Poppins_400Regular,
  //   PoppinsBold: Poppins_700Bold,
  // });

  // if (!fontsLoaded) {
  //   return null; // Return null or a loading indicator while the fonts are loading
  // }

  return (
    <View style={[styles.container, { height: 0.45 * height }]}>
      <View style={styles.safeArea}>
        {/* <TouchableOpacity onPress={() => console.log('Go back')}>
          <FontAwesome name="arrow-left" size={30} color="white" />
        </TouchableOpacity> */}
      </View>
      <Image
        style={styles.image}
        source={require('../faq_education_comp/educational_content.png')} // Update the path to your image
      />
      <Text style={styles.text}>Education</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4E8F57',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  safeArea: {
    paddingLeft: 25,
    paddingTop: 8,
    marginTop: 29,
  },
  image: {
    height: 140,
    width: 220,
    marginRight: 24,
    justifyContent: 'center',
    marginTop: 22,
    alignSelf: 'flex-end',
  },
  text: {
    color: 'white',
    fontSize: 40.33,
    fontWeight: 'bold',
    // fontFamily: 'PoppinsBold', // Use the defined font family
    marginLeft: 38,
    marginTop: 13,
  },
});
