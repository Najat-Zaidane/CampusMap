import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import  Text  from '@kaloraat/react-native-text';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import CustomAlert from '../components/CustomAlert';

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
    //Display a styled message error  on the view 
    setErrorVisible(true);
  });
  };

     return (
    <View style={styles.container}>
       {/* title */}
      <Text title center style={styles.title}>Connexion</Text>
      <View style={{marginHorizontal : 24}}>
     {/* e-mail input */}
      <TextInput
        style={styles.input}
        placeholder="Adresse e-mail"
        onChangeText={setEmail}
        value={email}
      />
      {/* pwd input */}
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      {/*  submit button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Se connecter</Text>
      </TouchableOpacity>

      {/* Affichez CustomAlert si errorVisible est vrai */}
      <CustomAlert visible={errorVisible} onClose={() => setErrorVisible(false)} />

      </View>
    </View>

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
    width: '90%',
    height: 50,
    borderBottomWidth: 1.1, 
    borderBottomColor:'#8e93a1',
    marginBottom: 20,
    padding: 20,
  },
  loginButton: {
    backgroundColor: '#003CA6',
    padding: 12,
    borderRadius: 15,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default LoginScreen;
