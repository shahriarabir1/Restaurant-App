import React from 'react'
import { View,Text,Image,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
const MenuItems = (props) => {
  return (
    <TouchableOpacity onPress={props.selectDish}>
         <View style={styles.container}>
        {props.item.image && <Image source={{uri:props.item.image}} style={styles.image}/>}
    <View style={styles.details}>
        <Text style={styles.name}>{props.item.name}</Text>
        <Text style={styles.description} numberOfLines={3}>{props.item.description}</Text>
   </View>
    </View> 
    </TouchableOpacity>
  
  
  )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        flexDirection:'row',
        padding:15
    },
    details:{
        flex:1,
        marginLeft:10,
        justifyContent:'center'
    },
    image:{
        width:50,
        height:50
    },
    name:{
        fontWeight:'500'
    },
    description:{
        color:'#6e6969',
        textAlign:'justify'
    }
})

export default MenuItems