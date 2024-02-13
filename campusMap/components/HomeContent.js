//this component is used to create the home screen content  for the app
//it displays a list of items that can be clicked on and navigates to different pages based on what was clicked

import React from "react";
import { View, TouchableOpacity, StyleSheet, SafeAreaView ,ImageBackground, ScrollView,Text } from "react-native";

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
    <ScrollView contentContainerStyle={styles.container}>

      {/* Conteneur pour le message et texte de bienvenue */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Explorez Notre Faculté</Text>
        <Text center style={styles.introText}>Découvrez notre faculté à travers nos différentes sections</Text>
      </View>
 
      {/* Conteneur pour les sections cliquables */}
      <View style={styles.sectionContainer}>
       <Section  sectionNameRoute='Apropos' sectionName='A Propos' source={require('../assets/fac1.jpeg')} />
       <Section  sectionNameRoute='Administration' sectionName='Administration' source={require('../assets/fac2.jpg')} />
        <Section  sectionNameRoute='Departments' sectionName='Départements'  source={require('../assets/fac4.jpg')}/> 
        <Section  sectionNameRoute='EspaceLoisirs' sectionName='Espace Loisirs' source={require('../assets/fac5.jpg')}/>
      </View>

    </ScrollView>
  );
};

//Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8EFE0', 
    marginTop:10,
    marginBottom: 15
  },

  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop : 20
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'uppercase',
    color : "#1D828E",
  },
  introText: {
    fontSize: 17,
    textAlign: 'center',
    color: '#140F1F', 
  },
  sectionContainer: {
    marginTop: 15,
  },
  sectionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 22,
    marginBottom: 25,
    paddingVertical: 38, // ajuster la hauteur
    paddingHorizontal: 75,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  sectionButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 18,
  // color: '#FEAC5D',
    color: '#FFFFFF',
  
  },
icon: {
    color: '#FFFFFF',
    //color: '#FEAC5D',

  },
});

export default HomeContent;