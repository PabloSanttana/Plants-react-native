import {StyleSheet} from 'react-native'

import {colors} from '../../styles'

export default StyleSheet.create({
    container:{
        height: 25,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
       marginBottom:30

    },
    title:{
        fontSize: 14,
        color: colors.gray,
        
    },
    buttonContainer:{
        height:25,
        justifyContent:'center',
        width:50,
        borderRadius:25,
        paddingHorizontal:5

    },
    button:{
        backgroundColor:'#ffff',
        width: 19,
        height:19,
        borderRadius: 9,
    },

})