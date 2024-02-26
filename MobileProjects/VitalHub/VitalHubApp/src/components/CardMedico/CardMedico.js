import React from 'react';
import { ContainerDadosMedico, ContainerMedico, EspecialidadeText, ImageDoctor } from './Style';
import { Container1 } from '../CardClinica/Style';
import { NamePaciente } from '../CardConsulta/Style';

const CardMedico = ({nameDoctor,imagem,especialidades}) => {

    return (
    <ContainerMedico>
<ImageDoctor source={{uri: imagem} } />
<ContainerDadosMedico>
    <NamePaciente>{nameDoctor}</NamePaciente>
    <EspecialidadeText>{especialidades}</EspecialidadeText>
</ContainerDadosMedico>
    </ContainerMedico>
    );
};

export default CardMedico;