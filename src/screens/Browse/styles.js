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
        fontWeight:'bold'
    },
    text:{
        textAlign:'center',
        fontSize:12,
        color: colors.gray,
        borderBottomWidth: 0.1
    },
    navigate:{
        flexDirection:"row",
        borderBottomWidth:0.7,
        borderBottomColor:colors.gray,
        marginBottom:40
    },
    navigateText:{
        marginRight:20,
        fontSize:16,
        color: colors.gray,
        paddingBottom: 20,
        
    },
    navigateTextActive:{
        color: colors.primary,
        borderBottomWidth:3,
        borderBottomColor: colors.primary
    },
    list:{
        alignItems:'center',
    }
})