import React, { Component, useState } from 'react'
import { StyleSheet, Text, Touchable, View } from 'react-native'
import Header from '../components/Header'
import { ScrollView, TouchableOpacity, Alert } from 'react-native'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RadioButton,  } from 'react-native-paper';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker'
import { Permissions } from 'react-native';

ideaCategories = [
    {
      Name: 'Fintech',
      Icon: 'account-balance-wallet'
    },
    {
      Name: 'E Commerce',
      Icon: 'shopping-bag'
    },
    {
      Name: 'Healthcare',
      Icon: 'local-hospital'
    },
    {
      Name: 'Ed Tech',
      Icon: 'school'
    },
    {
      Name: 'Transportation',
      Icon: 'local-shipping'
    },
    {
      Name: 'Clean Tech',
      Icon: 'eco'
    },
    {
      Name: 'Travel Tech',
      Icon: 'flight-takeoff'
    },
    {
      Name: 'Property Tech',
      Icon: 'home-work'
    },
    {
      Name: 'Industrial Tech',
      Icon: 'engineering'
    },
    {
      Name: 'SaaS',
      Icon: 'cloud-circle'
    },
    {
      Name: 'Social Impact',
      Icon: 'favorite'
    },
    {
      Name: 'Other',
      Icon: 'texture'
    }
  ]

export default function IdeaSubmission () {
    const [selectedCategory, setSelectedCategory] = useState(true)
return (<>
{/* 263E65 */}
    <Header title={'Idea Submission '}/>
    <ScrollView vertical showsHorizontalScrollIndicator={false}
     contentContainerStyle={{
        alignItems:'center',
        flex:1
    }}> 
        <View style={{
        width:'70%',
        height:45,
        borderWidth:0.5,
        borderRadius:28,
        alignItems:'center',
        flexDirection: 'row',
            }}>
                <TouchableOpacity
                activeOpacity={1}
                onPress={() => {setSelectedCategory(true)}}
                style={[ideaSubmissionStyle.categoryTouch, {backgroundColor: selectedCategory==true ? '#C9D9FF' : 'transparent',} ]}>
                    <Text style={[ideaSubmissionStyle.categoryText,
                    // {color:selectedCategory==0 ? 'black' : 'white'},
                    {fontWeight: selectedCategory==true ? 'bold' : 'normal',}
                                ]}> New </Text>
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={1}
                onPress={() => {setSelectedCategory(false)}}
                style={[ideaSubmissionStyle.categoryTouch,
                 {backgroundColor: selectedCategory==true ? 'transparent' : '#C9D9FF',}
                 ]}>
                    <Text style={[ideaSubmissionStyle.categoryText,
                    //  {color:selectedCategory==0 ? 'white' : 'black'},
                    {fontWeight: selectedCategory==false ? 'bold' : 'normal',}
                    ]}>
                         Uploaded </Text>
                </TouchableOpacity>
        </View>
                <ScrollView vertical showsHorizontalScrollIndicator={false} style={{width: '90%', height:'100%',}}>
                    {selectedCategory == true ? ( <NewSubmission />  ) : (<Uploaded />)}
                </ScrollView>
    </ScrollView>
    </>
)
}
const NewSubmission = () => {
  
  const [documentName, setDocumentName] = useState('')
  const pickDocument = async () => {  

    try {
      const result = await DocumentPicker.getDocumentAsync({
        // type: ['application/vnd.ms-powerpoint','application/vnd.openxmlformats-officedocument.presentationml.presentation'],
        type: ['application/pdf', 'application/pptx', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation' ]
      })
      if (!result.canceled) {
        setDocumentName(result);
        console.log(result);
      }
      // if (result.type === 'success') {      
      //   console.log(result);
      // } else {
      //   Alert.alert('Document picking canceled.');
      // }
    } catch (error) {
      console.log('Error picking document:', error)
      Alert.alert('An error occurred while picking the document.')
    }

    // for Image

    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //   allowsEditing:true,
    //   aspect: [3, 4],
    //   quality: 1
    // })
    // if(!result.canceled){
    //   console.log("success")
    //   console.log(result)
    // }
  };

  
  const [value, setValue] = useState('first');

  return(
    <View style={{marginVertical:20}} >
      <Text style={ideaSubmissionStyle.questionText}>What  is your team’s name?</Text>
      <TextInput 
      style={ideaSubmissionStyle.input}
      placeholder="Example: TechNerds"
      placeholderTextColor='#b2b4b8'
      // onChangeText={(text) => setName(text)}
      // value={name}
      />

      <Text style={ideaSubmissionStyle.questionText}>Select Category</Text>

      <RadioButton.Group  onValueChange={newValue => setValue(newValue)} value={value}  >
          <ScrollView horizontal showsHorizontalScrollIndicator={true} style={{ flexDirection: 'row'}}>
              {ideaCategories.map((item, key) => (
                  <View key={key} style={{flexDirection:'column', alignItems:'flex-start', marginVertical: 14,}}>                            
                      <TouchableOpacity  activeOpacity={0.8} onPress={() => setValue(item.Name)}
                          style={{ alignSelf: 'center', alignItems: 'center' }}>
                          <View style= {[ideaSubmissionStyle.selectCategoryOption,
                              value === item.Name && { backgroundColor: '#C9D9FF', elevation:3, }
                              // { backgroundColor:value===item.Name ? '#C9D9FF' : 'white'}                                    
                          ]}>                    
                              <MaterialIcons style={ideaSubmissionStyle.selectCategoryIcon} name={item.Icon} color='#263E65' size={26} />                    
                                                
                              <Text style= {ideaSubmissionStyle.selectCategoryText}>{item.Name}</Text>
                          </View>
                          <RadioButton value={item.Name} color='#263E65'/>
                      </TouchableOpacity>                        

                      {(value === 'Other' && item.Name === 'Other') && (
                          <View>
                              <TextInput 
                                  style={ideaSubmissionStyle.input}
                                  placeholder="Enter category"                                    
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
            // onChangeText={(text) => this.setState({text})}
            // value={this.state.text}
            />

      <Text style={ideaSubmissionStyle.questionText}>Upload PPT/PDF</Text>
      <TouchableOpacity 
        onPress={()=>  pickDocument()}
        style= {[ideaSubmissionStyle.selectCategoryOption, ideaSubmissionStyle.uploadSection]} >
        <MaterialIcons style={{ borderStyle: 'dashed', borderColor:'#263E65', borderWidth:1, padding:5, paddingLeft:7, margin:8, borderRadius:20 }} name='upload-file' color='#263E65' size={30} />
        <Text style= {{color:'#263E65', fontSize:12,}}>{documentName.assets[0].name}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <SubmitButton/>
      </TouchableOpacity>
    
    </View>
  )
}
const SubmitButton = () => {
  return (
    <View style={{
      width:'90%',
      backgroundColor: '#C9D9FF',
      height:50,
      borderRadius:28,
      flexDirection: 'row',
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
      marginTop:30,
      elevation:3,
    }}>
  <Text style={{fontWeight:'bold', fontSize:18, color:'#263E65',}}>Submit </Text>
  <MaterialCommunityIcons name='rocket' color='#263E65' size={25} />
    </View>
  )
}
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
}

const ideaSubmissionStyle = StyleSheet.create({
    categoryText:{
        alignSelf:'center',
        justifyContent:'center',
    },
    questionText: {
        marginTop:10,
        // marginBottom:6,
        fontSize:18,
        fontWeight:'bold',
    },
    categoryTouch: {        
        width:'48%',
        height:'90%',
        borderRadius:25,
        margin:'1%',
        alignItems:'center',
        justifyContent:'center',  
    },
    input: {
        backgroundColor:'white',
        // elevation:3,
        borderRadius:30,
        padding: 15,
        marginHorizontal:2,
        marginVertical: 14,
    },
    selectCategoryOption:{
        width: 85,
        height: 85,
        borderRadius: 18,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white',
        marginHorizontal:6,
        // marginVertical:7,
        padding:4,
        } ,
    uploadSection: {
      width: '96%', 
      height: 120,  
      borderStyle: 'dashed',
      borderColor:'#263E65',
      borderWidth:1.3,
      marginVertical: 14,
      // backgroundColor:'#C9D9FF',
    },
    selectCategoryIcon: {
        margin:10,
        position:'absolute',
        top:1
    },
    selectCategoryText: {
        textAlign: 'center',
        // paddingBottom:10,
        position:'absolute',
        top:43,
        fontSize: 12
    },
})