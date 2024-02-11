import React from "react";
import {View ,TouchableOpacity, StyleSheet, SafeAreaView} from "react-native";
import  Text  from '@kaloraat/react-native-text';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";



const HeaderTabs = () => {
   const navigation = useNavigation();
    return(
    <SafeAreaView>
       <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <FontAwesome5 name="sign-out-alt" size={25} style={styles.icon} />
       </TouchableOpacity>
    </SafeAreaView>
    );

};

const styles=StyleSheet.create({
    icon : {
        marginBottom : 3,
        alignSelf : "center",
        color : "#003CA6",
        marginRight : 10
     }
});
export default HeaderTabs;

