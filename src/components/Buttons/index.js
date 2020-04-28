import React from 'react'
import { View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import {colors} from '../../styles'
import styles from './styles'

const Button = ({primary = false,title}) => {


    if(primary){
        return (
            <LinearGradient style={styles.button}  colors={[colors.primary,colors.secondary]}   start={{x:0,y:0}}  end={{x:1,y:1}}  >
                    <Text style={styles.buttonText}>{title}</Text>
            </LinearGradient>
        )
    }else{
        return(
            <View style={{...styles.button,backgroundColor:"#fff",borderWidth:0.1 }} >
                <Text style={{...styles.buttonText,color:"#000",fontWeight:'100'}}>{title}</Text>
            </View>
        )
    }
    
}

export default Button
