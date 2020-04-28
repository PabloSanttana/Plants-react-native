import React,{useEffect} from 'react'
import { TextInput, Animated, Image, TouchableOpacity } from 'react-native'

import styles from './styles'
import search from '../../assets/search.png'

const Search = () => {

    const value = new Animated.Value(130)

    useEffect(()=>{
        handleAnimated()
    },[])
  
    function handleAnimated(){
        Animated.spring(value,{
            toValue:0,
            speed:1,
            bounciness:80,
            useNativeDriver:true
        }).start()
    }
  
    return (
        <Animated.View style={[
            styles.container,
            {
                transform:[
                    {translateX: value}
               ]
            }
            ]}>
            <TextInput 
                style={[styles.input]}
                placeholderTextColor="#c0c0c0" 
                placeholder="Search"
             />
             <TouchableOpacity style={styles.icon} onPress={handleAnimated} >
                <Image source={search}  />
             </TouchableOpacity>
           
        </Animated.View>
    )
}

export default Search
