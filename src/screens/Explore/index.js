import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import LinearGradient from 'react-native-linear-gradient'

import styles from './styles'
import Shape from '../../assets/Shape.png'
import Search from '../../components/Search'
import {explore} from '../../constans'
import Button from '../../components/Buttons'
const {width, height} = Dimensions.get('window')


export default function Explore(){
    const navigation = useNavigation()

    function navigateToBrowse(){
        navigation.navigate('Browse')
    }
    function navigateToDetail(){
        navigation.navigate('Detail')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.shape} onPress={navigateToBrowse}>
                <Image source={Shape} />
            </TouchableOpacity>
            <View style={styles.header}>
                <Text style={styles.title}>Explore</Text>
                <Search/>
            </View>
            
            <ScrollView>
            <TouchableOpacity  onPress={navigateToDetail}>
                <Image source={explore[0]} resizeMode='contain'  style={{width:'100%', height:width* 3/3.3, marginBottom:25} } />
            </TouchableOpacity>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:25}}>
                <Image source={explore[1]} resizeMode='contain' style={{width:210, height:120 }} />
                <Image source={explore[2]} resizeMode='contain'  style={{width: 110, height:110}} />
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginBottom:30}}>
                <Image source={explore[3]}  style={{width:160, height:140 }} />
                <Image source={explore[4]}   style={{width:160, height:140}} />
            </View>

            <Image source={explore[5]} resizeMode='contain' style={{width:'100%', height:115, marginBottom:30}} />

            </ScrollView>
            <LinearGradient  colors={['transparent','#ffff']}   start={{x:0.5,y:0}}  end={{x:0.5,y:1}} style={styles.gradient}/>
                   
            <TouchableOpacity style={styles.button}>
                <Button title='Filters' primary={true}/>
            </TouchableOpacity>
         
        </View>
    )
}
