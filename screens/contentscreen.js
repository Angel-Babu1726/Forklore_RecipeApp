import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ContentScreen = ({}) => {

  

  return (

    <SafeAreaView style={styles.container}>
       <ScrollView style={styles.scroll}>
      <Image source={require('./Assets/pancakes.jpg')} style={styles.image}></Image>
      <View style={styles.card1}>

        <Text style={styles.head}>Crepes with Strawberry {'\n'} and Hy</Text>
        <View style={styles.rating}>
          <Text style={styles.text}>4.5</Text></View>
         
         <View style={styles.box1}>
          
          <Text style={styles.boxtext}>35 {'\n'} min </Text>
          </View>
         
          <View style={styles.box2}>
          <Text style={styles.boxtext}>03 {'\n'} ser</Text></View>
          
          <View style={styles.box3}>
          <Text style={styles.boxtext}>103 {'\n'}cal</Text></View>
         
          <View style={styles.box4}>
          <Text style={styles.boxtext}>Easy</Text></View>
          
          <View style={styles.viewnew}>
          <Text style={styles.ingre}>Ingredients {'\n'} :
          hello guys welcome back to non other than show midukki</Text></View>
          
         
         



      </View>


      </ScrollView>
    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({

  container: {

    backgroundColor: "darkgray",
    flex: 1,

    alignItems: 'center',
  },
  card1: {

    backgroundColor: "white",

    borderRadius: 60,
   

    height: 570,
    
    width: 370,

  },
  rating:{
    marginLeft:280,
    backgroundColor:"crimson",
    width:80,
    height:30,
    top:-40,
    
    borderRadius:20,
    marginRight:20
  },
  text:{
    color:'white',
    fontSize:18,
    padding:15,
  },


  head: {
    paddingTop: 40,
   
    color: "black",
    fontSize: 20,
    paddingLeft:25,
    fontWeight: 'bold',


  },
  image: {

    width: 390,
    height: 250
  },
  

  box1:{
    backgroundColor:'crimson',
    width:60,
    height:90,
    borderRadius:30,
    top:-20,
    marginLeft:30
},
box2:{
  backgroundColor:'crimson',
  width:60,
  height:90,
  borderRadius:30,
  top:-110,
  marginLeft:110
},
box3:{
  backgroundColor:'crimson',
  width:60,
  height:90,
  borderRadius:30,
  top:-200,
  marginLeft:190
},
box4:{
  backgroundColor:'crimson',
  width:60,
  height:90,
  borderRadius:30,
  top:-290,
  marginLeft:270
},
boxtext:{
  color:'white',
  fontSize:14,
  marginTop:50,
  textAlign:'center',
  fontWeight:'bold'
},
ingre:{
  
  fontSize:15,
  
  textAlign:'center',
  fontWeight:'bold'
},
viewnew:{
  color:'white',
  
  
  
  
  marginTop:20,
  marginLeft:10

}


});

export default ContentScreen;

