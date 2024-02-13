import React from 'react';
import { View, ScrollView, Text, StyleSheet,TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FavouritesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Favourites  </Text>
      
      
      <ScrollView horizontal={false}
       showsHorizontalScrollIndicator={false}>
        
        <View style={styles.toppicks} >
        <Image source={require('../Assets/item1.jpg')} style={styles.item1} ></Image>
         
        </View>
        <View style={styles.toppicks} >
         
        <Image source={require('../Assets/item2.jpg')} style={styles.item1} ></Image>
         </View>
         <View style={styles.toppicks} >
         
         <Image source={require('../Assets/item3.jpg')} style={styles.item1} ></Image>
         </View>
         <View style={styles.toppicks} >
         
         <Image source={require('../Assets/pancakes.jpg')} style={styles.item1} ></Image>
         </View>
         
        
       
      </ScrollView>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  
  heading:{

    color:"black",
    textAlign:"left",
   
    paddingLeft:20,
  fontWeight:'200',
    fontSize:30,
    marginBottom:20,
    marginTop:40
  },
  
  toppicks:{
    width:350,
    height:150,
     
    borderRadius:40,
   
    marginTop:10,
    marginLeft:10,
   marginBottom:20,
    backgroundColor:'grey',
    
   
  },
  item1:{
    width: 350, 
    height: 150, 
    borderRadius:40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  
});

export default FavouritesScreen;