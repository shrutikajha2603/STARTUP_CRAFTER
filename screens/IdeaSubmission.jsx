import React, { Component, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
// import ideaSubmissionStyle from '../components/idea_submission_comp/IdeaSubmissionStyle'
import IdeaUploaded from '../components/idea_submission_comp/IdeaUploaded'
import NewSubmission from '../components/idea_submission_comp/NewSubmission'
import { ScrollView, TouchableOpacity, Alert } from 'react-native'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RadioButton,  } from 'react-native-paper';
import * as DocumentPicker from 'expo-document-picker';
import { storage } from '../FirebaseConfig'; // Import the initialized Firebase storage instance
import ideaSubmissionStyle from '../components/idea_submission_comp/ideaSubmissionStyle'


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
        {/* <View style={{
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
                    {fontWeight: selectedCategory==false ? 'bold' : 'normal',}
                    ]}>
                         Uploaded </Text>
                </TouchableOpacity>
        </View> */}
                <ScrollView vertical showsHorizontalScrollIndicator={false} style={{width: '90%', height:'100%',}}>
                    {/* {selectedCategory == true ? ( <NewSubmission />  ) : (<IdeaUploaded />)} */}
                    <NewSubmission /> 
                </ScrollView>
    </ScrollView>
    </>
)
}
