import {StyleSheet, Dimensions} from 'react-native'

import {colors} from '../../styles'
const {width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        width: (width-75)/2,
        backgroundColor:'#fff',
        marginHorizontal:6.9,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:15,
        borderRadius:6,
        elevation: 5
    },
    icon:{
      marginTop: 25,
      marginBottom:15
    },
    name:{
        marginBottom:3,
        fontSize:14
    },
    discription:{
        fontSize:12,
        marginBottom:23,
        color: colors.gray
    }
})