import React from 'react';
import { Container } from '../../components/Container/Style';
import { TitleAgendamentoClinica } from '../../components/ModalHomePaciente/Style';
import CalendarConsulta from '../../components/CalendarConsulta/CalendarConsulta';

const SelecionarData = () => {
    return (
    <Container>
        <TitleAgendamentoClinica>Selecionar data</TitleAgendamentoClinica>
        <CalendarConsulta />
    </Container>
    );
};

export default SelecionarData;