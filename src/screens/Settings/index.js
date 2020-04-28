import React,{useState} from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'


import styles from './styles'
import Shape from '../../assets/Shape.png'

import Input from '../../components/Input'
import Slideer from '../../components/Slider'
import Notific from '../../components/Notific'
const Profile = 'https://firebasestorage.googleapis.com/v0/b/reactjsapp-55e11.appspot.com/o/image%2FCuuiCjFNHoWXPwhUNhPz7sP9R4j2%2Fperfil.png?alt=media&token=63d3e4c6-7a67-4066-a954-c5b4262a80d8'
console.disableYellowBox = true;
export default function Settings(){
    const navigation = useNavigation();
    const [budget,setBudget] = useState(500)
    const [monthly,setMonthly] = useState(1500)

    function navigateToBrowse(){
        navigation.navigate('Browse')
    }

    return (
        <View style={styles.container}>
            <View style={{marginHorizontal:30}}>
                <TouchableOpacity style={styles.shape} onPress={navigateToBrowse}>
                    <Image source={Shape} />
                </TouchableOpacity>
                <View style={styles.header}>
                    <Text style={styles.title}>Settings</Text>
                    <TouchableOpacity onPress={()=>{}}>
                        <Image source={{uri: Profile}} style={{width:40, height:40, borderRadius: 20}}/>
                    </TouchableOpacity>
                </View>
            </View>
                <ScrollView>
                    <View style={styles.inputGroup}>
                        <Input edit={1} label="Username" value='Guilherme Pablo' />
                        <Input edit={1} label="Location" value='Natal' />
                        <Input edit={2} label="E-mail" value='Guilherme@hotmail.com' />
                    </View>
        
                <View style={styles.budget}>
                    <Slideer name="Budge" valueFinaly={1000} value={500} />
                    <Slideer name="Monthly Cap" valueFinaly={5000} value={1500} />
                </View>

                <View style={styles.notificGroup}>
                    <Notific name='Notifications' value={true}/>
                    <Notific name='Newsletter' value={false}/>
                </View>
               
              
                 
                </ScrollView>
        </View>
    )
}


