import React, { useState } from 'react';
import { Container } from '../../components/Container/Style';
import { SelectClinic, TextInput, TitleAgendamentoClinica } from '../../components/ModalHomePaciente/Style';
import CalendarConsulta from '../../components/CalendarConsulta/CalendarConsulta';
import { SelecioneHorario } from './Style';
import { Image } from 'react-native';
import { Button, ButtonTitle } from '../../components/Button/Button';
import { LinkMediumAccount } from '../../components/Links/Style';
import ModalConfirmar from '../../components/ModalConfirmarConsulta/ModalConfirmar';

const SelecionarData = ({navigation}) => {
    const [showModal, setShowModal] = useState(true);
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
                    <ButtonTitle>Continuar</ButtonTitle>
                    
                </Button>
                <LinkMediumAccount>Cancelar</LinkMediumAccount>
    </Container>
   
    <ModalConfirmar/>

        </>
    );
};

export default SelecionarData;