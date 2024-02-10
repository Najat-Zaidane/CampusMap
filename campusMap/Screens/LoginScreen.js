import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import CustomAlert from '../components/CustomAlert';
import  Text  from '@kaloraat/react-native-text';
import Logo from './Logo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'




const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorVisible, setErrorVisible] = useState(false); // Pour contrôler la visibilité de l'alerte

  //if  user is already logged in then navigate to home screen directly
  // if (getAuth().currentUser) {
  //   navigation.navigate("Home");
  //   }

const handleLogin = () => {
const auth = getAuth();
signInWithEmailAndPassword(auth, email, password).then(  (userCredential) => {
    navigation.navigate('Home');
    // Signed in 
    const user = userCredential.user; // userCredential est la reponse ( info)  de l'utilisateur connecté
    //comment enregister les infos dans le memoire de l'appli 
           })

  //error case 
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   // console.log(`ERREUR : ${errorMessage}`);
   
    //Display a styled message error  on the view 
    setErrorVisible(true);
  });
  };

     return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
         
       <Logo />

       {/* title */}
      <Text title center style={styles.title}>Connexion</Text>
      <View style={{marginHorizontal : 24}}>
     {/* e-mail input */}
      <TextInput
        style={styles.input}
        placeholder="Adresse e-mail"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      
      {/* pwd input */}
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry // so the pwd isn't visible
        onChangeText={setPassword}
        value={password}
      />

      {/*  submit button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
      <Text bold medium center style={styles.loginButtonText}>Se connecter</Text>
      </TouchableOpacity>

      {/* Affichez CustomAlert si errorVisible est vrai */}
      <CustomAlert visible={errorVisible} onClose={() => setErrorVisible(false)} />
       <Text small center >Vous n'avez pas de compte ?
         <Text color="#ff2222" onPress= { () => navigation.navigate("Sign")} > Créez-en un </Text>  {/* add the onPress method  in the text*/}
       </Text>
        {/* is the password is forgotten */}
        <Text small center color="#003CA6" style={{marginTop:10}} >Mot de passe oublié ?</Text>
{/* add the onPress method  in the text*/}
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
     color : "#003CA6" ,
  },
  input: {
    //height: 50,
    borderBottomWidth: 1.1, 
    //borderBottomColor: '#1D1D1D',
    borderBottomColor:'#8e93a1',
    marginBottom: 18,
    padding: 20,
    fontSize : 18, // a revoir 
    color: '#1D1D1D',
  },
  loginButton: {
    backgroundColor: '#003CA6',
    padding: 12,
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom : 20,
    height : 50
  },
  loginButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default LoginScreen;
