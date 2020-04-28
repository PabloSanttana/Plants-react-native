import {StyleSheet, Dimensions} from 'react-native'
import{colors} from '../../styles'


export default StyleSheet.create({
    container:{
        marginVertical:10
    },
    label:{
        fontSize:14,
        color:colors.gray
    },
    input:{
        backgroundColor:'#fff',
        borderBottomWidth:0.5,
        borderColor: colors.gray2,
        paddingRight:20
    },
    icon:{
        position: 'absolute',
        top:19,
        right:0
    },
    edite:{
        fontSize:14,
        color:colors.primary,
        fontWeight:'500'
    }
    
})