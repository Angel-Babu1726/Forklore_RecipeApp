import React from "react";
import { Image, ImageBackground, StyleSheet,Text,TouchableOpacity } from "react-native";

import { SafeAreaView, } from "react-native-safe-area-context";

const SplashScreen = ({navigation}) => {
return(
    <SafeAreaView style={styles.container}>
    <ImageBackground style={styles.bgimg}resizeMode="cover" source ={require('../Assets/splashscreenimg.jpeg')}>
     
  
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('onboardingone')}>
           
            
          </TouchableOpacity>
        </ImageBackground>
        </SafeAreaView>
);
};
const styles= StyleSheet.create({
    container: {
        flex: 1,
      },
    bgimg:{
        
            flex: 1,
           
    },

   image:{
    height:100,
    width:100,
    alignItems:'center'
   },
   
  
  button: {
   
    backgroundColor: 'lightgrey',
    padding: 13,
    borderRadius: 50,
    alignItems: 'center',
    width: '25%',
    height: 50,
    marginLeft:300,
    marginTop:340
   
  },
   
})
export default SplashScreen;