import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";


export default function Banners () {
 const images = [
     require("../../assets/Banners/1.png"),
     require("../../assets/Banners/2.png"),
     require("../../assets/Banners/3.png"),
      ]
return (
    <View style={{  borderRadius: 40, marginBottom:30, }}>
        <SliderBox images={images}
            autoplay= {true}
            // autoplayInterval={3000}
            dotColor= "#252525"
            inactiveDotColor= 'grey'
            paginationBoxHorizontalPadding={0}
            activeOpacity={1}
            ImageComponentStyle={{borderRadius: 15, width: '94%', marginTop: 5}}
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

