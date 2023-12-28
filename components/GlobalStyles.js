import { Platform, StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
    statusBarArea: {
        // backgroundColor: '#C9D9FF',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    bar: {
        // backgroundColor: '',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 13,        
    },
    userIcon: {
        borderColor:'#252525',
        borderWidth:2,
        borderRadius:30,
        padding:5,
    }
}
)