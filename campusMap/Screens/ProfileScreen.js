import React, { useState } from 'react';
import { TextInput,StyleSheet,ScrollView ,Text, View, SafeAreaView, Image } from "react-native";
import FooterTabs from "../components/nav/FooterTabs";
import { getAuth } from "firebase/auth";


export default function ProfileScreen() {
    const auth = getAuth();
    const user = auth.currentUser;
    
    const fullName = user.displayName;
    const email = user.email;

    return (
        <SafeAreaView style={styles.container}>
            <Image
              source={require('')}
              style={{
                height: 170,
                width: 170,
                borderRadius: 85,
                borderWidth: 2,
                borderColor: COLORS.primary,
              }}
            />
    
             {/* <Text style={styles.text}>Nom: {fullName}</Text>
            <Text style={styles.text}>Email: {email}</Text> */}
            <FooterTabs/>
        </SafeAreaView>
    );
}

const styles=StyleSheet.create ({
    container :{
           flex: 1,
          justifyContent : "space-between",
          backgroundColor: "#F8EFE0",
         // padding: 20,
    },

    
});
