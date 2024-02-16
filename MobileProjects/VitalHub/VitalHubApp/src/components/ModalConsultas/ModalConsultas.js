import React from 'react';
import { BtnCancelarConsulta, ButtonTitle, CardModal, LinkCancelarConsulta, Modal } from './Style';
import { Title } from '../Title/Style';
import { TextQuickSand } from '../Text/Text';

const ModalConsultas = ({ exibirModal }) => {
    return (
        <Modal>
            <CardModal>
                <Title>Cancelar Consulta</Title>
                <TextQuickSand>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</TextQuickSand>
                <BtnCancelarConsulta>
                    <ButtonTitle>Confrmar</ButtonTitle>
                </BtnCancelarConsulta>
                <LinkCancelarConsulta
                    onPress={exibirModal}
                >Cancelar</LinkCancelarConsulta>
            </CardModal>
        </Modal>
    );
};

export default ModalConsultas;