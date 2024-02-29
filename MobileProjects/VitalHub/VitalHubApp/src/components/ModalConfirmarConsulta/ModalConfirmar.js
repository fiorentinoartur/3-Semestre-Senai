import React from 'react';
import { Modal } from '../ModalConsultas/Style';
import { ContainerDadosModal, ContainerModal, SubTitleDados, TextConsulta, TextDados, TitleAgendar } from './Style';
import { TitleAgendamentoClinica } from '../ModalHomePaciente/Style';
import { Button, ButtonTitle } from '../Button/Button';
import { LinkMediumAccount } from '../Links/Style';

const ModalConfirmar = () => {
    return (
            <Modal>
                <ContainerModal>
                                <TitleAgendar>Agendar Consulta</TitleAgendar>
                                <TextConsulta>Consulte os dados selecionados para a sua consulta</TextConsulta>
                    <ContainerDadosModal>
                                <SubTitleDados>Data da Consulta</SubTitleDados>
                                <TextDados>teste</TextDados>
                                <SubTitleDados>Médico(a) da Consulta</SubTitleDados>
                                <TextDados>teste</TextDados>
                                <SubTitleDados>Local da Consulta</SubTitleDados>
                                <TextDados>teste</TextDados>
                                <SubTitleDados>Tipo da Consulta</SubTitleDados>
                                <TextDados>teste</TextDados>
                    </ContainerDadosModal>
                    <Button>
                    <ButtonTitle>Continuar</ButtonTitle>
                    
                </Button>
                <LinkMediumAccount>Cancelar</LinkMediumAccount>
                </ContainerModal>
            </Modal>
    );
};

export default ModalConfirmar;