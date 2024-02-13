import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,Image } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';


const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
     
       
        <Text style={styles.title}>Sign In</Text>
        
          <TextInput
            style={styles.input}
            placeholder="Username"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
          />
          <Text style={styles.pwd} onPress={() => navigation.navigate('Forgot')}>Forgot your Password?</Text>
          <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={() => navigation.navigate('MyTabs')}>Sign In</Text>
          </TouchableOpacity>
       
        <Text style={styles.register} onPress={() => navigation.navigate('Register')}>Don't have an Account?      Register</Text>
        <Image source={require('../Assets/pizza.png')} style={styles.img}></Image>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"mintcream",
   

  },
 
  title: {
    color: "black",
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft:40,
    marginTop:50
  },
  pwd: {
    color: "grey",
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingLeft: 150,
    paddingRight:20,
    textAlign: 'right',
  },
  
  input: {
    height: 55,
   backgroundColor:"lightgrey",
    borderRadius: 20,
   
    
    margin:10,
    marginLeft:40,
    padding: 20,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    marginTop: 20, 
    backgroundColor: 'crimson',
    padding: 10,
    borderRadius: 50,
    margin:20,
    alignItems: 'center',
    width: '80%',
    marginLeft:40,
    height: 55,
    justifyContent: 'center',
  },
  register:{
    color: "grey",
    fontSize: 12,
    fontWeight: 'bold',
    textAlign:'center',

    
   
 },
 img:{
  marginLeft:100,
  marginTop:40,
  
  width:300,

  height:150
 }
//  img:{
//   marginLeft:200,
//   marginTop:20,
//   borderTopLeftRadius:30,
//   borderTopRightRadius:40,
//   width:200,
//   borderRadius:70,
//   height:150
//  }
});

export default LoginScreen;