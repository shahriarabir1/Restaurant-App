import React from 'react'
import { View,Text,FlatList } from 'react-native'
import {  useSelector } from 'react-redux'
const FavouriteScreen = () => {
    const dishes=useSelector(state=>state.favourite)
  return (
    <View>
        <FlatList data={dishes}
            renderItem={({item})=>(<Text>{item.name}</Text>)}
        />
    </View>
  )
}

export default FavouriteScreen