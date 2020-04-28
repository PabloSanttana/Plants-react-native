import {StyleSheet,Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    scroll:{

    },
    button:{
        flexDirection:'row',
        position:'absolute',
        bottom:70,
    },
    buttonText:{
        color:'#b9b9b9b9'
    }
  
})