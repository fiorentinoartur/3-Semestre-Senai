import React from 'react';
import { Container } from '../../components/Container/Style';
import { ImagePacienteProntuario } from './Style';
import { Title16 } from '../../components/Title/Style';
import { Input, LabelPaciente, NomePacienteProntuario, Textarea } from '../../components/ModalProntuario/Style';
import { ContainerDados } from '../MedicoConsultas/Style';
import { TipoConsulta } from '../../components/CardConsulta/Style';
import { ScrollView } from 'react-native';
import { Button, ButtonTitle } from '../../components/Button/Button';
import { LinkCancelarConsulta } from '../../components/ModalConsultas/Style';


const PacienteProntuario = ({ route, navigation}) => {
    const { imagem, nome, idade, email } = route.params;


    return (

        <ScrollView>
            <Container>
                <ImagePacienteProntuario source={{ uri: imagem }} />

                <NomePacienteProntuario>{nome}</NomePacienteProntuario>
                <ContainerDados>
                    <TipoConsulta>{idade} anos </TipoConsulta>
                    <TipoConsulta>{email}</TipoConsulta>
                </ContainerDados>
                <LabelPaciente>Descrição da Consulta</LabelPaciente>
                <Textarea
                    placeholder="Descrição"></Textarea>
                <LabelPaciente>Diagnóstico do Paciente</LabelPaciente>
                <Input placeholder="Diagnóstico" />
                <LabelPaciente>Prescrição Médica</LabelPaciente>
                <Textarea placeholder="Prescrição Médica"></Textarea>

                <Button>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>
                <LinkCancelarConsulta
                onPress={() => navigation.navigate("MedicoConsultas")}
                >Cancelar</LinkCancelarConsulta>

            </Container>
        </ScrollView>

    );
};

export default PacienteProntuario;

