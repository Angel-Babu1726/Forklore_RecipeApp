import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ContentScreen = ({ }) => {
 





  return (

    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Image source={require('../Assets/biriyani.jpg')} style={styles.image}></Image>
        <View style={styles.card1}>

          <Text style={styles.head}>Kolkata Biriyani</Text>
          <View style={styles.rating}
          >
            {/* <Image source ={require('../Assets/Star.jpg')} style={styles.icons}></Image> */}
            <Text style={styles.text}>4.5</Text></View>
<View style={styles.boxarray}>
         
          <View style={styles.box}>

            <Text style={styles.boxtext}>35 {'\n'} min </Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.boxtext}>06 {'\n'} ser</Text></View>

          <View style={styles.box}>
            <Text style={styles.boxtext}>103 {'\n'}cal</Text></View>

          <View style={styles.box}>
            <Text style={styles.boxtext}>Easy</Text>
            </View>
           </View>
          
            <Text style={styles.subhead}>Ingredients 


              </Text>
              <Text style={styles.subtext}> <Text style={styles.subtext}>1 kg mutton (large pieces of ~100g each)
              <Text style={styles.bullet}>•</Text>
      <Text style={styles.item}>5 whole potatoes (the starchy kind 80g each)</Text>
      <Text style={styles.bullet}>•</Text>
      <Text style={styles.item}>Second item</Text>
      <Text style={styles.bullet}>•</Text>
      <Text style={styles.item}>Third item</Text>{'\n'}
                500 g basmati rice (aged, long-grained, non-parboiled) {'\n'}
                1.25 g (6 pcs) green cardamom{'\n'}
0.75 g (1 pc) black cardamom{'\n'}
1.5 g (¾ tsp) cloves{'\n'}
0.5 g (3 cm stick) cinnamon{'\n'}
1.2 g (½ pc) nutmeg{'\n'}
1.75 g (2 pcs) mace{'\n'}
2 g shahi jeera{'\n'}
2 g kabab chini{'\n'}
1 g (½ tsp) fennel seeds{'\n'}
3 g white pepper (whole){'\n'}
1.25 g (½ tsp) black pepper (whole)

            
</Text> 

            
</Text>   






              </View>



      </ScrollView>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({

  container: {

    flex: 1,

   
  },
  card1: {

    backgroundColor: "white",




    height: 570,

    width: 370,

  },
  rating: {
    marginLeft: 270,
    backgroundColor: "crimson",
    width: 60,
    height: 30,
    bottom: 40,

    borderRadius: 20,

  },
  text: {
    color: 'white',
    fontSize: 15,
    paddingLeft: 30,
    top: 6
  },


  head: {
    paddingTop: 40,

    color: "black",
    fontSize: 20,
    paddingLeft: 25,
    fontWeight: 'bold',


  },
  image: {

    width: 390,
    height: 220
  },


  box: {
    backgroundColor: 'crimson',
    width: 50,
    height: 80,
    borderRadius: 30,
    
    marginLeft: 35,
   
  },
 
  boxtext: {
    color: 'white',
    fontSize: 14,
    marginTop: 38,
    textAlign: 'center',
    fontWeight: 'bold'
  },
 
 
  subhead:{
    fontSize:18,
    paddingLeft:30,
    paddingTop:20,
    fontWeight:'500'
  },
    
    subtext:{
      fontSize:16,
      paddingLeft:30,
      paddingTop:20
     
      
  
   
 },
 boxarray:{
  flexDirection:'row'
 }

});

export default ContentScreen;

