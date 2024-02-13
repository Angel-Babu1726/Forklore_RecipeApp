import React from "react";
import { StyleSheet, Image, ImageBackground, Text, View,FlatList,TouchableOpacity} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const First = [
    { id: '1', title: 'Biriyani', image: require('../Assets/biriyani.jpg') },
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


  

    

    
const BiriyaniList = () => {
    return (
        <SafeAreaView style={styles.container}>

            <ImageBackground source={require('../Assets/ellipse.jpg')} style={styles.ellipse}>
                <View style={styles.image}>
                    <Text style={styles.head}>Biriyani</Text>
                    <Image source={require('../Assets/biriyani.jpg')} style={styles.biriyani}>

                    </Image>

                </View>

            </ImageBackground>
            <FlatList
                    data={First}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => handlePress(item)}>
                            <View style={styles.box}>

                                <View style={styles.container2}>
                                    <Text style={styles.head}>{item.title}</Text>
                                   
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
        width: 380,
        height: 340
    },
    head: {
        color: 'white',
        fontWeight: '600',
        fontSize: 24,
        paddingLeft:20

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
    head: {
        color: 'black',
        fontWeight: '700',
        fontSize: 16,
        bottom:10
    },
   
   
    box: {
        width: 350,
        height: 75,
        borderRadius: 20,
        marginBottom: 20,
        marginLeft: 16,
        shadowOpacity: 0.3,
        shadowRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'#CADAA9'
    },
});
export default BiriyaniList;