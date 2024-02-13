import React from "react";
import { StyleSheet , ScrollView , Text} from "react-native";


const AproposScreen = () => {
    return  (
       <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.welcomeText}>Explorez Notre Faculté</Text>
       </ScrollView>
    );
}
//style
const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8EFE0', 
      },
      welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textTransform: 'uppercase',
        color : "#1D828E",
      },
    
});



export default AproposScreen;