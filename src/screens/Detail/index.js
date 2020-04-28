import React from 'react'
import { View, Text,Image, TouchableOpacity , ScrollView } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import styles from './styles'
import Shape from '../../assets/Shape.png'
import {products} from '../../constans'

export default function Detail(){
    const navigation = useNavigation()

    function navigateToExplore(){
        navigation.navigate('Explore')
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateToExplore}>
                    <Image source={Shape}  />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                    <Text style={styles.title}>...</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <Image style={styles.img}  source={products[0].images[0]} />
           
                <View style={{paddingHorizontal:30}}>
                    <Text style={styles.name}>{products[0].name}</Text>

                    <View style={styles.grounpText}>
                        <Text style={styles.text}>{products[0].tags[0]}</Text>
                        <Text style={styles.text}>{products[0].tags[1]}</Text>
                        <Text style={styles.text}>{products[0].tags[2]}</Text>
                    </View>

                    <Text style={styles.description}>{products[0].description}</Text>

                    <Text style={{marginBottom:20}}>Gallery</Text>

                    <View style={styles.cardContainer}>
                    {
                        products[0].images.map(item=>(
                            <Image style={styles.CardImg} source={item} key={Math.random()}  />
                        ))
                    }
                    </View>
                   
                </View>
            </ScrollView>
        </View>
    )
}

