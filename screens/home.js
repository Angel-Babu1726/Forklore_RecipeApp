import React from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const data = [
  { id: '1', title: 'Biriyani', image: require('../Assets/biriyani.jpg'), screen: 'biriyanilist' },
  { id: '2', title: 'Soup', image: require('../Assets/soup.jpg') },
  { id: '3', title: 'Pizza', image: require('../Assets/pizza.jpg') },
  { id: '4', title: 'Dosa', image: require('../Assets/dosa.jpg') },
  { id: '5', title: 'Chicken', image: require('../Assets/chicken.jpg') },
  { id: '6', title: 'Rolls', image: require('../Assets/rolls.jpg') },
  { id: '7', title: 'Cake', image: require('../Assets/cake.jpg') },
  { id: '8', title: 'Payasam', image: require('../Assets/payasam.jpeg') },
  { id: '9', title: 'Shake', image: require('../Assets/shake.jpeg') },
  { id: '10', title: 'Halwa', image: require('../Assets/halwa.jpg') },
  { id: '11', title: 'Noodles', image: require('../Assets/noodles.jpg') },
];

const PopularNow = [
  { id: '1', title: 'Noodles', image: require('../Assets/noodles.jpg') },
  { id: '2', title: 'Rolls', image: require('../Assets/rolls.jpg') },
  { id: '3', title: 'Pizza', image: require('../Assets/pizza.jpg') },
  { id: '4', title: 'Dosa', image: require('../Assets/dosa.jpg') },
  { id: '5', title: 'Chicken', image: require('../Assets/chicken.jpg') },
  { id: '6', title: 'Rolls', image: require('../Assets/rolls.jpg') },
  { id: '7', title: 'Halwa', image: require('../Assets/halwa.jpg') },
  { id: '8', title: 'Payasam', image: require('../Assets/payasam.jpeg') },
  { id: '9', title: 'Shake', image: require('../Assets/shake.jpeg') },
  { id: '10', title: 'Halwa', image: require('../Assets/halwa.jpg') },
  
];

const HomePage = ({ navigation }) => {
  const handleViewAllPress = () => {
    navigation.navigate('listofitems');
  };

  const handlePress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TextInput style={styles.searchbar} placeholder="Type here...." />

        <View style={styles.ad}>
          <ImageBackground source={require('../Assets/adimg.png')} resizeMode="cover" style={styles.adimg}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
            <Text style={styles.adtext}>Tasty's Top Dessert Recipes</Text>
          </ImageBackground>
        </View>

        {/* // Categories list */}

        <Text style={styles.heading}>Categories</Text>
        <TouchableOpacity onPress={handleViewAllPress}>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map(item => (
            <TouchableOpacity key={item.id} onPress={() => handlePress(item.screen)}>
              <View style={styles.categoryItem}>
                <Image source={item.image} style={styles.categoryImage} />
                <Text style={styles.categoryTitle}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Popular now list */}

        <Text style={styles.heading}>Popular Now</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {PopularNow.map(item => (
            <View key={item.id} style={styles.popularItem}>
              <ImageBackground source={item.image} style={styles.popularImage} >
                <Text style={styles.populartext}>{item.title}</Text>
              </ImageBackground>


            </View>
          ))}
        </ScrollView>


        <View style={styles.secad}>
          <ImageBackground source={require('../Assets/adimg.png')} resizeMode="cover" style={styles.adimg}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
            <Text style={styles.adtext}>Tasty's Top Dessert Recipes</Text>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  searchbar: {
    marginBottom: 30,
    height: 45,
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    marginLeft: 20,
    elevation: 20,
    padding: 15,
    width: '90%',
    marginTop: 40
  },
  ad: {
    width: '90%',
    marginLeft: 20,
    height: 150,
  },
  button: {
    marginTop: 110,
    marginLeft: 5,
    backgroundColor: 'crimson',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    width: '20%',
    height: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  adimg: {
    width: '100%',
    height: 160,
    borderRadius: 100,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  adtext: {
    color: 'white',
    fontWeight: '300',
    fontSize: 16,
    paddingLeft: 120,
    bottom: 20
  },
  heading: {
    color: "black",
    fontSize: 18,
    fontWeight: '700',
    padding: 25,
    paddingBottom: 10,
    paddingTop: 30
  },
  viewAllText: {
    fontSize: 12,
    textAlign: 'right',
    paddingRight: 15,
    paddingBottom: 10
  },
  categoryItem: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 20,
    backgroundColor: 'black',
    shadowOffset: { width: -2, height: 4 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  categoryTitle: {
    fontSize: 12,
    color: "white",
    fontWeight: '500',
    marginTop: 5
  },
  popularItem: {
    width: 200,
    height: 290,
    margin: 10,
    borderRadius: 20,
    marginLeft: 20,
    marginTop: 30

  },
  popularImage: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginBottom: 10,
  },
  populartext: {
    fontSize: 18,
    color: 'white',
    paddingLeft: 60,
    paddingTop: 170,
    fontWeight: '500',

  }
});

export default HomePage;
