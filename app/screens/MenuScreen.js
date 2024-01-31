import React, { useEffect } from 'react'
import { View,Text, Button } from 'react-native'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Add } from '../redux/reducer';
import { FlatList } from 'react-native-gesture-handler';
import MenuItems from '../components/MenuItems';

const MenuScreen =(props) => {
    const data=useSelector(state=>state.dishes)
    const dispatch=useDispatch();
    useEffect(()=>{
    axios.get("https://restaurant-app-ae941-default-rtdb.firebaseio.com/dishes.json")
    .then(res=>{dispatch(Add(res.data))
    
    })
    .catch(err=>console.log(err))
    },[])
   // console.log(data)

    // console.log(data)
    return (
        <View>
            <FlatList 
            data={data[0]}
            renderItem={
                ({item})=>(<MenuItems item={item} selectDish={()=>props.navigation.navigate('Dish',{dish:item})}/>)
            }
            />
        </View>
    );
}

export default MenuScreen