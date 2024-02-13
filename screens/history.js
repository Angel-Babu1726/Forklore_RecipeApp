import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const callHistoryData = [
  { id: '1', caller: ' Abel', timestamp: '2024-01-24T10:30:00' },
  { id: '2', caller: 'Anandhu', timestamp: '2024-01-23T15:45:00' },
  { id: '3', caller: 'Jerin', timestamp: '2024-01-24T10:30:00' },
  { id: '4', caller: 'Arjun', timestamp: '2024-01-23T15:45:00' },
  { id: '5', caller: 'Amal', timestamp: '2024-01-24T10:30:00' },
  { id: '6', caller: 'Abinav', timestamp: '2024-01-23T15:45:00' },
 
];


const HistoryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Call History</Text>
      <FlatList
        data={callHistoryData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.callRecord}>
            <Text>{item.caller}</Text>
            <Text>{item.timestamp}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"cyan"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  callRecord: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    backgroundColor:"lightblue",
    width: '130%',
    marginBottom: 10,
  },
});


export default HistoryScreen;