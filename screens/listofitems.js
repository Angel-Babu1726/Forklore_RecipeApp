import React from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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

const ListOfItems = () => {

    const colors = ['#DAA9A9', '#CADAA9', '#C7ABAB', '#D2CB87', '#DD7C7C', '#d8bfd8', '#AAD7D9', '#bdb76b', '#FFC0D9', '#FFEEBB', '#d3d3d3'];

    const getColor = (index) => {
        return colors[index % colors.length];
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Categories</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <FlatList
                    data={First}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => handlePress(item)}>
                            <View style={[styles.box, { backgroundColor: getColor(index) }]}>

                                <View style={styles.container2}>
                                    <Text style={styles.head}>{item.title}</Text>
                                    <Text style={styles.subhead}>Biriyani is good for health</Text>
                                </View>

                                <View style={styles.circles}>
                                    <Image source={item.image} style={styles.images} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    heading: {
        color: "black",
        textAlign: "center",
        marginTop: 30,
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 30,
        marginTop:60
    },
    box: {
        width: 350,
        height: 110,
        borderRadius: 20,
        marginBottom: 20,
        marginLeft: 16,
        shadowOpacity: 0.3,
        shadowRadius: 3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    circles: {
        shadowOpacity: 0.3,
        shadowRadius: 3,
        width: 80,
        height: 80,
        borderRadius: 40,
        overflow: 'hidden',
        marginTop: 10,
        marginRight: 20
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
    subhead: {
        fontSize: 15,
        fontWeight: '300',
    },
    images: {
        width: '100%',
        height: '100%',
    }
});

export default ListOfItems;
