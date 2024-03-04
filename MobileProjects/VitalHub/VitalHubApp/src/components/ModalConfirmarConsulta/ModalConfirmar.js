import React, { useState } from 'react';
import { Modal } from '../ModalConsultas/Style';
import { ContainerDadosModal, ContainerModal, SubTitleDados, TextConsulta, TextDados, TextSemMargin, TitleAgendar } from './Style';
import { TitleAgendamentoClinica } from '../ModalHomePaciente/Style';
import { Button, ButtonTitle } from '../Button/Button';
import { LinkMediumAccount } from '../Links/Style';

const ModalConfirmar = ({ showModal, dados, navigation }) => {
    return (
        <Modal>
            <ContainerModal>
                <TitleAgendar>Agendar Consulta</TitleAgendar>
                <TextConsulta>Consulte os dados selecionados para a sua consulta</TextConsulta>
                <ContainerDadosModal>
                    <SubTitleDados>Data da Consulta</SubTitleDados>
                    <TextDados>{dados.DataConsulta}</TextDados>
                    <SubTitleDados>Médico(a) da Consulta</SubTitleDados>
                    <TextSemMargin>{dados.nameDoctor}</TextSemMargin>
                    <TextDados>{dados.especialidadeDoctor}</TextDados>
                    <SubTitleDados>Local da Consulta</SubTitleDados>
                    <TextDados>{dados.Local}</TextDados>
                    <SubTitleDados>Tipo da Consulta</SubTitleDados>
                    <TextDados>{dados.NivelConsulta}</TextDados>
                </ContainerDadosModal>
                <Button onPress={() => {
                    showModal(),
navigation();
                }}>
                    <ButtonTitle>Confirmar</ButtonTitle>
                </Button>
                <LinkMediumAccount onPress={showModal}>Cancelar</LinkMediumAccount>
            </ContainerModal>
        </Modal>
    );
};

export default ModalConfirmar;