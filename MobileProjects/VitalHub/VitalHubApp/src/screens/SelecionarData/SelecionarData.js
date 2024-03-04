import React, { useState } from 'react';
import { Container } from '../../components/Container/Style';
import { SelectClinic, TextInput, TitleAgendamentoClinica } from '../../components/ModalHomePaciente/Style';
import CalendarConsulta from '../../components/CalendarConsulta/CalendarConsulta';
import { SelecioneHorario } from './Style';
import { Image } from 'react-native';
import { Button, ButtonTitle } from '../../components/Button/Button';
import { LinkMediumAccount } from '../../components/Links/Style';
import ModalConfirmar from '../../components/ModalConfirmarConsulta/ModalConfirmar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomePaciente from '../HomePaciente/HomePaciente';

const SelecionarData = ({ navigation }) => {

  const [dados, setDados] = useState(
    {
   
    })
  const [showModal, setShowModal] = useState(false);




  const BackToHome = () => {
    navigation.navigate("HomePaciente")
    console.log(dados);
  }


  const VerData = () => {
    AsyncStorage.multiGet(['Local', 'NivelConsulta', 'nameDoctor', 'DataConsulta', 'especialidadeDoctor'], (err, results) => {
      const newData = {};
  
      results.forEach(([key, value]) => {
        newData[key] = value;
      });
  
      setDados({
        ...dados,
        ...newData
      });
    });
  };
  
  const AbrirModal = () => {
    setShowModal(showModal ? false : true)
  }
  return (
    <>
      <Container>
        <TitleAgendamentoClinica>Selecionar data</TitleAgendamentoClinica>
        <CalendarConsulta />
        <SelecioneHorario>Selecione um horário disponível</SelecioneHorario>
        <SelectClinic>
          <TextInput>Selecionar Horário</TextInput>
          <Image source={require("../../assets/Images/IconArrowSelection.png")} />
        </SelectClinic>
        <Button>
          <ButtonTitle onPress={() => {
            AbrirModal(),
              VerData()
          }}>Confirmar</ButtonTitle>

        </Button>
        <LinkMediumAccount onPress={() => navigation.navigate("SelecionarMedico")}>Cancelar</LinkMediumAccount>
      </Container>

      {showModal ? (<ModalConfirmar
        navigation={BackToHome}
        showModal={AbrirModal}
        dados={dados}

      />) : null}


    </>
  );
};

export default SelecionarData;

