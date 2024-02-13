import React from "react";
import { Image, ImageBackground, StyleSheet,Text,TouchableOpacity,View } from "react-native";

import { SafeAreaView, } from "react-native-safe-area-context";

const OnboardingOne = ({navigation}) => {
return(
    <SafeAreaView style={styles.container}>
    <ImageBackground style={styles.bgimg}resizeMode="cover" source ={require('../Assets/onboarding1.jpeg')}>
     <Text style={styles.head}>Find !</Text>
     <Text style={styles.body}> The Chef In You </Text>
     <View style={styles.dot1}></View>
     <View style={styles.dot2}></View>
     <View style={styles.dot3}></View>
     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('onboardingtwo')}>
            <Text style={styles.buttonText} >start </Text>
            
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
            verticalAlign:'top'
           
    },
head:{
  fontSize:40,
  fontWeight:'800',
  paddingLeft:40,
  top:35

},
body:{
  fontSize:18,
  top:40,
  left:40,
  fontWeight:'100'

},
dot1:{
 marginLeft:45,
  top:55,
  width:15,
  height:15,
  borderRadius:20,
  backgroundColor:'crimson'
},
dot2:{
  marginLeft:70,
   top:40,
   width:15,
   height:15,
   borderRadius:20,
   backgroundColor:'lightgrey'
 },
 dot3:{
  marginLeft:95,
   top:25,
   width:15,
   height:15,
   borderRadius:20,
   backgroundColor:'lightgrey'
 },
   image:{
    height:100,
    width:100,
    alignItems:'center'
   },
   
   buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
  button: {
   
    backgroundColor: 'lightgrey',
    padding: 13,
    borderRadius: 50,
    alignItems: 'center',
    width: '25%',
    height: 50,
    marginLeft:300,
    marginTop:370
   
  },
   
})
export default OnboardingOne;