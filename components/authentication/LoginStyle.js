import { Platform, StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
        wholeView: {
            flex:1,
        },
        headText:{
            fontSize:30,
            fontWeight:'bold',
            alignSelf:'center',
            marginBottom:30,
        },
        input: {
            backgroundColor:'white',
            elevation:3,
            borderRadius:30,
            padding: 15,
            marginHorizontal:20,
            marginVertical:7,
        },
        eye: {
            margin: 10,
            position:'absolute',
            right:16,
            top:0,
            padding:14,
            // backgroundColor:'pink'
        },
        error : {
            textAlign:'center',
            color:'red'
        },
        button: {
            backgroundColor:'#252525',
            elevation:3,
            borderRadius:30,
            padding: 14,
            marginHorizontal:20,
            marginTop:60,
        },
        loginText: {
            color:'white',
            alignSelf:'center',
            fontSize:18
        },
        alternate : {
            textAlign:"center",
            margin:0,
        }
    })
