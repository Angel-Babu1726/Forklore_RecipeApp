

// import React, { useState } from 'react';
// import { TextInput, View, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons'; 

// const SearchBar = ({ onChangeText }) => {
//   const [text, setText] = useState('');

//   const handleChangeText = newText => {
//     setText(newText);
//     onChangeText(newText);
//   };

//   return (
//     <View style={styles.container}>
//       <Icon name="ios-search" size={20} color="#000" style={styles.icon} />
//       <TextInput
//         style={styles.input}
//         placeholder="Search..."
//         value={text}
//         onChangeText={handleChangeText}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#eee',
//     borderRadius: 5,
//     padding: 8,
//   },
//   icon: {
//     marginRight: 8,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//   },
// });

// export default SearchBar;
