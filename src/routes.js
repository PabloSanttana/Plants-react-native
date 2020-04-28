import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Home from './screens/Home'
import Login from './screens/Login'
import Browse from './screens/Browse'
import Settings from './screens/Settings'
import Explore from './screens/Explore'
import Detail from './screens/Detail'

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen  name="Home" component={Home}/>
                <AppStack.Screen  name="Login"  component={Login}/>
                <AppStack.Screen  name="Browse"  component={Browse}/>
                <AppStack.Screen  name="Settings"  component={Settings}/>
                <AppStack.Screen  name="Explore"  component={Explore}/>
                <AppStack.Screen  name="Detail"  component={Detail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}