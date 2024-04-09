import React, { Component, useState } from 'react'
import { RootTagContext, ScrollView, Text, TouchableOpacity, Linking, View } from 'react-native'
import Header from '../components/Header';
import { Image } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
// import { Facebook } from 'react-content-loader/native'

const categories = [
    'All', 'Developer', 'Designer', 'Video Editor', 'Social Media Manager', 'Content Writer', 'Photographer', 'Videographer',
]
const usersData = [
  {
    id: 1,
    fullName: 'Amit Saha',
    city: 'Kolkata',
    skills: ['Developer', 'Python', 'Video Editor', 'Data Scientist', 'Graphic Designer'],
    socialMedia: 'https://www.linkedin.com/in/amit-saha-24811121b/',
    photo: 'https://media.licdn.com/dms/image/C5603AQFb-8y0FuPN3A/profile-displayphoto-shrink_800_800/0/1662374536463?e=1718236800&v=beta&t=BxkebBjktUfWljlRQ7kMjLi5G33HuRcQOnhDIC8-n-I',
  },
  {
    id: 2,
    fullName: 'Ashhar Ali Ahmed',
    city: 'Kolkata',
    skills: ['Front-end Developer', 'React.js', 'React Native', 'JavaScript', 'Developer', 'Designer', 'Graphic Designer'],
    socialMedia: 'https://www.linkedin.com/in/ashhar-ali-ahmed-971aaa193/',
    photo: 'https://media.licdn.com/dms/image/D4D03AQGkriTcR8XGZA/profile-displayphoto-shrink_800_800/0/1671098622662?e=1718236800&v=beta&t=CvDkXOO__0SDhYSkjGMzD1wIB_ERSXcsq1E2iHFplvg',
  },
  {
    id: 3,
    fullName: 'Ayush Dev',
    city: 'Kolkata',
    skills: ['Content Writer', 'Social Media Manager',],
    socialMedia: 'https://facebook.com/isabellah',
    photo: 'https://media.licdn.com/dms/image/C4D03AQE_kY-xC1a14w/profile-displayphoto-shrink_400_400/0/1657002982708?e=1718236800&v=beta&t=uOcPCjamXUhj4g52xpBQAA2FQmwh5EsPG-9e0w9XBlk',
  },
  {
    id: 4,
    fullName: 'Harshankit Raj',
    city: 'Kolkata',
    skills: ['Backend Developer', 'Developer'],
    socialMedia: 'https://www.linkedin.com/in/harshankitraj/',
    photo: 'https://media.licdn.com/dms/image/D4D35AQGxZxY9wtblXg/profile-framedphoto-shrink_400_400/0/1692963509265?e=1713186000&v=beta&t=gngwoHL99wxc0t1wFMQtAl9Fl0kkvuBs1DV1ldgyfPM',
  },
  {
    id: 5,
    fullName: 'Kumar Aditya',
    city: 'Kolkata',
    skills: ['Backend Developer', 'Developer', 'MERN',],
    socialMedia: 'https://www.linkedin.com/in/kumar-aditya-0ab61b234/',
    photo: 'https://media.licdn.com/dms/image/D5603AQEKVAUnmkHjkQ/profile-displayphoto-shrink_400_400/0/1710356439246?e=1718236800&v=beta&t=zSKJSFNlarKJKm3x117dCl-_HsgdLpswifYXuq2jg-M',
  },
  {
    id: 6,
    fullName: 'Rajgopal Kumar',
    city: 'Kolkata',
    skills: ['UX/UI Designer', 'Figma', 'Web Design', 'Developer', 'Designer'],
    socialMedia: 'https://www.linkedin.com/in/rajgopal-kumar/',
    photo: 'https://media.licdn.com/dms/image/D4D03AQENgYbvew5_qg/profile-displayphoto-shrink_400_400/0/1688287774067?e=1718236800&v=beta&t=8kXkFD-g9US54_xtNM5BNcFrB5tPwUZNFOHIrdzyfrs',
  },
  {
    id: 7,
    fullName: 'Shrutika Jha',
    city: 'Kolkata',
    skills: ['Developer', 'Front-End Developer',],
    socialMedia: 'https://www.linkedin.com/in/shrutikajha2603/',
    photo: 'https://media.licdn.com/dms/image/D5603AQExw9ricFJ6rw/profile-displayphoto-shrink_400_400/0/1703237550098?e=1718236800&v=beta&t=EjMcjj7XVOjly-Aj8RDuj0qhOR4_OMt6DBxWThlSBcQ',
  },
  {
    id: 8,
    fullName: 'Subhadeep Roy',
    city: 'Kolkata',
    skills: ['Developer', 'Front-End Developer',],
    socialMedia: 'https://www.linkedin.com/in/subhadeep3902/',
    photo: 'https://media.licdn.com/dms/image/D4D03AQFalsSBySqQCA/profile-displayphoto-shrink_400_400/0/1680632903861?e=1718236800&v=beta&t=9vfQVmEeC_VRjxkwbqaH7CZXz0McF9D6Z_p0zlXTQks',
  },
  {
    id: 9,
    fullName: 'Atul Singh',
    city: 'Kolkata',
    skills: ['Graphic Designer', 'Developer', 'Illustrator',],
    socialMedia: 'https://www.linkedin.com/in/atulsinghc/',
    photo: 'https://media.licdn.com/dms/image/D5603AQFdFSRngxXYyw/profile-displayphoto-shrink_400_400/0/1706718011967?e=1718236800&v=beta&t=sLyl91IpYuKsCa1qVxpSM007AS3H7q1oC2qMDmRYjwc',
  },
  {
    id: 10,
    fullName: 'Utsav Tiwari',
    city: 'Kolkata',
    skills: ['Web Developer', 'React', 'Developer'],
    socialMedia: 'https://www.linkedin.com/in/utsav-tiwari30/',
    photo: 'https://media.licdn.com/dms/image/D5603AQG8SQ5G8zlNbQ/profile-displayphoto-shrink_400_400/0/1705265645288?e=1718236800&v=beta&t=RdGXT-UgEMqYJ72vcxx-ceytnjor-O6g71trehHcbF0',
  },
];
// Arrange the array in alphabetical order by fullName
usersData.sort((a, b) => (a.fullName > b.fullName) ? 1 : -1);

usersData.forEach((user, index) => {
    user.id = index + 1;
});


export default function HireTalent() {
// const MyCardLoader = () => <Facebook animate={true}/>

const [selectedCategory, setSelectedCategory] = useState('All')
  const handleCategoryCLick = (categoryValue) => {
    setSelectedCategory(categoryValue)
  }
filteredData = usersData.filter(user => user.skills.some(skill => skill === selectedCategory))
matchedData = selectedCategory === 'All' ? usersData : filteredData

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
        socialMedia={data.socialMedia}
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
                    backgroundColor: category === selectedCategory ? '#C9D9FF':'transparent'
                  }}>
                    {category}
                </Text>
            </TouchableOpacity>
        ))}
    </ScrollView>
    )
}
const ProfileCard = ({fullName, location, photo, skills, socialMedia}) => {
  //external Link
  const handleSocialMediaClick = (url) => {
    if (url) {
      Linking.openURL(url).catch((err) => console.error('Failed to open URL: ', err));
    }
  };
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
                {/* <TouchableOpacity><Feather name='external-link' size={18} style={{paddingHorizontal:4}} /></TouchableOpacity> */}
                {/* <TouchableOpacity><Entypo name='instagram' size={18} style={{paddingHorizontal:4}} /></TouchableOpacity> */}
                <TouchableOpacity onPress={() => handleSocialMediaClick(socialMedia)} ><Entypo name='linkedin' size={18} style={{paddingHorizontal:4}} /></TouchableOpacity>
                {/* <TouchableOpacity><Entypo name='behance' size={18} style={{paddingHorizontal:4}} /></TouchableOpacity> */}
            </View>
        </View>
    </View>
    )
}