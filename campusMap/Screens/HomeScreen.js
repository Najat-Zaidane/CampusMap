import React, {useContext} from "react";
import {StyleSheet, Button ,SafeAreaView} from "react-native";
import FooterTabs from "../components/nav/FooterTabs";
import HomeContent from "../components/HomeContent";


const HomeScreen = ({navigation}) => {

    return (
           
        <SafeAreaView style={styles.container}>
           <HomeContent/>
           
           <FooterTabs/>
           </SafeAreaView>
   
        );
}

const styles=StyleSheet.create ({
    container :{
           flex: 1,
          justifyContent : "space-between",
          backgroundColor: "#F8EFE0",
    },
});
 

export default HomeScreen;

 