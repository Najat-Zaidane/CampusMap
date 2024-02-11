import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import LoginScreen from '../../Screens/LoginScreen.js';
import HomeScreen from  '../../Screens/HomeScreen.js';
import SignUpScreen from '../../Screens/SignUpScreen.js'


const Stack=createStackNavigator();

export default function ScreensNav() {
    return(
   
    <NavigationContainer>
     <Stack.Navigator 
     initialRouteName='Login'
     screenOptions={{headerShown: false}}>
       <Stack.Screen name='Login' component={LoginScreen}/>
       <Stack.Screen name='Sign' component={SignUpScreen}/>
       <Stack.Screen name='Home' component={HomeScreen}/>
     </Stack.Navigator>
    </NavigationContainer>
   //<SignUpScreen/>
    
 );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
