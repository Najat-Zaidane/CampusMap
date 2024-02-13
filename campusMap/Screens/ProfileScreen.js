import { View,StyleSheet,SafeAreaView } from "react-native";
import Text from '@kaloraat/react-native-text';
import FooterTabs from "../components/nav/FooterTabs";


export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text> Account Screen  </Text>
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
