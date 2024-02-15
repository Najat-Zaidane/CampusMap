import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from './Screens/LoginScreen.js';
import HomeScreen from  './Screens/HomeScreen.js';
import SignUpScreen from './Screens/SignUpScreen.js';
import ProfileScreen from './Screens/ProfileScreen.js';
import EventScreen from './Screens/EventScreen.js';
import MapScreen from './Screens/MapScreen.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import HeaderTabs from './components/nav/HeaderTabs.js';
import AproposScreen from './Screens/AproposScreen.js';
import AdministrationScreen from './Screens/AdministrationScreen.js';
import DepartementScreen from './Screens/DepartementScreen.js';
import HeaderTabLeft from './components/nav/HeaderTabLeft.js';
import LoisirScreen from './Screens/LoisirScreen.js';
import LocationsScreen from './Screens/LocationScreen.js';


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
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const Stack=createStackNavigator();

export default function App() {
    return(

    <NavigationContainer>
     <Stack.Navigator 
     initialRouteName='Home'
     screenOptions={{headerShown: true}}>
       <Stack.Screen name='Login' component={LoginScreen} options={{headerShown : false,headerLeft:null}} />
       <Stack.Screen name='Sign' component={SignUpScreen} options={{headerShown : false}}/>
       <Stack.Screen name='Home' component={HomeScreen} options={{headerShown : false,headerLeft:null}} />
       <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown : false,headerLeft:null}}  />
       <Stack.Screen name="Event" component={EventScreen} options={{headerShown : false,headerLeft:null}}  />
       <Stack.Screen name="Map" component={MapScreen} options={{headerShown : false,headerLeft:null}} initialParams={{ latitude: 33.225664, longitude: -8.485759, title: 'Destination Title' }} />
       <Stack.Screen name="Location" component={LocationsScreen} options={{headerShown : false,headerLeft:null}}  />
       <Stack.Screen name='Apropos' component={AproposScreen} options={{title:"" ,headerLeft : () => <HeaderTabLeft/> }}  />
       <Stack.Screen name='Administration' component={AdministrationScreen} options={{title:"" , headerLeft : () => <HeaderTabLeft/> }}  />
       <Stack.Screen name='Departement' component={DepartementScreen} options={{title:"" ,headerLeft : () => <HeaderTabLeft/> }}  />
       <Stack.Screen name='EspaceLoisir' component={LoisirScreen} options={{title:"" , headerLeft : () => <HeaderTabLeft/> }}  />

       

     </Stack.Navigator>
    </NavigationContainer>  
 );
}

