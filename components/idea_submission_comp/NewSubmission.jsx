import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import { User, onAuthStateChanged } from 'firebase/auth'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RadioButton,  } from 'react-native-paper';
import * as DocumentPicker from 'expo-document-picker';
import { ScrollView, TouchableOpacity, Alert } from 'react-native'
import ideaSubmissionStyle from './ideaSubmissionStyle';
// import * as ImagePicker from 'expo-image-picker'
import Toast from 'react-native-toast-message'
import { FIREBASE_AUTH, storage, FIREBASE_DB } from '../../FirebaseConfig'; // Import the initialized Firebase storage instance
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import SubmitButton from './SubmitButton';


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
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log(user.email);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

// const handleSubmit = () => {
//   if (teamName && ideaDescription && categoryChecked) {
//     // Push data to Firebase
//     FIREBASE_DB.ref('submissions').push({
//       teamName: teamName,
//       ideaDescription: ideaDescription,
//       categoryChecked: categoryChecked
//     }).then(() => {
//       // Clear input fields after successful submission
//       setTeamName('');
//       setIdeaDescription('');
//       setCategoryChecked('');
//       Alert.alert('Submission successful!');
//     }).catch((error) => {
//       console.error('Error submitting data to Firebase:', error);
//       Alert.alert('An error occurred while submitting the data.');
//     });
//   } else {
//     Alert.alert('Please fill in all fields.');
//   }
// };

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     aspect:[3,4],
  //     allowsEditing: true,
  //     quality: 1
  //   })
  //   if (!result.canceled && result !== null){
  //         setDocumentData(result)
  //         console.log(result)
  //         console.log(result.assets[0].name)
  //   }
  // }
    const pickDocument = async () => {  
  
      try {
        const result = await DocumentPicker.getDocumentAsync({
          // type: ['application/vnd.ms-powerpoint','application/vnd.openxmlformats-officedocument.presentationml.presentation'],
          // type: 'image/*', // Specify image MIME types
          type: ['application/pdf', 'application/pptx', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation' ]
   
        })
        if (!result.canceled && result !== null){
          setDocumentData(result)
          console.log(result)
          // console.log(result.assets[0].name)
        }
      } catch (error) {
        console.log('Error picking document:', error)
        Alert.alert('An error occurred while picking the document.')
      }

    };
    const allFieldsCheck = () => {
      if (teamName && categoryChecked && ideaDescription && documentData) {
        return true;
      } else {
        return false;
      }
    };
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
        <RadioButton.Group onValueChange={newValue => setCategoryChecked(newValue)} value={categoryChecked}>
          <ScrollView horizontal showsHorizontalScrollIndicator={true} style={{ flexDirection: 'row' }}>
            {ideaCategories.map((item, key) => (
              <View key={key} style={{ flexDirection: 'column', alignItems: 'flex-start', marginVertical: 14 }}>
                <TouchableOpacity activeOpacity={0.8} onPressIn={() => handleCategoryPress(item.Name)}
                style={{ alignSelf: 'center', alignItems: 'center' }}>
                  <View style={[ideaSubmissionStyle.selectCategoryOption, categoryChecked === item.Name && { backgroundColor: '#C9D9FF', elevation: 3 }]}>
                    <MaterialIcons style={ideaSubmissionStyle.selectCategoryIcon} name={item.Icon} color='#263E65' size={26} />
                    <Text style={ideaSubmissionStyle.selectCategoryText}>{item.Name}</Text>
                  </View>
                  <RadioButton value={item.Name} color='#263E65' />
                </TouchableOpacity>
                {(categoryChecked === 'Other' && item.Name === 'Other') && (
                  <View>
                    <TextInput
                      style={ideaSubmissionStyle.input}
                      placeholder="Enter category"
                      onChangeText={text => setOtherCategory(text)}
                      value={otherCategory}
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
        <View style={{justifyContent:'center', flexDirection:'row', }}>
        <MaterialIcons name='security'  size={14} />

          <Text style= {{ fontSize:10, fontStyle:'italic' }}> Your data is safe with us.</Text>
        </View>
        
        <TouchableOpacity>
          <SubmitButton onDocumentPicked={setDocumentData} documentFile={documentData} setFileUploaded={setFileUploaded} currentUserEmail={currentUser ? currentUser.email : 'Loading...'} userName={currentUser ? currentUser.displayName : 'Loading...'} teamName={teamName} categoryChecked={categoryChecked} ideaDescription={ideaDescription} />
        </TouchableOpacity>
      
      </View>
    )
  }


  //   const [progress, setProgress] = useState('')
  //   const uploadDocument = async () => {
  //     try {
  //       if (!documentFile) {
  //         Alert.alert('Please select a document before submitting.');
  //         return;
  //       }    
  //       // Convert the file to a Blob object
  //       // const response = await fetch(documentFile.uri)
  //       // const blob = await response.blob()
        
  //       const storageRef = ref(storage, `IdeaDoc/${currentUserEmail}/${documentFile.assets[0].name}`);
  //       // const metadata = {
  //       //   contentType: ['application/pdf', 'application/pptx', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation' ] // Specify MIME type here
  //       // };
    
  //       const uploadTask = uploadBytesResumable(storageRef, documentFile.uri,
  //         //  metadata
  //         );    
  //       uploadTask.on(
  //         'state_changed',
  //         (snapshot) => {
  //           const newProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //           setProgress(newProgress);
  //         },
  //         (error) => {
  //           console.error('Error uploading document:', error);
  //           Alert.alert('An error occurred while uploading the document.');
  //         },
  //         async () => {
  //           // Handle successful uploads on complete
  //           console.log('Document uploaded successfully');
  //           Alert.alert('Document uploaded successfully.');
   
  //           setFileUploaded(true);
    
  //           const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
  //           console.log('file present at: ', downloadURL);
  //           onDocumentPicked(documentFile.name);
  //         }
  //       );
  //     } catch (error) {
  //       console.error('Error uploading document:', error);
  //       Alert.alert('An error occurred while uploading the document.');
  //     }

  //     // {
  //     //   if (teamName && ideaDescription && categoryChecked) {
  //     //     // Push data to Firebase
  //     //     FIREBASE_DB.ref('submissions').push({
  //     //       teamName: teamName,
  //     //       ideaDescription: ideaDescription,
  //     //       categoryChecked: categoryChecked
  //     //     }).then(() => {
  //     //       // Clear input fields after successful submission
  //     //       setTeamName('');
  //     //       setIdeaDescription('');
  //     //       setCategoryChecked('');
  //     //       Alert.alert('Submission successful!');
  //     //     }).catch((error) => {
  //     //       console.error('Error submitting data to Firebase:', error);
  //     //       Alert.alert('An error occurred while submitting the data.');
  //     //     });
  //     //   } else {
  //     //     Alert.alert('Please fill in all fields.');
  //     //   }
  //     // };
  //   };
  
  //   const showToast = () => {
  //     Toast.show({
  //       type: 'info',
  //       text1: 'Message',
  //       text2: 'This is an info message'
  //     });
  //   }
  //   return (<>
  //     <TouchableOpacity onPress={uploadDocument}>
  //       <View style={{ width: '90%', backgroundColor: '#263E65', height: 50, borderRadius: 28, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 30, elevation: 5 }}>
  //         <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>Submit</Text>
  //       </View>
  //     </TouchableOpacity>
  //     {/* <TouchableOpacity onPress={showToast}>
  //       <View style={{ width: '90%', backgroundColor: 'white', height: 50, borderRadius: 28, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 30, elevation: 5 }}>
  //       <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>toast</Text>
  //     </View>
  //     </TouchableOpacity> */}
  //     </>
  //   );
  // };