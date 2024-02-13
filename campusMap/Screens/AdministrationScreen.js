import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AdministrationScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Administration</Text>

            <View>
            <Text style={styles.section}>Guichets de bourses <FontAwesome5 name="money-check-alt" size={10} style={styles.icon} /> </Text>
            <Text>description</Text>
            </View>


            <View>
            <Text style={styles.section}><FontAwesome5 name="user-graduate" style={styles.icon} /> Guichets des affaires étudiantes</Text>
            <Text>description</Text>
            </View>

         
            <Text style={styles.section}><FontAwesome5 name="exclamation-circle" style={styles.icon} />Bureau de réclamations</Text>
            <Text>description</Text>

            <View>
            <Text style={styles.section}>Bureau du doyen</Text>
            <Text>description</Text>
            </View>
            
            <View>
            <Text style={styles.section}>Bureau du vice-doyen</Text>
            <Text>description</Text>
            </View>

        
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8EFE0",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#1D828E",
    },
    section: {
        fontSize: 18,
        marginBottom: 10,
        color: "#140F1F",
    },
});

export default AdministrationScreen;
