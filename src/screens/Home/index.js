import React,{useEffect} from 'react'
import { Text, TouchableOpacity, View, Image, Animated } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import logo from '../../assets/Greener.png'
import Illustration from '../../assets/Illustration.png'
import Carousel  from '../../components/Carousel'

const images = [
    require('../../assets/Images/illustration_1.png'),
    require('../../assets/Images/illustration_2.png'),
    require('../../assets/Images/illustration_3.png')
]

import Button from '../../components/Buttons'


export default function Home() {
    const opacity = new Animated.Value(0)
    const y = new Animated.Value(200)
    const navigation = useNavigation()


    function navigateToLogin() {
        navigation.navigate('Login')
    }
    useEffect(()=>{
        function AnimatedImg(){
            Animated.timing(opacity,{
                toValue:1,
                duration: 1500,
                useNativeDriver:true
            }).start()
        }
        function AnimatedButtons(){
            Animated.spring(y,{
                toValue:1,
                speed: 0.1,
                bounciness:90,
                useNativeDriver:true
            }).start()
        }
        AnimatedImg()
        AnimatedButtons()
    },[])


    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTitle}>
                    <Text style={styles.headerTitleText}>Your home.</Text>
                    <Image source={logo} />
                </View>
                <Text style={styles.headerDescription}>Enjoy the experience.</Text>
            </View>

            <Animated.View style={{opacity, flex:3}} >
                <Carousel images={images}/>
            </Animated.View>

            <Animated.View style={
                {
                    transform:[{translateY: y}],
                    alignItems:'center',
                    flex:1
                }
                }>
                <View style={styles.buttonGroup}>
                    <TouchableOpacity onPress={navigateToLogin}>
                        <Button primary={true} title='Login' witdh={275} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Button primary={false} title='Signup' />
                    </TouchableOpacity>
                </View>
                <Text style={styles.headerDescription}>Terms of service</Text>
            </Animated.View>
        </View>

    )
}
