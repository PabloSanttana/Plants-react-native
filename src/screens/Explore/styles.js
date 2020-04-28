import {StyleSheet, Dimensions} from 'react-native'

import {colors} from '../../styles'
const {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
       paddingHorizontal:30
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
     gradient:{
        width:'100%',
        height:80,
        opacity:0.7,
        position:'absolute',
        left: 30,
        bottom:0
     },
     button:{
         position:'absolute',
         width: 150,
         height:40,
         zIndex:1,
         left: (width-150)/2,
         bottom:30
     }
    
})