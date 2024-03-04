import React, { useEffect } from 'react';
import { Modal } from '../ModalConsultas/Style';
import { ContainerModal } from '../ModalConfirmarConsulta/Style';
import { ContainerModalMedico, ImageDoctorModal } from './Style';

const ModalMedico = ({ dados}) => {
    useEffect(() => {
console.log(dados);
    },[])
    return (
     <Modal>
        <ContainerModalMedico>
            <ImageDoctorModal source={{uri: dados.imageDoctor}} />
        </ContainerModalMedico>
     </Modal>
    );
};

export default ModalMedico;