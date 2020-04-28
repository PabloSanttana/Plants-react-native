import { StyleSheet,Dimensions} from 'react-native'

import {colors} from '../../styles'
const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    header:{
        marginTop: height*0.07,
        marginBottom: 30,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:30,
    },
    title:{
        fontSize:26,
        color:colors.gray,
        fontWeight:'bold',
        height: 30,
       marginBottom:15
      
    },
    img:{
        width: width,
        height: width * 3/5,
        marginBottom:25,
    },
    name:{
        fontSize:20,
        color: colors.black,
        marginBottom:14
    },
    grounpText:{
        flexDirection:'row',
        alignItems:'center'
    },
    text:{
        marginRight:10,
        borderWidth: 0.3,
        paddingVertical:3,
        paddingHorizontal: 15,
        borderRadius: 20,
        color:colors.gray,
        borderColor:colors.gray,
        marginBottom:20
    },
    description:{
        fontSize:14,
        color:colors.gray,
        paddingBottom: 30,
        borderBottomWidth: 0.3,
        marginBottom:20
    },
    cardContainer:{
        flexDirection:'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    CardImg:{
        width:140,
        height:140,
        marginBottom:25,
    }
})