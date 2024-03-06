import React from 'react';
import { Container } from '../../components/Container/Style';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import { Button, ButtonTitle } from '../../components/Button/Button';
import {  InputGray, LabelPaciente, NomePacienteProntuario, Textarea, TextareaGray, ViewFoto } from '../../components/ModalProntuario/Style';
import { Input } from '../../components/Input/Input';
import { LinkCancel, TipoConsulta } from '../../components/CardConsulta/Style';
import { ContainerDados } from '../MedicoConsultas/Style';
import { ImagePacienteProntuario } from '../PacienteProntuario/Style';
import { LinkCancelarConsulta } from '../../components/ModalConsultas/Style';
import { BtnTextEnviar, ButtonEnviar, ContainerButtonsPrescricao, LinkCancelPrescricao } from './Style';

const PrescricaoMedica = ({navigation}) => {
    return (
      
                <ScrollView>
            <Container>
                <ImagePacienteProntuario source={require("../../assets/Images/ClaudinhoDoctor.png")}/>

                <NomePacienteProntuario>Dr. Claudio</NomePacienteProntuario>
                <ContainerDados>
                    <TipoConsulta>Clinico geral</TipoConsulta>
                    <TipoConsulta>CRM-15282</TipoConsulta>
                </ContainerDados>
                <LabelPaciente>Descrição da Consulta</LabelPaciente>
                <TextareaGray
                    placeholder="O paciente possuí uma infecção no
                    ouvido. Necessário repouse de 2 dias
                    e acompanhamento médico constante"></TextareaGray>
                <LabelPaciente>Diagnóstico do Paciente</LabelPaciente>
                <InputGray placeholder="Infecção no ouvido" />
                <LabelPaciente>Prescrição Médica</LabelPaciente>
                <TextareaGray  placeholder="
Medicamento: Advil
Dosagem: 50 mg
Frequência: 3 vezes ao dia
Duração: 3 dias"></TextareaGray>
    <LabelPaciente>Exames Médicos</LabelPaciente>
    <ViewFoto>

    </ViewFoto>
    <ContainerButtonsPrescricao>
        <ButtonEnviar>
            <Image source={require("../../assets/Images/CameraEnviar.png")}/>
            <BtnTextEnviar>Enviar</BtnTextEnviar>
        </ButtonEnviar>
        
<LinkCancelPrescricao>Cancelar</LinkCancelPrescricao>
    </ContainerButtonsPrescricao>
      
                <LinkCancelarConsulta
                onPress={() => navigation.navigate("MedicoConsultas")}
                >Voltar</LinkCancelarConsulta>

            </Container>
        </ScrollView>
  
    );
};

export default PrescricaoMedica;