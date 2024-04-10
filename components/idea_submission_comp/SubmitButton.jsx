import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity, Alert } from 'react-native'
import { FIREBASE_AUTH, storage, FIREBASE_DB } from '../../FirebaseConfig'; // Import the initialized Firebase storage instance
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from 'firebase/firestore';

export default function SubmitButton ({ onDocumentPicked, documentFile, setFileUploaded, userName, currentUserEmail, teamName, categoryChecked, ideaDescription }) {

    const saveRecordToFirebase = async () => {
        try {
            const docRef = await addDoc(collection (FIREBASE_DB, `${userName} - ${currentUserEmail}`), {
                userName,
                currentUserEmail,
                teamName,
                categoryChecked,
                ideaDescription,
                fileDownloadURL
            })
            console.log('Doc saved correctly', docRef.id)
        } catch(e){
            console.log('Firebase DB error:', e)
        }
    } 

    const allFieldsCheck = () => {
        return Boolean(
          teamName &&
          categoryChecked &&
          ideaDescription &&
          documentFile
        );
      };
    const [progress, setProgress] = useState('')
    const [fileDownloadURL, setFileDownloadURL] = useState('')
    const uploadDocument = async () => {
      try {
        if (!allFieldsCheck()) {
          Alert.alert('Please fill all fields before submitting.');
          return;
        }    
        // Convert the file to a Blob object
        // const response = await fetch(documentFile.uri)
        // const blob = await response.blob()
        
        const storageRef = ref(storage, `IdeaDoc/${currentUserEmail}/${documentFile.assets[0].name}`);
        // const metadata = {
        //   contentType: ['application/pdf', 'application/pptx', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation' ] // Specify MIME type here
        // };
    
        const uploadTask = uploadBytesResumable(storageRef, documentFile.uri,
          //  metadata
          );    
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const newProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(newProgress);
          },
          (error) => {
            console.error('Error uploading document:', error);
            Alert.alert('An error occurred while uploading the document.');
          },
          async () => {
            // Handle successful uploads on complete
            console.log('Document uploaded successfully');
            Alert.alert('Document uploaded successfully.');
   
            setFileUploaded(true);
            saveRecordToFirebase()
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log('file present at: ', downloadURL);
            setFileDownloadURL(downloadURL)
            onDocumentPicked(documentFile.name);
          }
        );
      } catch (error) {
        console.error('Error uploading document:', error);
        Alert.alert('An error occurred while uploading the document.');
      }
    };
  
    return (<>
      <TouchableOpacity onPress={uploadDocument}>
        <View style={{ width: '90%', backgroundColor: '#263E65', height: 50, borderRadius: 28, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 30, elevation: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>Submit</Text>
        </View>
      </TouchableOpacity>
      </>
    );
  };
