import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);
  useEffect(() =>{
    console.warn(`Contador atualizado ${count}`);
  },[count])
  return (
    <View style={styles.container}>
      <Text>Contador: {count}</Text>
      <TouchableOpacity style={[styles.btnContador, {backgroundColor: "green"}]}  onPress={() => {
        setCount(count + 1)
      }}>
        <Text style={{color: "white"}}>Incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={[styles.btnContador]}  onPress={() => {
        if (count > 0) {
          setCount(count - 1)
        }
      }}>
        <Text style={{color: "white"}}>Decrementar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30
  },
  btnContador:{
    backgroundColor: "red",
    borderRadius:8,
    width: 200,
    height:35,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
});
