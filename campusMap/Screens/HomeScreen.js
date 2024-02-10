import React, {useContext} from "react";
import {StyleSheet, Button ,SafeAreaView} from "react-native";
import  Text  from '@kaloraat/react-native-text';
import FooterTabs from "../components/nav/FooterTabs";





const HomeScreen = ({navigation}) => {

    
    return (
            <SafeAreaView style={styles.container}>
           <FooterTabs/>
           </SafeAreaView>
   
        );
}

const styles=StyleSheet.create ({
    container :{
          flex : 1,
          justifyContent : "space-between"
    },
});
 

export default HomeScreen;

 