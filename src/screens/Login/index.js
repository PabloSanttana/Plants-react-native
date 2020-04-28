import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import styles from './styles'
import Shape from '../../assets/Shape.png'
import Input from '../../components/Input'
import Button from '../../components/Buttons'


export default function Login(){
    const navigation = useNavigation();

    function navigateToHome(){
        navigation.navigate('Home')
    }
    function navigateToBrowse(){
        navigation.navigate('Browse')
    }
    return (
        <View style={styles.container}>
          
                <TouchableOpacity onPress={navigateToHome} style={styles.shape} >
                    <Image source={Shape}/>
                </TouchableOpacity>
          
           
            <Text style={styles.title}>Login</Text>

            <Input label='Email' />
            <Input label='Password' />

            <TouchableOpacity onPress={navigateToBrowse} style={{marginTop:30,marginBottom:15}}>
                <Button primary={true} title="Login" />
            </TouchableOpacity>
            <Text style={styles.text}>Forgot your password?</Text>
        </View>
    )
}

