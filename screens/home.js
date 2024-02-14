import React from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';




const First = [
  { id: '1', title: 'Biriyani', image: require('../Assets/biriyani.jpg') ,screen: 'biriyanilist'},
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

const Second = [
  { id: '1', title: 'Pankaj' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
  { id: '6', title: 'Item 6' },
  { id: '7', title: 'Item 1' },
  { id: '8', title: 'Item 2' },
  { id: '9', title: 'Item 3' },
  { id: '10', title: 'Item 1' },
  { id: '11', title: 'Item 2' },
  { id: '12', title: 'Item 3' },
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
      <ScrollView style={styles.scroll}>
        <TextInput style={styles.searchbar} placeholder="Type here...." />

        <View style={styles.ad}>
          <ImageBackground source={require('../Assets/adimg.png')} resizeMode="cover" style={styles.adimg}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
            <Text style={styles.adtext}>Tasty's Top Dessert Recipes</Text>
          </ImageBackground>
        </View>

        <Text style={styles.text}>Categories</Text>
        <TouchableOpacity onPress={handleViewAllPress}>
          <Text style={styles.text2}>View all</Text>
        </TouchableOpacity>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FlatList
            data={First}
            keyExtractor={item => item.id}
            horizontal
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handlePress(item.screen)}>
                <View style={styles.top1}>
                  <View style={styles.circle}>
                    <Image source={item.image} style={styles.images} />
                  </View>
                  <Text style={styles.toptext1}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </ScrollView>

        <Text style={styles.text1}>Popular Now</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.box}>
            <Image source={require('../Assets/item1.jpg')} style={styles.item1} />
          </View>
          <View style={styles.box}>
            <Image source={require('../Assets/item2.jpg')} style={styles.item2} />
            <Text>Item 2</Text>
          </View>
          <View style={styles.box}>
            <Image source={require('../Assets/item3.jpg')} style={styles.item3} />
            <Text>Item 3</Text>
          </View>
        </ScrollView>
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
    marginTop:40
  },
  ad: {
    width: '90%',
    marginLeft: 20,
    height: 150,
  },
  text2: {
    fontSize: 12,
    textAlign: 'right',
    paddingRight: 15,
    paddingBottom: 10
  },
  circle: {
    shadowOpacity: 0.3,
    shadowRadius: 3,
    width: 40,
    height: 40,
    borderRadius: 40,
    marginTop: 10,
    marginLeft: 5
  },
  toptext1: {
    fontSize: 12,
    color: "black",
    marginLeft: 50,
    fontWeight: '500',
    bottom: 24
  },
  images: {
    width: 40,
    height: 40,
    borderRadius: 40
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
  text: {
    color: "black",
    fontSize: 18,
    fontWeight: '700',
    padding: 25,
    paddingBottom: 10,
    paddingTop: 30
  },
  text1: {
    color: "black",
    fontSize: 18,
    fontWeight: '700',
    paddingTop: 25,
    marginLeft: 25,
  },
  adtext: {
    color: 'white',
    fontWeight: '300',
    fontSize: 16,
    paddingLeft: 120,
    bottom: 20
  },
  top1: {
    width: 100,
    height: 60,
    borderRadius: 30,
    marginLeft: 20,
    backgroundColor: 'white',
    shadowOffset: { width: -2, height: 4 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  box: {
    width: 200,
    height: 290,
    margin: 10,
    borderRadius: 20,
    marginTop: 30,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item1: {
    width: 200,
    height: 290,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: -2, height: 4 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  item2: {
    width: 200,
    height: 290,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item3: {
    width: 200,
    height: 290,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
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
});

export default HomePage;
