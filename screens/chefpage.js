import React from 'react';
import { View, FlatList, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const First = [
    { id: '1', title: 'Thomas Keller', image: require('../Assets/thomasimg.jpeg'), screen: 'thomasscreen' },
    { id: '2', title: 'Vikash Khanna', image: require('../Assets/vikaskhanna.jpeg') },
    { id: '3', title: 'Chef Pillai', image: require('../Assets/chefpillaiimg.jpeg') },
    { id: '4', title: 'Pankaja Bhadouria', image: require('../Assets/pankaja.jpeg') },
    { id: '5', title: 'Garima Arora', image: require('../Assets/Garima-Aroraimg.jpeg') },
    { id: '6', title: 'Sanjeev Kapoor', image: require('../Assets/sanjeevkapoor.jpeg') },
    { id: '7', title: 'Manet Chauhan', image: require('../Assets/manetimage.jpeg') },
    { id: '8', title: 'Madhur Jaffrey', image: require('../Assets/madhurimg.jpeg') },
    { id: '9', title: 'Anne Barrell', image: require('../Assets/barrellimg.jpeg') },
    { id: '10', title: 'Gary Mehigan', image: require('../Assets/gariimg.jpeg') },

];
const Second = [
    { id: '1', title: 'Anne Barrell', image: require('../Assets/barrellimg.jpeg') },
    { id: '2', title: 'Antonia Lofasa', image: require('../Assets/antoniaimg.jpeg') },
    { id: '3', title: 'Gary Mehigan', image: require('../Assets/gariimg.jpeg') },
    { id: '4', title: 'Manet Chauhan', image: require('../Assets/manetimage.jpeg') },
    { id: '5', title: 'Garima Arora', image: require('../Assets/Garima-Aroraimg.jpeg') },
    { id: '6', title: 'Aarti Sequeira', image: require('../Assets/aartiimg.jpeg') },
    { id: '7', title: 'Rachael Ray', image: require('../Assets/rachaelimg.jpeg') },
    { id: '8', title: 'Madhur Jaffrey', image: require('../Assets/madhurimg.jpeg') },
    { id: '9', title: 'Thomas Keller', image: require('../Assets/thomasimg.jpeg') },
    { id: '10', title: 'Chef Pillai', image: require('../Assets/chefpillaiimg.jpeg') },
];

const ChefScreen = ({navigation}) => {

   
    const chefhandlePress = (screen) => {
        navigation.navigate(screen);
      };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Discover</Text>
            <Text style={styles.text1}> Recommended for you</Text>
            <FlatList
                data={First}
                keyExtractor={item => item.id}
                horizontal={true}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => chefhandlePress(item.screen)}
                   
                    >
                        <View style={styles.box}>
                            <ImageBackground source={item.image} style={styles.images} >
                                <Text style={styles.chef1}>{item.title}</Text>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                )}
            />
            <Text style={styles.text1}> Trending</Text>
            <FlatList
                data={Second}
                keyExtractor={item => item.id}
                horizontal={true}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => chefhandlePress(item.screen)}>
                        <View style={styles.box}>
                            <ImageBackground source={item.image} style={styles.images} >
                                <Text style={styles.chef1}>{item.title}</Text>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
   
    text1: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
        paddingTop: 10,
        marginLeft: 20,
    },
    heading: {
        color: 'black',
        fontSize: 28,
        fontWeight: '200',
        marginBottom: 10,
        marginLeft: 20,
       
        marginTop:40
    },
    chef1: {
        fontSize: 16,
        color: 'white',
        fontWeight: '500',
        paddingTop: 170,
        paddingLeft: 10,
        textAlign: 'justify'
    },
    box: {
        width: 150,
        height: 200,
        margin: 15,
        
        shadowOffset: { width: -2, height: 4 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
         borderRadius:60
       
    },
    images: {
        width: 150,
        height: 200,
        borderRadius:60
       
    },
});

export default ChefScreen;
