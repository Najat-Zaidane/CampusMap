import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from '@react-native-firebase/auth'; 

import ScreensNav from './components/nav/ScreensNav.js';


export default function RootNavigation() {
    return(
    <NavigationContainer>
     <AuthProvider>
       <ScreensNav/>
     </AuthProvider>
    </NavigationContainer>
 );
}

// the reason to create this file because we want to use navigation in different screen, so it will be easy for us if we just call a function 
