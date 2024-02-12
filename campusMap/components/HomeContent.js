//this component is used to create the home screen content  for the app
//it displays a list of items that can be clicked on and navigates to different pages based on what was clicked

import React from "react";
import { View, TouchableOpacity, StyleSheet, SafeAreaView ,ImageBackground } from "react-native";
import Text from '@kaloraat/react-native-text';
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

//this component  displays a single item on the home page
export const Section = ({sectionNameRoute,sectionName,source}) =>{
    const navigation = useNavigation();
return (
    <TouchableOpacity onPress={() => navigation.navigate(sectionNameRoute)}>
          <ImageBackground
          source={source}
          style={styles.sectionButton}
          resizeMode="cover" 
          >
          <Text style={styles.sectionButtonText}>{sectionName}</Text>
          <FontAwesome5 name="chevron-right" size={25} style={styles.icon}/>
          </ImageBackground>
        </TouchableOpacity>
);
};

const HomeContent = () => {

  return (
    <SafeAreaView style={styles.container}>

      {/* Conteneur pour le message et texte de bienvenue */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Explorez Notre Faculté</Text>
        <Text center style={styles.introText}>Découvrez notre faculté à travers nos différentes sections</Text>
      </View>
 
      {/* Conteneur pour les sections cliquables */}
      <View style={styles.sectionContainer}>
       <Section  sectionNameRoute='Administration' sectionName='Administration' source={require('../assets/fac1.jpeg')} />
        <Section  sectionNameRoute='Departments' sectionName='Départements' /> 
        <Section  sectionNameRoute='EspaceLoisirs' sectionName='Espace Loisirs' />
      </View>

      {/* Faculty presenation section */}

    </SafeAreaView>
  );
};

//Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8EFE0',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
    textTransform: 'uppercase',
  },
  introText: {
    fontSize: 18,
    textAlign: 'center',
    //color: '#', 
  },
  sectionContainer: {
    marginTop: 20,
  },
  sectionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8B73A', // i need a background image
    borderRadius: 22,
    marginBottom: 25,
    paddingVertical: 22, // Utilisation de padding vertical pour ajuster la hauteur
    paddingHorizontal: 75,
  },
  sectionButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 20,
    color: '#003CA6',
  },
icon: {
    color: '#003CA6',
  },
});

export default HomeContent;