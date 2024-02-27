import React from 'react';
import { Container1, ContainerAvalicao, ContainerCard, ContainerFuncionamento, LocalizacaoText, MediaAvaliacao, TextFuncionamento } from './Style';
import { Image } from 'react-native';
import { NamePaciente } from '../CardConsulta/Style';

const CardClinica = ({nameClinic,  mediaAvaliacao, cidade, estado, funcionamento, clickButton}) => {
    return (
        <ContainerCard clickButton={clickButton}>
            <Container1>
            <NamePaciente>{nameClinic}</NamePaciente>
            <ContainerAvalicao>
            <Image source={require("../../assets/Images/star.png")}/> 
            <MediaAvaliacao>{mediaAvaliacao}</MediaAvaliacao>
            </ContainerAvalicao>
            </Container1>
            <Container1>
                <LocalizacaoText>{cidade}, {estado}</LocalizacaoText>
                <ContainerFuncionamento>
                <Image source={require("../../assets/Images/calendarIcon.png")}/>
                <TextFuncionamento>{funcionamento}</TextFuncionamento>
                </ContainerFuncionamento>
            </Container1>
        </ContainerCard>
    );
};

export default CardClinica;