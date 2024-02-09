import { SafeAreaView, Text,StyleSheet, Button } from "react-native";
function HomeScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Text> Home Screen</Text>
            <Button title="vers profile " onPress={()=>navigation.navigate('Profile')} />
        </SafeAreaView>
    );}

    const styles=StyleSheet.create ({
        container : {
            flex : 1,
        }}
    );
export default HomeScreen;