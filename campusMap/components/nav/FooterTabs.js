import React , {useState} from "react";
import {View ,TouchableOpacity, StyleSheet} from "react-native";
import  Text  from '@kaloraat/react-native-text';

export default function FooterTabs() {
     
    return(
        <View style={styles.container}>

           <TouchableOpacity>
            <>
              <Text>Aceuill</Text>
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
           </TouchableOpacity>

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
});
 
