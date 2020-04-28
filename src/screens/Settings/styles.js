import {StyleSheet, Dimensions} from 'react-native'

import {colors} from '../../styles'
const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    shape:{
        marginTop: height*0.1,
        marginBottom: 30,
        width:50,
     },
     header:{
         flexDirection:'row',
         justifyContent:'space-between',
         marginBottom:40
     },
     title:{
         fontSize:26,
         color:colors.black,
     },
     inputGroup:{
         paddingBottom:10,
         borderBottomWidth:0.6,
         borderColor: colors.gray2,
         marginHorizontal:30,
         marginBottom:30
     },
     budget:{
         marginHorizontal:15,
         marginBottom:28
       
     },
     notificGroup:{
         marginHorizontal:30,
         borderTopWidth:0.6,
         borderColor: colors.gray2,
        paddingTop: 30,
        marginBottom:30

     }
    })