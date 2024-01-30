import React from 'react'
import HomeScreen from './screens/HomeScreen'
import MenuScreen from './screens/MenuScreen'
import DishDetailsScreen from './screens/DishDetailsScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from "@react-navigation/stack"

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DishDetails = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name='Menus' component={MenuScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Dish' component={DishDetailsScreen} options={({ route }) => ({ 
                title: route.params.dish.name, 
                headerTitleStyle: { fontWeight: 'bold' }
                })} />
        </Stack.Navigator>
    )
}

const AppNavigator = () => {

    return (
        <Drawer.Navigator initialRouteName='Home' screenOptions={{
            headerStyle: {
                backgroundColor: '#cd5c84'
            },
            headerTintColor: '#ffffff'
        }}>
            <Drawer.Screen name='Home' component={HomeScreen} />
            <Drawer.Screen name='Menu' component={DishDetails} />


        </Drawer.Navigator>
    )
}

export default AppNavigator