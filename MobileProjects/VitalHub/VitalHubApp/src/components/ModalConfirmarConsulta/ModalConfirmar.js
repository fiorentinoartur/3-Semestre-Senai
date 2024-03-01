import React from 'react';
import { Modal } from '../ModalConsultas/Style';
import { ContainerDadosModal, ContainerModal, SubTitleDados, TextConsulta, TextDados, TextSemMargin, TitleAgendar } from './Style';
import { TitleAgendamentoClinica } from '../ModalHomePaciente/Style';
import { Button, ButtonTitle } from '../Button/Button';
import { LinkMediumAccount } from '../Links/Style';

const ModalConfirmar = ({showModal,data, medico, especialidade, local,  tipo}) => {
    
    return (
            <Modal>
                <ContainerModal>
                                <TitleAgendar>Agendar Consulta</TitleAgendar>
                                <TextConsulta>Consulte os dados selecionados para a sua consulta</TextConsulta>
                    <ContainerDadosModal>
                                <SubTitleDados>Data da Consulta</SubTitleDados>
                                <TextDados>{data}</TextDados>
                                <SubTitleDados>Médico(a) da Consulta</SubTitleDados>
                                <TextSemMargin>{medico}</TextSemMargin>
                                <TextDados>{especialidade}</TextDados>
                                <SubTitleDados>Local da Consulta</SubTitleDados>
                                <TextDados>{local}</TextDados>
                                <SubTitleDados>Tipo da Consulta</SubTitleDados>
                                <TextDados>{tipo}</TextDados>
                    </ContainerDadosModal>
                    <Button>
                    <ButtonTitle>Continuar</ButtonTitle>
                    
                </Button>
                <LinkMediumAccount onPress={showModal}>Cancelar</LinkMediumAccount>
                </ContainerModal>
            </Modal>
    );
};

export default ModalConfirmar;