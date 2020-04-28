import React,{useState} from 'react'
import { View, Text, Slider } from 'react-native'

import {colors} from '../../styles'

import styles from './styles'

const Slideer = ({value,valueFinaly,name}) => {
    const [money,setMoneyt] = useState(value)
  
    return (
        <View>
            <Text style={styles.text}>{name}</Text>
             <Slider
                minimumValue={0}
                maximumValue={valueFinaly}
                thumbTintColor={colors.primary}
                maximumTrackTintColor={colors.gray2}
                minimumTrackTintColor={colors.secondary}
                onValueChange={setMoneyt}
                value={value}
            />
            <Text style={[styles.text, styles.textMoney]}>$ {money.toFixed(2)}</Text>
        </View>
    )
}

export default Slideer
