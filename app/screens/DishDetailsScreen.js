import React,{useState,useEffect} from 'react'
import { View ,Text,Image,StyleSheet} from 'react-native'
import Icon from '../components/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { Add_fav,Remove_fav } from '../redux/reducer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DishDetailsScreen = (props) => {
const favitem = useSelector((state) => state.favourite);
  const dispatch = useDispatch();
  const dish = props.route.params.dish;
  
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const isDishFav = favitem.some((favDish) => favDish.id === dish.id);
    setIsFav(isDishFav);
  }, [favitem, dish]);

  const markFav = () => {
    if (isFav) {
    
        dispatch(Remove_fav(dish.id));
      } else {
        
        dispatch(Add_fav(dish));
      }
      setIsFav(!isFav);
  };

  const iconName = isFav ? 'heart' : 'heart-outline';
  return (
    <View>
        <Image source={{uri:dish.image}} style={styles.image}/>
        <View style={styles.details}>
            <View style={{flexDirection:'row', alignItems:'center' ,gap:10}}>
                 <Text style={styles.name}>
            {dish.name}
        </Text>
        <TouchableOpacity onPress={()=>markFav(dish)}>
             <Icon name={iconName} color='#f54b50' size={30} />
        </TouchableOpacity>
       
            </View>
       
        <Text style={styles.description}>
            {dish.description}
        </Text>
    </View>
    </View>
    
  )
}

const styles=StyleSheet.create({
    image:{
        width:'100%',
        height:300
    },
    name:{
        fontSize:20,
        fontWeight:'500'
    },
    details:{
        padding:10
    },
    description:{
        textAlign:'justify',
        marginTop:10
    }
  
})

export default DishDetailsScreen