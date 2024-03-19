import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react';
import moment from 'moment';

export default function App() {
  const [history, setHistory] = useState({})
  const [authenticaded, setAuthenticated] = useState();
  const [biometricExist, setBiometricExist] = useState(false);

  async function CheckExistsAuthenticates() {
    //Validar se o aparelho tem acesso a biometria
    const compatible = await LocalAuthentication.hasHardwareAsync();

    setBiometricExist(compatible);

    //Consultar as validações existentes
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    console.log(LocalAuthentication.AuthenticationType[types[0]]);
  }

  async function handleAuthentication() {
    const biometric = await LocalAuthentication.isEnrolledAsync();

    //Validar se existe uma biometria cadastrada
    if (!biometric) {
      return Alert.alert(
        "Falha ao logar",
        "Não foi encontrado nenhuma biometria cadastrada."
      )
    }

    //Caso exista 
    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage : 'Login com biometria'
    })

    setAuthenticated(auth.success)

    if(auth.success)
    {
      
      SetHistory();
    }
  }
async function SetHistory(){
  const objAuth = {
    dateAuthetication : moment().format("DD/MM/YYYY HH:mm:ss")
  }
  await AsyncStorage.setItem("authentication", JSON.stringify(objAuth))
console.log("teste" + objAuth.dateAuthetication);
 setHistory(objAuth)
}
async function GetHistory()
{
const objAuth = await AsyncStorage.getItem("authentication")

if(objAuth)
{
  setHistory(JSON.parse(objAuth))
}
}
  useEffect(() => {
    CheckExistsAuthenticates();

    GetHistory();
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {biometricExist ? 'Seu dispositivo e compativel comm a Biometria' : 'Seu dispositivo não suporta a Biometria/FaceId'}
      </Text>
      <TouchableOpacity style={styles.btnAuth} onPress={() => handleAuthentication()}>
        <Text style={styles.txtAuth}>Autenticar acesso</Text>
      </TouchableOpacity>
      <Text style={[styles.txtReturn, { color: authenticaded ? 'green' : 'red' }]}>
        {authenticaded ? 'Autenticado' : 'Não autenticado'}
      </Text>
      {
        history.dateAuthetication ?
        <Text style={styles.txtHistory}>Último acesso em {history.dateAuthetication}</Text>
        : null
      }
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
  title: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 30,
    width: '70%'
  },
  btnAuth: {
    padding: 16,
    borderRadius: 15,
    margin: 20,
    backgroundColor: '#ff8877'
  },
  txtAuth: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
  txtReturn: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 50
  },
  txtHistory : {
    fontSize : 16,
    fontWeight: 'bold',
    color: '#858383',
    position: 'absolute',
    bottom: 120
  }

});
