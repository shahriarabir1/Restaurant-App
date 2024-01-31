import React from 'react'
import { View } from 'react-native'
import {Ionicons} from 'react-native-vector-icons'

const Icon = (props) => {
  return (
    <View>
        <Ionicons name={props.name} size={props.size} color={props.color} style={{...props.styles}}/>
    </View>
  )
}

export default Icon