import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Poke Appi</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar..."
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 120, 
    backgroundColor: '#f9f9f9',
    top:-10 ,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: -80,
    marginRight:20,
     
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
});

export default HeaderComponent;

