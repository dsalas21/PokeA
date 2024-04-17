import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import SearchBar from './SearchBar';
export default function App() {
  return (
    <View style={styles.container}>
      
      
      <Header/>
      <SearchBar/>
      <Text>Hola Como estas todo bien?</Text>
      <Text> Pokemon</Text>
      <Text>
        Aute proident qui ad cupidatat incididunt qui ut aliqua proident aute. 
        Duis voluptate laboris velit dolore minim ex. Dolor elit nisi deserunt
         excepteur quis nostrud laborum incididunt. Quis irure laborum ea in eiusmod 
         reprehenderit exercitation laborum proident Lorem officia fugiat sint non.
          Amet ea deserunt nulla non dolore sunt occaecat velit.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
