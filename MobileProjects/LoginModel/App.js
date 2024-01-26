import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Switch, Text, TextInput, TouchableHighlight, View } from 'react-native';
import yellowBatman from "./src/assets/img/yellowBatmann.png";
import whiteBatman from "./src/assets/img/"

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={isEnabled ? styles.container : styles.containerWhite}>
      <Image style={styles.logoBatman} source={yellowBatman} />

      <Text style={styles.title}>Login</Text>

      <View style={styles.flexInputs}>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder='Digite seu email' />
        </View>

        <View>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          keyboardType='visible-password'
          placeholder='Digite sua senha' />
        </View>
      </View>

      <TouchableHighlight style={styles.btn}>
        <Text style={styles.titlebtn}>
          Entrar
        </Text>
      </TouchableHighlight>

<Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      onValueChange={toggleSwitch}
      value={isEnabled}
/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  containerWhite:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  logoBatman: {
    width: 200,
    height: 100,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: "800",
    textTransform: "uppercase",
    borderBottomWidth: 2,
    borderBlockColor: "#FEF400",
    padding: 10
  },
  label: {
    fontSize: 20,
    color: '#FEF400',
    fontWeight: "300",
   
  },
  titlebtn: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#FEF400',
    borderColor: 'black',
    width: 150,
    height: 35,
    borderWidth: 2,
    borderRadius: 6,

  },
  input: {
    borderColor: 'white',
    backgroundColor: "white",
    width: 250,
    borderWidth: 2,
    padding:5,
    marginTop: 10,
    borderRadius: 4
  },
  flexInputs: {
    display: "flex",
    gap: 20,
  }
});
