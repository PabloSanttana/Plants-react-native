import React,{useState, useEffect} from 'react'
import { View, Text, Animated, TouchableOpacity } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

import styles from './styles.js'
import {colors} from '../../styles'

const Notific = ({name, value}) => {
    const [Amine, setAmine] = useState( new Animated.ValueXY({x:0,y:0}))
    const [select,setSelect] = useState(value)
    const [color, setColor] = useState([colors.primary,colors.secondary])

    useEffect(()=>{
        if(select){
            setColor([colors.primary,colors.secondary])
            handleActive()
        }else{
            setColor([colors.gray,colors.gray])
            handleActive()
        }
    },[select])

    function handleActive(){
        if( !select ){
            Animated.timing(Amine.x,{
                toValue:20,
                duration: 300,
                useNativeDriver: true,
            }).start()
        }else{
            Animated.timing(Amine.x,{
                toValue:0,
                duration: 300,
                useNativeDriver: true
            }).start() 
        }
    }
    return (
        <View style={ styles.container}>
            <Text style={styles.title}>{name}</Text>
                    <TouchableOpacity onPress={()=> setSelect(!select)}>
                        <LinearGradient style={styles.buttonContainer}  colors={color}   start={{x:0,y:0}}  end={{x:1,y:1}}  >
                            <Animated.View style={[
                                styles.button,
                                {
                                    transform:[{
                                        translateX: Amine.x
                                    }]
                                }
                                ]}/>
                        </LinearGradient>
                    </TouchableOpacity>
          
        </View>
    )
}

export default  Notific
