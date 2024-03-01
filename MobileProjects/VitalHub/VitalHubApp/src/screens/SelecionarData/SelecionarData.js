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

const SelecionarData = ({navigation}) => {
    const [showModal, setShowModal] = useState(false);
  const[medico, setMedico] = useState();
  const[especialidade, setEspecialidade] = useState();
  const[local, setLocal] = useState();
  const[tipo, setTipo] = useState();
  const[data, setData] = useState();

   const VerData = () => {
    AsyncStorage.getItem('Local', (err, result) => {
        setLocal(result)
      });
    AsyncStorage.getItem('NivelConsulta', (err, result) => {
        setTipo(result)
      });
    AsyncStorage.getItem('nameDoctor', (err, result) => {
        setMedico(result)
      });
    AsyncStorage.getItem('especialidadeDoctor', (err, result) => {
        setEspecialidade(result)
      });
    AsyncStorage.getItem('DataConsulta', (err, result) => {
        setData(result)
      });

   }
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
                    }}>Continuar</ButtonTitle>
                    
                </Button>
                <LinkMediumAccount onPress={() => navigation.navigate("SelecionarMedico")}>Cancelar</LinkMediumAccount>
    </Container>
   
   {showModal ? (  <ModalConfirmar
   showModal={AbrirModal}
   medico={medico}
   especialidade={especialidade}
   local={local}
   tipo={tipo}
data={data}
   />) : null}
  

        </>
    );
};

export default SelecionarData;