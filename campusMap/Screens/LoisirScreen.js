import React from "react";
import { View,ScrollView, Text, StyleSheet } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const  LoisirScreen = () => {
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.title}>Espace Loisirs</Text>

            <View style={styles.section}>
            <Text style={styles.sectionTitle}><FontAwesome5 name="book" size={15} style={styles.icon} /> Bibliothèque </Text>
            <Text style={styles.sectionText}>La bibliothèque est un lieu d'étude et de recherche doté d'une large collection de livres et de ressources documentaires.</Text>
            </View>


            <View style={styles.section}>
            <Text style={styles.sectionTitle}><FontAwesome5 name="chalkboard-teacher" size={15} style={styles.icon} /> Cours et Ateliers</Text>
            <Text style={styles.sectionText}>Des cours et ateliers sont proposés pour enrichir les connaissances des étudiants en dehors du programme académique.</Text>
            </View>

             <View style={styles.section}>
            <Text style={styles.sectionTitle}><FontAwesome5 name="utensils" size={15} style={styles.icon} /> Cafétéria Étudiants</Text>
            <Text style={styles.sectionText}>La cafétéria des étudiants propose une variété de repas et de boissons pour les étudiants.</Text>
            </View>

            <View style={styles.section}>
            <Text style={styles.sectionTitle}><FontAwesome5 name="coffee" size={15} style={styles.icon} /> Cafétéria Professeurs</Text>
            <Text style={styles.sectionText}>La cafétéria des professeurs propose un espace de détente pour les enseignants.</Text>
            </View>
            
            <View style={styles.section}>
            <Text style={styles.sectionTitle}><FontAwesome5 name="mosque" size={15} style={styles.icon} /> Mosquée</Text>
            <Text style={styles.sectionText}>La mosquée est un lieu de prière et de recueillement pour les membres de la communauté.</Text>
            </View>

            <View style={styles.section}>
            <Text style={styles.sectionTitle}><FontAwesome5 name="restroom" size={15} style={styles.icon} /> Toilettes</Text>
            <Text style={styles.sectionText}>Des toilettes sont disponibles sur le campus pour les étudiants et le personnel.</Text>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    sectionText : {
        fontSize: 16,
        color: "#140F1F",
        marginLeft: 7,
    },
    icon: { 
       color : '#E2AB2D',
       marginRight: 10,
    },
});

export default LoisirScreen;
