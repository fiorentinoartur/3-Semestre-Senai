import React from 'react';
import { Container1, ContainerAvalicao, ContainerCard, ContainerFuncionamento, LocalizacaoText, MediaAvaliacao, TextFuncionamento } from './Style';
import { Image } from 'react-native';
import { NamePaciente } from '../CardConsulta/Style';

const CardClinica = ({nameClinic,  mediaAvaliacao, cidade, estado, funcionamento}) => {
    return (
        <ContainerCard>
            <Container1>
            <NamePaciente>Clínica Natureh</NamePaciente>
            <ContainerAvalicao>
            <Image source={require("../../assets/Images/star.png")}/> 
            <MediaAvaliacao>4,5</MediaAvaliacao>
            </ContainerAvalicao>
            </Container1>
            <Container1>
                <LocalizacaoText>São Paulo, SP</LocalizacaoText>
                <ContainerFuncionamento>
                <Image source={require("../../assets/Images/calendarIcon.png")}/>
                <TextFuncionamento>Seg-Sex</TextFuncionamento>
                </ContainerFuncionamento>
            </Container1>
        </ContainerCard>
    );
};

export default CardClinica;