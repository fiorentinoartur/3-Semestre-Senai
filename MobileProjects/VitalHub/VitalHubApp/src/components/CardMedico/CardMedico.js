import React from 'react';
import { ContainerDadosMedico, ContainerMedico, EspecialidadeText, ImageDoctor } from './Style';
import { Container1 } from '../CardClinica/Style';
import { NamePaciente } from '../CardConsulta/Style';

const CardMedico = ({nameDoctor,imagem,especialidades, clickButton}) => {

    return (
    <ContainerMedico clickButton={clickButton}>
<ImageDoctor source={{uri: imagem} } />
<ContainerDadosMedico>
    <NamePaciente>{nameDoctor}</NamePaciente>
    <EspecialidadeText>{especialidades}</EspecialidadeText>
</ContainerDadosMedico>
    </ContainerMedico>
    );
};

export default CardMedico;