import { StyleSheet } from "react-native";

export default StyleSheet.create({
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