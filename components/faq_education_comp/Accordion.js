import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Accordion = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  return (
      <View style={styles.main}>
      <View style={[styles.container,
        //  { borderRadius: isExpanded ? 0 : 23 }
        //  {     elevation: isExpanded ? 0 : 5, }
         ]}>
        <TouchableOpacity activeOpacity={0.9} onPress={toggleAccordion} style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Ionicons name={isExpanded ? 'caret-up-circle-outline' : 'caret-down-circle-outline'} size={28} color={'#4E8F57'} style={{position:'absolute', right:15}} />
        </TouchableOpacity>

        {isExpanded && (
          <View style={styles.content}>
            <Text>{content}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#ccc',
    overflow: 'hidden',
    borderRadius: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#B5EDBE',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 17,
    paddingRight: 25,

  },
  content: {
    padding: 25,
    backgroundColor: 'transparent',
    borderBottomRightRadius:30,
    borderBottomLeftRadius:30,

  },
  main:{
    paddingTop:12,
    paddingRight:20,
    paddingLeft:20,
   
  }
});

export default Accordion;
