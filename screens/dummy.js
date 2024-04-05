import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput, Alert } from 'react-native';
import Header from '../components/Header';
import { RadioButton } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as DocumentPicker from 'expo-document-picker';
import { storage } from '../FirebaseConfig'; // Import the initialized Firebase storage instance

const ideaCategories = [
  {
    Name: 'Fintech',
    Icon: 'account-balance-wallet'
  },
  {
    Name: 'E Commerce',
    Icon: 'shopping-bag'
  },
  // Add more categories here
];

export default function IdeaSubmission() {
  const [selectedCategory, setSelectedCategory] = useState(true);

  return (
    <>
      <Header title={'Idea Submission '} />
      <ScrollView
        vertical
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          flex: 1
        }}
      >
        {/* Rest of your code */}
      </ScrollView>
    </>
  );
}

const NewSubmission = () => {
  const [documentName, setDocumentName] = useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'application/pptx', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation']
      });
      setDocumentName(result);
      if (!result.cancelled) {
        console.log('Document picked successfully');
      }
    } catch (error) {
      console.log('Error picking document:', error);
      Alert.alert('An error occurred while picking the document.');
    }
  };

  const [value, setValue] = useState('first');

  return (
    <View style={{ marginVertical: 20 }}>
      {/* Rest of your code */}
    </View>
  );
};

const SubmitButton = ({ documentName }) => {
  const uploadDocument = async () => {
    try {
      if (!documentName) {
        Alert.alert('Please select a document before submitting.');
        return;
      }

      // Create a reference to the document in Firebase Storage
      const storageRef = storage.ref().child(`documents/${documentName}`);

      // Perform the document upload to Firebase Storage
      // For demonstration, I'm using a placeholder content
      const uploadTask = storageRef.putString('This is a placeholder content for the document.', 'data_url');

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on('state_changed',
        (snapshot) => {
          // Handle progress event (optional)
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        (error) => {
          // Handle unsuccessful uploads
          console.error('Error uploading document:', error);
          Alert.alert('An error occurred while uploading the document.');
        },
        () => {
          // Handle successful uploads on complete
          console.log('Document uploaded successfully');
          Alert.alert('Document uploaded successfully.');
          // Reset document name or perform any other action as needed
          setDocumentName(null);
        }
      );
    } catch (error) {
      console.error('Error uploading document:', error);
      Alert.alert('An error occurred while uploading the document.');
    }
  };

  return (
    <TouchableOpacity onPress={uploadDocument}>
      <View style={{
        width: '90%',
        backgroundColor: '#C9D9FF',
        height: 50,
        borderRadius: 28,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 30,
        elevation: 3,
      }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#263E65' }}>Submit</Text>
      </View>
    </TouchableOpacity>
  );
};

const Uploaded = () => {
  const [value, setValue] = React.useState('first');

  return (
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View>
        <Text>1First</Text>
        <RadioButton value="first" />
      </View>
      <View>
        <Text>2. Second</Text>
        <RadioButton value="second" />
      </View>
    </RadioButton.Group>
  );
};

const ideaSubmissionStyle = StyleSheet.create({
  // Your styles
});
