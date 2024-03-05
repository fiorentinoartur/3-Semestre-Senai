import React, { useEffect } from 'react';
import { Modal } from '../ModalConsultas/Style';
import { ContainerModal } from '../ModalConfirmarConsulta/Style';
import { ContainerDataMedico, ContainerModalMedico, ImageDoctorModal, TextDadosMedico } from './Style';
import { TitlePaciente } from '../../screens/MedicoConsultas/Style';
import { TextQuickSand14 } from '../Text/Text';
import { ContainerEmail } from '../Container/Style';
import { Button, ButtonTitle } from '../Button/Button';
import { LinkMediumAccount } from '../Links/Style';

const ModalMedico = ({ dados, showModal, navigation}) => {
    useEffect(() => {
console.log(dados);

    },[])
    return (
     <Modal>
        <ContainerModalMedico>
            <ImageDoctorModal source={{uri: dados.imageDoctor}} />
            <TitlePaciente>Dr. {dados.nameDoctor}</TitlePaciente>
    <ContainerDataMedico>
            <TextDadosMedico>Clinico Geral</TextDadosMedico>
            <TextDadosMedico>CRM-15286</TextDadosMedico>

    </ContainerDataMedico>
<Button onPress={() => {
    navigation();
}}>
    <ButtonTitle>Ver local da consulta</ButtonTitle>
</Button>
<LinkMediumAccount onPress={showModal}>Cancelar</LinkMediumAccount>

        </ContainerModalMedico>
     </Modal>
    );
};

export default ModalMedico;