import { StatusBar } from 'expo-status-bar';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container } from './src/components/Container/Container';
import { Header } from './src/components/Header/Header';
import { Roboto_500Medium, useFonts } from '@expo-google-fonts/roboto'
import { Roboto_700Bold } from '@expo-google-fonts/roboto';
import { TitleHeader } from './src/components/TitleHeader/TitleHeader';
import { LabelText } from './src/components/LabelText/LabelText';
import { Input, InputEstado, InputUF } from './src/components/Input/Input';
import { ContainerInputs } from './src/components/ContainerInputs/ContainerInputs';
// import { api } from './service/Service'
import { useState } from 'react';


export default function App() {
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUF] = useState("");

  let [fontsLoaded, fontError] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold
  })

  if (!fontsLoaded && !fontError) {
    return null;
  }


  async function buscarCep() {
    if (cep == "") {
      console.warn("Cep Inválido!");
      setCep("")
    }
    try {

      const urlViaCep = `https://viacep.com.br/ws/`
      // const promise = await api.get(`${cep}/json/`);
      const promise = await fetch(`${urlViaCep}/${cep}/json/`);
      console.warn(`${urlViaCep}/${cep}/json/`);
      const data = await promise.json();
      const urlEStado = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${data.uf}`;
      const promiseEstado = await fetch(urlEStado);
      const dataEstado = await promiseEstado.json();
      console.log(dataEstado);
      setLogradouro(data.logradouro)
      setBairro(data.bairro)
      setCidade(data.localidade)
      setEstado(dataEstado.nome)
      setUF(data.uf)





    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <Header>
        <TitleHeader>Consumo API ViaCep</TitleHeader>
      </Header>
      <Container>
<ContainerInputs>

        <LabelText>Informar CEP</LabelText>
        <Input
          value={cep}
          onBlur={buscarCep}
          onChangeText={(texto) => setCep(texto)}
          placeholder="Cep.." />

        <LabelText>Logradouro</LabelText>
        <Input
          value={logradouro}
          onChangeText={(texto) => setLogradouro(texto)}
          placeholder="Logradouro.." />

        <LabelText>Bairro</LabelText>
        <Input
          value={bairro}
          onChangeText={(texto) => setBairro(texto)}
          placeholder="Bairro..." />

        <LabelText>Cidade</LabelText>
        <Input
          value={cidade}
          onChangeText={(texto) => setCidade(texto)}
          placeholder="Cidade..." />

        <View style={[{ flexDirection: 'row' }, { justifyContent:'space-between' }]} >
          <View>
            <LabelText>Estado</LabelText>
            <InputEstado

              value={estado}
              onChangeText={(texto) => setEstado(texto)}
              placeholder="Estado.." />
          </View>
          <View>

            <LabelText>UF</LabelText>
            <InputUF
              onChangeText={(texto) => setUF(texto)}
              value={uf}
              placeholder="UF..." />
          </View>
        </View>
</ContainerInputs>

      </Container>
    </>
  );
}

