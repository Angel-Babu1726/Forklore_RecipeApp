import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const RegisterScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ImageBackground resizeMode="cover" style={styles.img} source={require('./assets/register.jpg')} > */}
       
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Username"
          />
          <TextInput
            style={styles.input}
            placeholder="Email Id"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
          />
          <Text style={styles.pwd}>Forgot your Password?</Text>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Register</Text>
            
          </TouchableOpacity>
        </View>
        <Text style={styles.login} onPress={() => navigation.navigate('Login')}>Already have an Account?      Login</Text>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: "crimson",
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  pwd: {
    color: "crimson",
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingLeft: 150,
    textAlign: 'right',
  },
  card: {
    
    opacity:0.5,
    backgroundColor: 'gray',
    borderRadius: 60,
    width: '90%',
    height: 500,
    elevation: 10,
    marginBottom: 30,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center', 

  },
  input: {
    height: 55,
    borderColor: 'crimson',
    borderRadius: 20,
    borderWidth: 3,
    marginTop: 20,
    marginBottom: 16,
    padding: 20,
    width: '90%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    marginTop: 10, 
    backgroundColor: 'crimson',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    width: '90%',
    height: 50,
    justifyContent: 'center',
  },
  login:{
    color: "crimson",
    fontSize: 12,
    fontWeight: 'bold',
    textAlign:'center',

    
   
 },
});

export default RegisterScreen;