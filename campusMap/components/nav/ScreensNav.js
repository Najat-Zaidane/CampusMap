
// this component  is used to navigate between different screens in the app, we can import it in the app.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../Screens/LoginScreen.js';
import HomeScreen from  '../../Screens/HomeScreen.js';
import SignUpScreen from '../../Screens/SignUpScreen.js'


const Stack=createStackNavigator();

export default function ScreensNav() {
    return(
   
 
     <Stack.Navigator 
     initialRouteName='Home'
     screenOptions={{headerShown: false}}>
       <Stack.Screen name='Login' component={LoginScreen}/>
       <Stack.Screen name='Sign' component={SignUpScreen}/>
       <Stack.Screen name='Home' component={HomeScreen}/>
     </Stack.Navigator>
   
   
    
 );
}


