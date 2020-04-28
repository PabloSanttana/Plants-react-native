import {StyleSheet, Dimensions} from 'react-native'
import {colors} from '../../styles'

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:30,
        backgroundColor:'#fff',
    },
    shape:{
       marginTop: height*0.1,
       marginBottom: 30,
       width:50
    },
    title:{
        fontSize:26,
        color:colors.black,
        marginBottom:60
    },
    text:{
        textAlign:'center',
        fontSize:12,
        color: colors.gray,
        borderBottomWidth: 0.1
    }
})