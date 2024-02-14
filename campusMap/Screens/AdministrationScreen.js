import React from "react";
import { View,ScrollView, Text, StyleSheet } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AdministrationScreen = () => {
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.title}>Administration</Text>

            <View style={styles.section}>
            <Text style={styles.sectionTitle}><FontAwesome5 name="money-check-alt" size={15} style={styles.icon} />Guichets de Bourses  </Text>
            <Text style={styles.sectionText}>Les guichets de bourses sont disponibles pour toute information ou demande concernant les bourses d'études</Text>
            </View>


            <View style={styles.section}>
            <Text style={styles.sectionTitle}><FontAwesome5 name="user-graduate" size={15} style={styles.icon} /> Guichets des Affaires Etudiantes</Text>
            <Text style={styles.sectionText}>Les guichets des affaires étudiantes sont là pour aider les étudiants dans leurs démarches administratives liées à la vie étudiante.</Text>
            </View>

             <View style={styles.section}>
            <Text style={styles.sectionTitle}><FontAwesome5 name="exclamation-circle" size={15} style={styles.icon} />Bureau de Réclamations</Text>
            <Text style={styles.sectionText}>Le bureau de réclamations est disponible pour toute réclamation ou suggestion concernant la vie universitaire.</Text>
            </View>

            <View style={styles.section}>
            <Text style={styles.sectionTitle}><FontAwesome5 name="user-tie" size={15} style={styles.icon} />Bureau du Doyen</Text>
            <Text style={styles.sectionText}>Le bureau du doyen est responsable de la gestion administrative et pédagogique de la faculté</Text>
            </View>
            
            <View style={styles.section}>
            <Text style={styles.sectionTitle}><FontAwesome5 name="user-secret" size={15} style={styles.icon} />Bureau du Vice-Doyen</Text>
            <Text style={styles.sectionText}>Le bureau du vice-doyen assiste le doyen dans ses fonctions et le remplace en son absence.</Text>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
       //justifyContent: "center",
       //alignItems: "center",
        backgroundColor: "#F8EFE0",
        padding:15
    },
    title: {
        fontSize: 22,
        marginTop: 15,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#1D828E",
        textAlign: 'center',
    },
    section:{ 
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#E2AB2D",
        paddingBottom: 20,
    },
    sectionTitle: {
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 10,
        marginLeft: 7,
        color: "#003CA6",
    },
    sectionText : { // a revoir
        fontSize: 16,
        color: "#140F1F",
        marginLeft: 7,
    },
    icon: { 
       // color: "#003CA6",
       color : '#E2AB2D',
       marginRight: 10,
    },
});

export default AdministrationScreen;
