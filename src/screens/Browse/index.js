import React,{useState} from 'react'
import { View, Text, TouchableOpacity,Image, FlatList,ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import Shape from '../../assets/Shape.png'
const Profile = 'https://firebasestorage.googleapis.com/v0/b/reactjsapp-55e11.appspot.com/o/image%2FCuuiCjFNHoWXPwhUNhPz7sP9R4j2%2Fperfil.png?alt=media&token=63d3e4c6-7a67-4066-a954-c5b4262a80d8'
import {categories} from '../../constans'
import Product from '../../components/Product'

export default function Browse(){
    const navigation = useNavigation();
    const [active, setActive] = useState([ true, false, false])

  

    function navigateToLogin(){
        navigation.navigate('Login')
    }
    function navigateToSettings(){
        navigation.navigate('Settings')
    }
    function handleActive(rot){
    
        if(rot===0) return  setActive([ true ,false , false ])
        else if(rot===1) return  setActive([ false ,true , false ])
        else if(rot===2) return  setActive([ false ,false , true ])
    }
    return (
        <View style={styles.container}>
                <TouchableOpacity style={styles.shape} onPress={navigateToLogin}>
                    <Image source={Shape} />
                </TouchableOpacity>
                <View style={styles.header}>
                    <Text style={styles.title}>Browse</Text>
                    <TouchableOpacity onPress={navigateToSettings}>
                    <Image source={{uri: Profile}} style={{width:40, height:40, borderRadius: 20}}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.navigate}>
                    <TouchableOpacity onPress={()=>handleActive(0)}>
                        <Text style={[styles.navigateText, active[0] && styles.navigateTextActive]}>Products</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ ()=> handleActive(1)}>
                        <Text style={[styles.navigateText,active[1] && styles.navigateTextActive]}>Inspirations</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> handleActive(2)} >
                        <Text style={[styles.navigateText, active[2] && styles.navigateTextActive]}>Shop</Text>
                    </TouchableOpacity>
                </View>
           
                    
                        <FlatList
                                data={categories}
                                numColumns={2}
                                contentContainerStyle={styles.list}
                                showsVerticalScrollIndicator={false}
                                keyExtractor={product => product.id}
                                renderItem={({item}) => <Product  data={item}/>}
                            />

        </View>
    )
}

