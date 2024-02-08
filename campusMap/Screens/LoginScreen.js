import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  //if  user is already logged in then navigate to home screen directly
  // if (getAuth().currentUser) {
  //   navigation.navigate("Home");
  //   }


  const handleLogin = () => {


const auth = getAuth();
signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    navigation.navigate('Home');
    // Signed in 
    const user = userCredential.user; // userCredential est la reponse ( info)  de l'utilisateur connecté
    //comment enregister les infos dans le memoire de l'appli 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Connexion</Text>
      <TextInput
        style={styles.input}
        placeholder="Adresse e-mail"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default LoginScreen;
