import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RadioButton,  } from 'react-native-paper';
import * as DocumentPicker from 'expo-document-picker';
import { ScrollView, TouchableOpacity, Alert } from 'react-native'
import ideaSubmissionStyle from './ideaSubmissionStyle';
// import * as ImagePicker from 'expo-image-picker'
// import { Permissions } from 'react-native';
import { storage } from '../../FirebaseConfig'; // Import the initialized Firebase storage instance
import { getStorage, ref, uploadBytesResumable  } from "firebase/storage";


export default function NewSubmission () {
  const [fileUploaded, setFileUploaded] = useState(false)
  const [documentData, setDocumentData] = useState(null)
  const [teamName, setTeamName] = useState(null)
  const [ideaDescription, setIdeaDescription] = useState(null)
  const [categoryChecked, setCategoryChecked] = useState(null)
  const handleCategoryPress = (category) => {
    setCategoryChecked(category);
    if (category !== 'Other') {
      setOtherCategory('');
    }
  };
  const [otherCategory, setOtherCategory] = useState('')
  const Printfields = () => {
    // console.log('teamName: ' + teamName)
    // console.log('ideaDescription: ' + ideaDescription)
    console.log('categoryChecked: ' + categoryChecked)
    // console.log('fileUploaded: ' + fileUploaded)
  }
  Printfields()
    const pickDocument = async () => {  
  
      try {
        const result = await DocumentPicker.getDocumentAsync({
          // type: ['application/vnd.ms-powerpoint','application/vnd.openxmlformats-officedocument.presentationml.presentation'],
          type: ['application/pdf', 'application/pptx', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation' ]
        })
        if (!result.canceled && result !== null){
          setDocumentData(result)
          console.log(result)
          console.log(result.assets[0].name)
        }
      } catch (error) {
        console.log('Error picking document:', error)
        Alert.alert('An error occurred while picking the document.')
      }
    };
    
    // const [value, setValue] = useState('');
  // 
    return(
      <View style={{marginVertical:20}} >
        <Text style={ideaSubmissionStyle.questionText}>What  is your team’s name?</Text>
        <TextInput 
        style={ideaSubmissionStyle.input}
        placeholder="Example: TechNerds"
        placeholderTextColor='#b2b4b8'
        onChangeText={(text) => setTeamName(text)}
        value={teamName}
        />
  
        <Text style={ideaSubmissionStyle.questionText}>Select Category</Text>  
        <RadioButton.Group  onValueChange={newValue => setCategoryChecked(newValue)} value={categoryChecked}  >
            <ScrollView horizontal showsHorizontalScrollIndicator={true} style={{ flexDirection: 'row'}}>
                {ideaCategories.map((item, key) => (
                    <View key={key} style={{flexDirection:'column', alignItems:'flex-start', marginVertical: 14,}}>                            
                        <TouchableOpacity  activeOpacity={0.8} 
                            onPress={() => setCategoryChecked(item.Name)}
                            style={{ alignSelf: 'center', alignItems: 'center' }}>
                            <View style= {[ideaSubmissionStyle.selectCategoryOption,categoryChecked === item.Name && { backgroundColor: '#C9D9FF', elevation:3, }]}>                    
                                <MaterialIcons style={ideaSubmissionStyle.selectCategoryIcon} name={item.Icon} color='#263E65' size={26} />                                                  
                                <Text style= {ideaSubmissionStyle.selectCategoryText}>{item.Name}</Text>
                            </View>
                            <RadioButton value={item.Name} color='#263E65'  />
                        </TouchableOpacity>                        
  
                        {(categoryChecked === 'Other' && item.Name === 'Other') && (
                            <View>
                                <TextInput 
                                    style={ideaSubmissionStyle.input}
                                    placeholder="Enter category"
                                    onChangeText={(text) => setCategoryChecked(text)}
                                    value={categoryChecked}                                    
                                    />
                            </View>                                
                            )}                        
                    </View>
                ))}
            </ScrollView>
        </RadioButton.Group>
  
        <Text style={ideaSubmissionStyle.questionText}>Idea Description</Text>
          <TextInput style={[ideaSubmissionStyle.input, {textAlignVertical: 'top', borderRadius: 18}]}
              multiline={true}
              numberOfLines={4}
              placeholder="Example: An innovative clean tech startup developing solar-powered, portable water purification systems to provide clean drinking water in remote areas."
              placeholderTextColor='#b2b4b8'
              onChangeText={(text) => setIdeaDescription(text)}
              value={ideaDescription}
              />
  
        <Text style={ideaSubmissionStyle.questionText}>Upload PPT/PDF</Text>
        <TouchableOpacity 
          onPress={()=>  pickDocument()}
          style= {[ideaSubmissionStyle.selectCategoryOption, ideaSubmissionStyle.uploadSection,
           {backgroundColor : documentData ? '#C9D9FF' : 'white'}
           ]} >
          <MaterialIcons style={{ borderStyle: 'dashed', borderColor:'#263E65', borderWidth:1, padding:5, paddingLeft:7, margin:8, borderRadius:20 }} name='upload-file' color='#263E65' size={30} />
          <Text style= {{color:'#263E65', fontSize:12,}}>{documentData ? documentData.assets[0].name : 'Upload the ppt or pdf here'}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <SubmitButton onDocumentPicked={setDocumentData} documentFile={documentData} setFileUploaded={setFileUploaded} />
        </TouchableOpacity>
      
      </View>
    )
  }
  const SubmitButton = ({ onDocumentPicked, documentFile, setFileUploaded }) => {
    const [progress, setProgress] = useState('')
    const uploadDocument = async () => {
      try {
        if (!documentFile ) {
          Alert.alert('Please select a document before submitting.');
          return;
        }  
        // Create a reference to the document in Firebase Storage
        const storageRef = ref(storage, 'IdeaDoc/' + new Date().getTime())
        
        // Perform the document upload to Firebase Storage
        const uploadTask = uploadBytesResumable(storageRef, documentFile.uri);
        //or  const uploadTask = uploadBytesResumable(storageRef, documentFile.assets[0].uri);
        console.log(documentFile.uri)
    
        // Listen for state changes, errors, and completion of the upload
        uploadTask.on('state_changed', (snapshot) => {
            const newProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${newProgress}% done`);
            setProgress(newProgress)
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
            setFileUploaded(true)
            // onDocumentPicked(documentFile.name);
          }
        );
      } catch (error) {
        console.error('Error uploading document:', error);
        Alert.alert('An error occurred while uploading the document.');
      }
    };
  
    return (
      <TouchableOpacity onPress={uploadDocument}>
        <View style={{ width: '90%', backgroundColor: '#263E65', height: 50, borderRadius: 28, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 30, elevation: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>Submit</Text>
        </View>
      </TouchableOpacity>
    );
  };