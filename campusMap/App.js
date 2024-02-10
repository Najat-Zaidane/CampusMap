import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './Screens/LoginScreen.js';
import HomeScreen from  './Screens/HomeScreen.js';
import SignUpScreen from './Screens/SignUpScreen.js'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjHS_x1VfbA8UtYjTpf0R8CFk38T0bS5c", //token  de acces a la base de donnes de firebase
  authDomain: "campusmap-1f4d7.firebaseapp.com",
  projectId: "campusmap-1f4d7",
  storageBucket: "campusmap-1f4d7.appspot.com",
  messagingSenderId: "596039283610",
  appId: "1:596039283610:web:3049198c3e6aa3f6cec023"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); //pour initialiser l'app du projet  firebase
const Stack=createStackNavigator();

export default function App() {
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
