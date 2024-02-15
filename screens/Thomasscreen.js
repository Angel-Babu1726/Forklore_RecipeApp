import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { SafeAreaView } from 'react-native-safe-area-context';

const ThomasScreen = ({ navigation }) => {



  return (

    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../Assets/mainthomasimg.webp')} style={styles.image}>
        <Text style={styles.head}>Thomas Keller</Text>
        <Text style={styles.subhead}>American chef and restaurateur
        </Text>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.btntext}>Explore


          </Text>


        </TouchableOpacity>

      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1

  },
  image: {
    width: '100%',
    height: '100%',


  },
  head: {
    color: 'black',
    fontSize: 32,
    fontWeight: '600',
    paddingTop: 520,
    paddingLeft: 20,

  },
  subhead: {
    paddingLeft: 30,
    fontSize: 16
  },
  button: {
    marginTop: 16,
    height: 55,
    alignItems: 'center',
    backgroundColor: 'crimson',
    borderRadius: 20,
    marginLeft: 280,
    width: '25%',
  },
  btntext: {
    color: 'white',
    padding: 18,

  }


});

export default ThomasScreen;