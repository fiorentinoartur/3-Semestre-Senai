import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Person from './src/components/person/Person';
import { useFonts, Poppins_700Bold_Italic } from '@expo-google-fonts/poppins';
import { SingleDay_400Regular } from '@expo-google-fonts/single-day';

export default function App() {
  let[fontsLoaded,fontError] = useFonts({
    Poppins_700Bold_Italic,
    SingleDay_400Regular
  })

  if(!fontsLoaded && !fontError){
    return null;
  }

  const peopleList = [
  {id: '1', name: 'Carlos', age: 37},
  {id: '2', name: 'Eduardo', age: 47},
  {id: '3', name: 'Enzo', age: 27},
  {id: '4', name: 'Lucas', age: 22}
  ]
  return (
      <SafeAreaView>
        <FlatList 
        data={peopleList}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          //exibir cada item da lista
          <Person name={item.name} age={item.age}/>
        )}

  />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
