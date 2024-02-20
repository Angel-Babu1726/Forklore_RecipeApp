import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const dishes = [
    { id: '1', title: 'Noodles', image: require('../Assets/pizza.jpg')},
    { id: '2', title: 'Rolls', image: require('../Assets/pizza.jpg') },
    { id: '3', title: 'Pizza',  },
    { id: '4', title: 'Dosa', },
    { id: '5', title: 'Chicken',},
    { id: '6', title: 'Rolls' },
    { id: '7', title: 'Halwa', },
    { id: '8', title: 'Payasam', },
    { id: '9', title: 'Shake',},
    { id: '10', title: 'Halwa',  },
    
  ];
  
const ThomasSignatureDishes = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Signature Dishes  </Text>
      
      
      <ScrollView vertical showsHorizontalScrollIndicator={false}>
          {dishes.map(item => (
            <View key={item.id} style={styles.itembox}>
                <View style={styles.itemimage}>
                <Image source={item.image} style={styles.image} >
               
               </Image>
                </View>
              
              <Text style={styles.populartext}>{item.title}</Text>


            </View>
          ))}
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
  fontWeight:'300',
    fontSize:30,
    marginBottom:60,
    marginTop:40,
  },
 itembox:{
width:340,
height:150,
backgroundColor:'white',
marginBottom:22,
marginLeft:17,
shadowOpacity:0.5,
shadowRadius:5,
borderRadius:20

 },
 itemimage:{
   
    width:140,
    height:150,
    borderRadius:16

 },
 image:{
   width:'100%',
   height:'100%',
   borderRadius:16
 },
 title:{}
  
});

export default ThomasSignatureDishes;