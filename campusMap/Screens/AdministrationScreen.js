import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AdministrationScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Administration</Text>
            <Text style={styles.section}>Guichets de bourses</Text>
            <Text style={styles.section}>Affaires des étudiants</Text>
            <Text style={styles.section}>Bureau de réclamation</Text>
            <Text style={styles.section}>Bureau du doyen</Text>
            <Text style={styles.section}>Bureau du vice-doyen</Text>
            {/* Ajoutez d'autres sections selon vos besoins */}
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
