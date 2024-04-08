import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function IdeaUploaded() {
    const [value, setValue] = React.useState('first');

    
  return (
    <>
      <ScrollView>
        <DownloadFile fileName="Unit Test Results 01.pdf" onPress={() => handleDownload('Unit Test Results 01.pdf')} />
        <DownloadFile fileName="Unit Test Results 02.pdf" onPress={() => handleDownload('Unit Test Results 02.pdf')} />
      </ScrollView>
    </>
  );
}

const DownloadFile = ({ fileName, onPress }) => {
  return (
    <View
      style={{
        padding: 10,
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 80,
        alignSelf: 'center',
        borderRadius: 20,
        // borderWidth: 0.5,
        backgroundColor: 'white',
        // borderColor: '#263E65',
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={{
            padding: 8,
            borderWidth: 1,
            backgroundColor: '#C9D9FF',
            borderRadius: 50,
          }}
        >
          <Ionicons name="document-text-outline" size={25} color="#263E65" />
        </View>
        <Text style={{ margin: 10 }}>{fileName}</Text>
      </View>
      <TouchableOpacity onPress={onPress} >
        <Ionicons name="cloud-download-outline" size={28} />
      </TouchableOpacity>
    </View>
  );
};
