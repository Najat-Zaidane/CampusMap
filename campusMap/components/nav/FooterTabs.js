import React , {useState} from "react";
import {View ,TouchableOpacity, StyleSheet} from "react-native";
import  Text  from '@kaloraat/react-native-text';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export  const Tab = () => {
  
  <TouchableOpacity>
            <>
              <FontAwesome5 name="home" size={35} style={styles.icon}/>
              <Text bold color="#003CA6">Acceuill</Text>
            </>
  </TouchableOpacity>

};



export default function FooterTabs() {
     
    return(
        <View style={styles.container}>

          <Tab/>

         {/*  <TouchableOpacity>
            <>
              <FontAwesome5 name="home" size={35} style={styles.icon}/>
              <Text bold color="#003CA6">Acceuill</Text>
            </>
           </TouchableOpacity>

            <TouchableOpacity>
            <>
              <Text>Evènements</Text>
            </>
           </TouchableOpacity>

           <TouchableOpacity>
            <>
              <Text>Localiser</Text>
            </>
           </TouchableOpacity>

           <TouchableOpacity>
            <>
              <Text>Profile</Text>
            </>
           </TouchableOpacity> */}

        </View>
    );

}

const styles=StyleSheet.create ({
    container :{
          flexDirection : "row",
          margin : 10,
          marginHorizontal : 30,
          justifyContent : "space-between"
    },
    icon : {
       marginBottom : 3,
       alignSelf : "center",
       color : "#003CA6",
       //color : "#E2AB2D",
    },
});
 
