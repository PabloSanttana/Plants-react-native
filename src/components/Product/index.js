import React from 'react'
import { View, Text,Image, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'


import styles from './styles'

const Product = ({data}) => {
    const navigation = useNavigation()
    return (
            <View style={styles.container}>
                 <TouchableOpacity onPress={()=> navigation.navigate('Explore')} style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Image source={data.image} style={styles.icon}/>
                    <Text style={styles.name}>{data.name}</Text>
                    <Text style={styles.discription}>{data.count}  {data.tags[0]}</Text>
                </TouchableOpacity>
            </View>
    )
}

export default Product
