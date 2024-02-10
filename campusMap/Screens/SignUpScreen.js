import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { getAuth,auth,createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Logo from './Logo';
import Text from '@kaloraat/react-native-text';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



const SignUpScreen = ({ navigation }) => {
  
  const [fname,setFname]= useState("") ; //prenom
  const [lname,setLname] = useState("");  //nom
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);

  const handleSignUp = () => {

    //if the user didn't fill all the informations 
    if (!fname || !lname || !email || !password || !confirmPassword ) {
         return setErrorVisible(true) ; }

    //checking if the two passwords are identical

    else if (password !== confirmPassword) {
     // alert('Les mots de passes ne sont pas identiques');
      return setErrorVisible(true);
      }

    else{
    //creating a new user with firebase authentication
       
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // get the created user 
        const user = userCredential.user;
        //update the user profil with the name and the lastname
        updateProfile(user, { displayName: fname +" "+ lname})
        .then(() => { 
          navigation.navigate('Home');
              })
      .catch((error) => {
        setErrorVisible(true);
      });
    })
    .catch((error) => {
      setErrorVisible(true);
    });
} 
  }; 
    return (
        <KeyboardAwareScrollView  contentContainerStyle={styles.container}>

          <Logo />
    
          <Text title center style={styles.title}>Créer un compte</Text>
          <View style={{ marginHorizontal: 24 }}>
            {/* nom */}
            <TextInput 
            style={styles.input}
            placeholder='Nom'
            value={lname}
            onChangeText={setLname}
            />
            {/* prenom */}
            <TextInput 
            style={styles.input}
            placeholder='Prénom'
            value={fname}
            onChangeText={setFname}
            />
            <TextInput
              style={styles.input}
              placeholder="Adresse e-mail"
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
            />
    
            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              secureTextEntry
              onChangeText={setPassword}
              value={password}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirmez le mot de passe"
              secureTextEntry
              onChangeText={setConfirmPassword}
              value={confirmPassword}
            />
    
            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
              <Text bold medium center style={styles.signUpButtonText}>S'inscrire</Text>
            </TouchableOpacity>

            <Text center >
              Vous avez déjà un compte ?
              <Text color="#ff2222" onPress={() => navigation.navigate('Login')}> Connectez vous !</Text>
            </Text> 
    
           
         {/* Affichez CustomAlert si errorVisible est vrai */}
            {errorVisible && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorMessage}>Erreur lors de la création du compte. Veuillez réessayer.</Text>
              </View>
            )}

          </View>
        </KeyboardAwareScrollView>
      );
    };


const styles = StyleSheet.create({
    container: {
      backgroundColor: "#F8EFE0",
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: "#003CA6",
      marginBottom: 12,
      marginTop : -5,
    },
    input: {
      borderBottomWidth: 1.1,
      borderBottomColor: '#8e93a1',
      marginBottom: 12,
      padding: 13, 
      fontSize: 18,
      color: '#1D1D1D',
     // textAlign: 'center',
    },
    signUpButton: {
      backgroundColor: '#003CA6',
      borderRadius: 30,
      justifyContent: 'center',
      marginBottom: 20,
      marginTop:15,
      height: 50,
    },
    signUpButtonText: {
      color: '#FFFFFF',
      textAlign: 'center',
    },
    errorContainer: {
      backgroundColor: '#FFC0CB',
      padding: 12,
      borderRadius: 8,
      marginTop: 8,
    },
    errorMessage: {
      color: '#FF0000',
      textAlign: 'center',
    },
  });

export default SignUpScreen;