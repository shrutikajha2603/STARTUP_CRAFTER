import React, { Component, useState } from 'react'
import { RootTagContext, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Header from '../components/Header';
import { Image } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
// import { Facebook } from 'react-content-loader/native'

const categories = [
    'All', 'Developer', 'Designer', 'Video Editor', 'Social Media Manager', 'Content Writer', 'Photographer', 'Videographer',
]
const fakeUsersData = [
    {
      id: 1,
      fullName: 'John Doe',
      city: 'Mumbai',
      skills: ['Front-end Developer', 'React.js', 'JavaScript', 'Developer'],
      socialMedia: 'https://twitter.com/johndoe',
      photo: 'https://i.pravatar.cc/150?img=1',
    },
    {
      id: 2,
      fullName: 'Alice Smith',
      city: 'Delhi',
      skills: ['UX/UI Designer', 'Figma', 'Web Design'],
      socialMedia: 'https://instagram.com/alices',
      photo: 'https://i.pravatar.cc/150?img=2',
    },
    {
      id: 3,
      fullName: 'Bob Johnson',
      city: 'Bangalore',
      skills: ['Backend Developer', 'Node.js', 'MongoDB', 'Developer'],
      socialMedia: 'https://linkedin.com/bobj',
      photo: 'https://i.pravatar.cc/150?img=3',
    },
    {
      id: 4,
      fullName: 'Catherine Brown',
      city: 'Hyderabad',
      skills: ['Developer',' Data Scientist', 'Python', 'Machine Learning'],
      socialMedia: 'https://facebook.com/catherineb',
      photo: 'https://i.pravatar.cc/150?img=4',
    },
    {
      id: 5,
      fullName: 'David White',
      city: 'Chennai',
      skills: ['Social Media Manager','Digital Marketer', 'SEO', 'Content Strategy'],
      socialMedia: 'https://twitter.com/davidw',
      photo: 'https://i.pravatar.cc/150?img=5',
    },
    {
      id: 6,
      fullName: 'Emma Wilson',
      city: 'Kolkata',
      skills: ['Graphic Designer', 'Photographer', 'Adobe Illustrator', 'Typography'],
      socialMedia: 'https://instagram.com/emmaw',
      photo: 'https://i.pravatar.cc/150?img=6',
    },
    {
      id: 7,
      fullName: 'Frank Davis',
      city: 'Ahmedabad',
      skills: ['Mobile App Developer', 'React Native', 'iOS/Android'],
      socialMedia: 'https://linkedin.com/frankd',
      photo: 'https://i.pravatar.cc/150?img=7',
    },
    {
      id: 8,
      fullName: 'Grace Miller',
      city: 'Pune',
      skills: ['Content Writer', 'Blogging', 'Copywriting'],
      socialMedia: 'https://twitter.com/gracem',
      photo: 'https://i.pravatar.cc/150?img=8',
    },
    {
      id: 9,
      fullName: 'Harry Turner',
      city: 'Jaipur',
      skills: ['Video Editor', 'Premiere Pro', 'After Effects'],
      socialMedia: 'https://instagram.com/harryt',
      photo: 'https://i.pravatar.cc/150?img=9',
    },
    {
      id: 10,
      fullName: 'Isabella Harris',
      city: 'Lucknow',
      skills: ['Network Administrator', 'Cisco', 'Firewalls'],
      socialMedia: 'https://facebook.com/isabellah',
      photo: 'https://i.pravatar.cc/150?img=10',
    },
  ];

export default function HireTalent() {
// const MyCardLoader = () => <Facebook animate={true}/>

const [selectedCategory, setSelectedCategory] = useState('All')
  const handleCategoryCLick = (categoryValue) => {
    setSelectedCategory(categoryValue)
  }
filteredData = fakeUsersData.filter(user => user.skills.some(skill => skill === selectedCategory))
matchedData = selectedCategory === 'All' ? fakeUsersData : filteredData

return (
<> 
    <Header title={'Hire Talent'}/>
    <ScrollView vertical >
        <HireHeader
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryCLick}
        />
        {/* <MyCardLoader/> */}
        {matchedData.map((data, key)=>(
        <ProfileCard key={key}
        fullName={data.fullName}
        location={data.city}
        photo={data.photo}
        skills={data.skills}
        />
        ))}
    </ScrollView>
</>)
}

const HireHeader = ({selectedCategory, onCategoryClick }) => {
    return (

    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {categories.map((category, index) => (
            <TouchableOpacity
            // activeOpacity={1}
            key={index}
            onPress={() => onCategoryClick(category)}
             >
                <Text style={{
                    height:'100%',
                    borderWidth:0.5,
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                    borderRadius:20,
                    // margin:1,

                    marginHorizontal:6,
                    backgroundColor: category === selectedCategory ? '#FFC9D1':'transparent'
                  }}>
                    {category}
                </Text>
            </TouchableOpacity>
        ))}
    </ScrollView>
    )
}
const ProfileCard = ({fullName, location, photo, skills}) => {
    return(
    <View style={{
        width:'94%',
        margin:'3%',
        height:180,
        // borderWidth:0.5,
        borderRadius:15,
        backgroundColor:'white',
        padding:15,
        justifyContent:'space-around'
        // alignItems:'center'
    }}>
        {/* details */}
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image source={{ uri: photo }} 
            style={{ width: 40, height: 40,  resizeMode:'contain', borderRadius:30, borderWidth:0.5}} />
            <Text style={{fontWeight:'bold', padding:5, fontSize:15}}>{fullName}</Text>
        </View>
        <View style={{flexDirection:'row',
          flexWrap:'wrap',
          alignItems:'center',
          marginLeft:20,
    }}>
            {/*skills || should be loop */}
            {skills.map((skill,key)=> ( 
            <Text key={key} style={{paddingHorizontal:6, fontSize:12, borderWidth:0.5, borderRadius:20, margin:2}} >{skill}</Text>))}

        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        {/* Contacts */}
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Entypo name='location-pin' size={18} />
                <Text style={{fontSize:12}}>{location}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity><Feather name='external-link' size={18} style={{paddingHorizontal:4}} /></TouchableOpacity>
                <TouchableOpacity><Entypo name='instagram' size={18} style={{paddingHorizontal:4}} /></TouchableOpacity>
                <TouchableOpacity><Entypo name='linkedin' size={18} style={{paddingHorizontal:4}} /></TouchableOpacity>
                <TouchableOpacity><Entypo name='behance' size={18} style={{paddingHorizontal:4}} /></TouchableOpacity>
            </View>
        </View>
    </View>
    )
}