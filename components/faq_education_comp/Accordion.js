import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Accordion = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  return (
      <View style={styles.main}>
      <View style={[styles.container, { borderRadius: isExpanded ? 0 : 23 }]}>
        <TouchableOpacity onPress={toggleAccordion} style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <AntDesign name={isExpanded ? 'caretup' : 'caretdown'} size={20} color={'#03045E'} style={{position:'absolute', right:15}} />
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
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    backgroundColor: '#90E0EF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 17,
    paddingRight: 25,

  },
  content: {
    padding: 25,
    backgroundColor: '#00B4D8',
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
