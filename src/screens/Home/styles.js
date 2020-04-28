import {StyleSheet, Dimensions} from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        backgroundColor:'#FFF'
    },
    header:{
        width:251,
        height:57,
        marginTop: (width * 0.1) + getStatusBarHeight(true),
        alignItems:'center',
        justifyContent:'center'
    },
    headerTitle:{
       flexDirection:'row',
       alignItems:'center'
    },
    headerTitleText:{
        fontSize:20,
        marginRight:10
    },
    headerDescription:{
        color:'#C5CCD6'
    },
    buttonGroup:{
        width:275,
    }


})