import React,{useState} from 'react'
import { View, Text,Image, TextInput, TouchableOpacity } from 'react-native'


import styles from './styles'
import IconView from '../../assets/Icon-View.png'
import {colors} from '../../styles'

const Input = ({label, edit, value}) => {
    const [visible, setVisible] = useState(true)
    const [name, setName] = useState(value)

    if(label === "Password"){
        return (
            <View style={styles.container}>
                <Text style={{...styles.label,color: colors.accent}}>{label}</Text>
                <View style={styles.password}>
                    <TextInput secureTextEntry={visible}  style={{...styles.input,borderColor:colors.accent,borderBottomWidth:0.8}} placeholder={label}/>
                    <TouchableOpacity style={styles.icon} onPress={()=> setVisible(!visible)}>
                        <Image source={IconView} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }else if(label === "Email") {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
                <TextInput style={styles.input} placeholder={label}/>
            </View>
        )
    }else if(edit === 1){
        return (
            <View style={{...styles.container,marginVertical:3}}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.password}>
                    <TextInput value={name} onChangeText={setName} style={{...styles.input,borderBottomWidth:0}} placeholder={label}/>
                    <TouchableOpacity style={styles.icon} onPress={()=> {}}>
                       <Text style={styles.edite}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }else if(edit === 2){
        return (
            <View style={{...styles.container,marginVertical:3}}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.password}>
                    <TextInput value={name} onChangeText={setName} style={{...styles.input,borderBottomWidth:0}} placeholder={label}/>
                </View>
            </View>
        )
    }
    
}

export default Input

