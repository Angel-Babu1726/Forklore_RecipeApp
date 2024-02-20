import React, { useState } from 'react';
import { StyleSheet, Image, ImageBackground, Text, View, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const First = [
    { id: '1', title: 'Kolkata Biriyani', image: require('../Assets/biriyani.jpg'), screen: 'contentscreen' },
    { id: '2', title: 'Malabar Biryani', image: require('../Assets/soup.jpg'), screen: 'contentscreen' },
    { id: '3', title: 'Hyderabadi Biryani', image: require('../Assets/pizza.jpg'), screen: 'contentscreen' },
    { id: '4', title: 'Bhatkali Biryani', image: require('../Assets/dosa.jpg'), screen: 'contentscreen' },
    { id: '5', title: 'Ambur style Biryani', image: require('../Assets/chicken.jpg'), screen: 'contentscreen' },
    { id: '6', title: 'Egg Roast Biriyani', image: require('../Assets/rolls.jpg'), screen: 'contentscreen' },
    { id: '7', title: 'Veg Biriyani', image: require('../Assets/cake.jpg'), screen: 'contentscreen' },
    { id: '8', title: 'Lucknowi Biryani', image: require('../Assets/payasam.jpeg'), screen: 'contentscreen' },
];

const BiriyaniList = ({ navigation }) => {
    const handlePress = (screen) => {
        navigation.navigate(screen);
    };

    return (

        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../Assets/ellipse.jpg')} style={styles.ellipse}>
                <View style={styles.image}>
                    <Text style={styles.head}>Biriyani</Text>
                    <Image source={require('../Assets/biriyani.jpg')} style={styles.biriyani} />
                </View>
            </ImageBackground>

            <FlatList
                data={First}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePress(item.screen)}>
                        <View style={styles.box}>
                            <View style={styles.container2}>
                                <Text style={styles.texthead}>{item.title}</Text>
                            </View>
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
        backgroundColor: 'white'
    },
    ellipse: {
        width: '100%',
        height: 340,
    },
    head: {
        color: 'white',
        fontWeight: '600',
        fontSize: 24,
        paddingLeft: 90,
    },
    image: {
        width: 220,
        height: 230,
        borderRadius: 230,
        borderTopRightRadius: 190,
        borderBottomRightRadius: 180,
        borderBottomLeftRadius: 160,
        borderTopLeftRadius: 60,
    },
    biriyani: {
        width: 220,
        height: 230,
        borderRadius: 230,
        marginTop: 22,
        borderTopRightRadius: 190,
        borderBottomRightRadius: 180,
        borderBottomLeftRadius: 160,
        borderTopLeftRadius: 60,
    },
    container2: {
        flex: 1,
        marginLeft: 30,
    },
    texthead: {
        color: 'black',
        fontWeight: '700',
        fontSize: 16,
        bottom: 10
    },
    box: {
        width: '90%', 
        height: 75,
        borderRadius: 20,
        marginBottom: 20,
        marginLeft: '5%', 
        shadowOpacity: 0.3,
        shadowRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#CADAA9'
    },
});

export default BiriyaniList;
