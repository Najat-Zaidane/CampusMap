//this component  is used to display the list of all the users in the system.
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
// the AuthProvider is used  to provide authentication state to our app's navigation stack, which allows us to protect certain screens 