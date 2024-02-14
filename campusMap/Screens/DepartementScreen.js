import React from "react";
import { View,ScrollView, Text, StyleSheet } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const  DepartementScreen = () => {
    return (
        <ScrollView style={styles.container} >

            <Text style={styles.title}>Départements</Text>

            <View style={styles.section}>
            <Text style={styles.sectionTitle}><FontAwesome5 name="laptop" size={15} style={styles.icon} /> Département d'Informatique </Text>
            <Text style={styles.sectionText}>Le département d'informatique propose des formations en informatique théorique et appliquée.</Text>
            </View>


            <View style={styles.section}>
            <Text style={styles.sectionTitle}><FontAwesome5 name="calculator" size={15} style={styles.icon} /> Département de Mathématiques</Text>
            <Text style={styles.sectionText}>Le département de mathématiques propose des formations en mathématiques pures et appliquées.</Text>
            </View>

             <View style={styles.section}>
            <Text style={styles.sectionTitle}><FontAwesome5 name="flask" size={15} style={styles.icon} /> Département de Physique</Text>
            <Text style={styles.sectionText}>Le département de physique propose des formations en physique fondamentale et expérimentale.</Text>
            </View>

            <View style={styles.section}>
            <Text style={styles.sectionTitle}><FontAwesome5 name="atom" size={15} style={styles.icon} /> Département de Chimie</Text>
            <Text style={styles.sectionText}>Le département de chimie propose des formations en chimie générale et chimie appliquée.</Text>
            </View>
            
            <View style={styles.section}>
            <Text style={styles.sectionTitle}><FontAwesome5 name="globe" size={15} style={styles.icon} /> Département de Géologie</Text>
            <Text style={styles.sectionText}>Le département de géologie propose des formations en géologie et géosciences.</Text>
            </View>

            <View style={styles.section}>
            <Text style={styles.sectionTitle}><FontAwesome5 name="leaf" size={15} style={styles.icon} /> Département de Biologie</Text>
            <Text style={styles.sectionText}>Le département de biologie propose des formations en biologie cellulaire et moléculaire.</Text>
            </View>

            <View style={styles.section}>
            <Text style={styles.sectionTitle}><FontAwesome5 name="graduation-cap" size={15} style={styles.icon} /> Département Doctoral</Text>
            <Text style={styles.sectionText}>Le département doctoral propose des programmes de recherche avancée et de formation à la recherche.</Text>
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

export default DepartementScreen;
