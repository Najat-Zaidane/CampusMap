import React, { useState } from 'react';
import { TextInput,StyleSheet,ScrollView ,Text, View, SafeAreaView, Image,TouchableOpacity } from "react-native";
import FooterTabs from "../components/nav/FooterTabs";
import { getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";



export default function ProfileScreen() {
    
    const auth = getAuth();
    const user = auth.currentUser;
    const fullName = user.displayName;
    const email = user.email;
 
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.container2}>
            <Image
              source={require('../assets/user1.png')}
              style={styles.image}
            />
             <Text style={styles.text}>{fullName}</Text>
            <Text style={styles.text}>{email}</Text> 
            <Text style={styles.text} >Faculté des Sciences, Université Chouaib Doukali </Text>

            </View>
            <View  >
            <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('Login')}>
            <Text style={styles.loginButtonText}>Se déconnecter </Text>
           </TouchableOpacity>
           </View>
            <FooterTabs/>
        </SafeAreaView>
    );
}
//style
const styles=StyleSheet.create ({
    container :{ 
           flex: 1,
          justifyContent : "space-between",
          backgroundColor: "#F8EFE0",
         // padding: 20,
    },
    container2 : {
       // marginVertical: 80,
      justifyContent : 'center',
      alignItems : 'center',
       marginTop : 80,
      marginBottom : -100 ,
    },
    image : {
        height: 170,
        width: 170,
        borderRadius: 85,
        borderWidth: 2,
        borderColor: "#FEAC5D",
        marginBottom : 15
    },
    text : {
        fontSize: 16,
        marginBottom: 6,
        marginVertical: 10,
    }, 

    loginButton: {
        backgroundColor: '#003CA6',
       // padding: 10,
        borderRadius: 20,
        justifyContent: 'center',
        marginBottom : 18,
        height : 55,
        marginHorizontal: 12
      },
      loginButtonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize : 15,
        fontWeight : 'bold'
      },

    
});
