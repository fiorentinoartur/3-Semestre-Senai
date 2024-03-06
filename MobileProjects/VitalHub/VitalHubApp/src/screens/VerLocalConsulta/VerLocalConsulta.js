import React from 'react';
import { Container } from '../../components/Container/Style';
import MapView, { Marker } from 'react-native-maps';

import { StyleSheet, View } from 'react-native';
import { ContainerVerClinica, LabelVerClinica, TextVerClincia } from './Style';
import { TitlePaciente } from '../MedicoConsultas/Style';
import { TextQuickSand16 } from '../../components/Text/Text';
import { InputCep, InputPerfil } from '../../components/Input/Input';
import { ContetnCidadeCep } from '../../components/ContentAccount/ContentAccount';
const VerLocalConsulta = () => {

    const SenaiLocation = {
        latitude: -23.61511886409227,
        longitude:-46.570723260077095,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    }

    return (
<Container>
<MapView 
initialRegion={SenaiLocation}
style={styles.map} >

    <Marker
coordinate={{latitude:-23.61511886409227, longitude: -46.570723260077095 }}
    image={require("../../assets/Images/PinMapa.png")}
    />
 
    </MapView>
    <ContainerVerClinica>
          <TitlePaciente>Clinica Natureh</TitlePaciente>
          <TextVerClincia>São Paulo, SP</TextVerClincia>
          <TextQuickSand16>Data de nascimento: </TextQuickSand16>
                <InputPerfil />
                <ContetnCidadeCep>
                    <View >
                        <TextQuickSand16>Número:</TextQuickSand16>
                        <InputCep />
                    </View>
                    <View>
                        <TextQuickSand16>Bairro:</TextQuickSand16>
                        <InputCep />
                    </View>
                </ContetnCidadeCep>
    </ContainerVerClinica>
</Container>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '50%',
    },
  });
export default VerLocalConsulta;