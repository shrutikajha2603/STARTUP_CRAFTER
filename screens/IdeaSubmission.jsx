import React, { Component, useState } from 'react'
import { StyleSheet, Text, Touchable, View } from 'react-native'
import Header from '../components/Header'
import { ScrollView, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RadioButton,  } from 'react-native-paper';

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
  
// ideaCategories = [
//     {
//     Name: ['Fintech', 'E-commerce', 'Healthcare', 'Ed Tech', 'Transportation', 'Clean Tech', 'Travel Tech', 'Property Tech', 'Industrial Tech', 'SaaS', 'Social Impact', 'Other'],
//     Icon: [ 'account-balance-wallet', 'shopping-bag', 'local-hospital', 'book-education', 'local-shipping', 'energy-savings-leaf', 'flight-takeoff', 'home-work', 'factory', 'cloud-circle', 'favorite', 'texture']
// }
// ]
export default function IdeaSubmission () {
    const [selectedCategory, setSelectedCategory] = useState(true)
return (<>
{/* 263E65 */}
    <Header title={'Idea Submission '}/>
    <ScrollView vertical
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
                <ScrollView style={{width: '90%', height:'100%', marginTop:20}}>
                    {selectedCategory == true ? ( <NewSubmission />  ) : (<Uploaded />)}
                </ScrollView>
    </ScrollView>
    </>
)
}
const NewSubmission = () => {
    const [value, setValue] = useState('first');

    return(
        <View >
                <Text style={ideaSubmissionStyle.questionText}>What  is your team’s name?</Text>
                <TextInput 
                style={ideaSubmissionStyle.input}
                placeholder="Example: TechNerds"
                // onChangeText={(text) => setName(text)}
                // value={name}
                />

                <Text style={ideaSubmissionStyle.questionText}>Select Category</Text>
                <RadioButton.Group  onValueChange={newValue => setValue(newValue)} value={value}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={true} style={{ flexDirection: 'row',  }}>
                            {ideaCategories.map((item, key) => (
                            <View key={key}  style={{ alignSelf:'center', alignItems:'center', }}>
                                <View style= {ideaSubmissionStyle.selectCategoryOption}>                    
                                <MaterialIcons style={ideaSubmissionStyle.selectCategoryIcon} name={item.Icon} size={26} />                    
                                <Text style= {ideaSubmissionStyle.selectCategoryText}>{item.Name}</Text>
                                </View>
                                <RadioButton value={item.Name} />
                            </View>
                            ))
                            }
                            {/* <View style={{ alignSelf:'center', alignItems:'center', }}>
                                <View style= {ideaSubmissionStyle.selectCategoryOption}>                    
                                <MaterialIcons style={ideaSubmissionStyle.selectCategoryIcon} name='shopping-bag' size={26} />                    
                                <Text style= {ideaSubmissionStyle.selectCategoryText}>Healthcare</Text>
                                </View>
                                <RadioButton value="Healthcare" />
                            </View>
                            <View style={{ alignSelf:'center', alignItems:'center', }}>
                                <View style= {ideaSubmissionStyle.selectCategoryOption}>                    
                                <MaterialIcons style={ideaSubmissionStyle.selectCategoryIcon} name='local-hospital' size={26} />                    
                                <Text style= {ideaSubmissionStyle.selectCategoryText}>Industrial Tech</Text>
                                </View>
                                <RadioButton value="Industrial Tech" />
                            </View> */}

                    </ScrollView>
                </RadioButton.Group>
            <Text style={ideaSubmissionStyle.questionText}>Select Category</Text>

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
        // fontWeight:'bold',
        // color: '#fff',
    },
    questionText: {
        marginTop:10,
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
        marginVertical:7,
        // height:90%
    },
    selectCategoryOption:{
        width: 85,
        height: 85,
        borderRadius: 18,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white',
        marginHorizontal:6,
        marginVertical:7,
        padding:4,
        } ,
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