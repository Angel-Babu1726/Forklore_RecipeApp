import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ForgotPassword = ({}) => {
 
  const btn = () => {

    alert('Invalid data');
};

  return (
    
    <SafeAreaView style={styles.container}>
        {/* <Image style={styles.img} source={require('./assets/forgot.jpg')} ></Image> */}
      <Text style={styles.title}>Forgot Your Password ?</Text>
      <Text style={styles.sent}>Enter your phone number below to receive your password reset instruction</Text>


      
      <TextInput
        style={styles.input}
        placeholder="Phonenumber"
        
        />

       
       <TouchableOpacity style={styles.button} onPress={btn} >
        <Text style={{fontSize:20,alignItems:'center',marginTop:5,fontWeight:'500'}}>Recover Password 


        </Text>
       
       
       </TouchableOpacity>
    
      

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center', 
  },
 img:{
  
  opacity:10,
  height:200,
  width:200,
 },
  
  title: {
    paddingTop:50,
    color: "crimson",
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center', 
  },
  sent: {
    color: "black",
    fontSize: 20,
  
    marginBottom: 20,
    textAlign: 'center', 
  },
  input: {
    height: 55,
    borderColor: 'crimson',
    borderRadius: 20,
    borderWidth: 3,
    marginBottom: 16,
    padding: 20,
    width: '80%', 

  },
  button: {
    marginTop:10,
    height: 55,
    alignItems: 'center',
    backgroundColor: 'crimson',
    borderRadius: 20,
    padding: 7,
    width: '80%', 
 },
 pwd:{
    color: "black",
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingLeft: 150,
    textAlign: 'right', 
 },
 login:{
    color: "black",
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'right', 
    paddingTop: 100,
 },

 
});

export default ForgotPassword;