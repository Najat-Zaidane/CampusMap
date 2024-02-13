import React from "react";
import { View ,Image , StyleSheet} from "react-native";

const Logo = () => {
    return(
<View style={styles.container} >
    
    <Image 
         source={require("../assets/logo2.png")}
          style={styles.logo}         
    />
 
</View>
    );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      width: 180,
      height: 180,
      marginLeft: 30,
      
    },
  });



export default Logo;