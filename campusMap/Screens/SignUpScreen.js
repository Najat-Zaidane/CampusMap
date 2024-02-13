import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { getAuth,auth,createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Logo from '../components/Logo';
import Text from '@kaloraat/react-native-text';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomAlert2 from '../components/CustomAlert2';



const SignUpScreen = ({ navigation }) => {
  
  const [fname,setFname]= useState("") ; //prenom
  const [lname,setLname] = useState("");  //nom
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);

  const handleSignUp = () => { 

    // Si l'utilisateur n'a pas rempli tous les champs

   if (!fname || !lname || !email || !password || !confirmPassword) {
     return setErrorVisible(true);
     } 

    if (password !== confirmPassword) {
      return setErrorVisible(true);
      
    }
    const auth = getAuth();
    // Create user account
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate('Home');
        // Signed in 
         const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
         //console.log("erruuuuuuuuuuuuuur est  :", error.message); 
        //Display a styled message error  on the view
        setErrorVisible(true);
      });
    };


    return (
        <KeyboardAwareScrollView  contentContainerStyle={styles.container}>

        <Logo/>
    
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
         <CustomAlert2 visible={errorVisible} onClose={() => setErrorVisible(false)} />
   
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
  });

export default SignUpScreen;