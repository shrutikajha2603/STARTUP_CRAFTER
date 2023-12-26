import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";


export default function Banners () {
 const images = [
        "https://source.unsplash.com/1024x768/?company",
        "https://source.unsplash.com/1024x768/?bike",
        "https://source.unsplash.com/1024x768/?computer",
        "https://source.unsplash.com/random/?tree", // dummy banners
        // require("../assets/Banners/1.png"),

      ]
return (
    <View style={{  borderRadius: 40, marginBottom:30}}>
        <SliderBox images={images}
            dotColor= "#252525"
            inactiveDotColor= 'grey'
            paginationBoxHorizontalPadding={0}
            activeOpacity={1}
            ImageComponentStyle={{borderRadius: 15, width: '93%', marginTop: 5}}
            // sliderBoxHeight={170}
            imageLoadingColor="black"
            // paddingHorizontal= {'5%'}
            dotStyle={{
                width: 20,
                height: 5,
                marginHorizontal: -5,
            }}
            paginationBoxStyle={{
                position: "absolute",
                bottom: -25,
                margin: 0,
            }}
        />
    </View>
)
}

