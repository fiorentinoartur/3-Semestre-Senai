import React, { useEffect, useState } from 'react';
import { ButtonTitle, LinkCancelarConsulta, Modal } from '../ModalConsultas/Style';
import { CardModalProntuario, ImageProntuario } from './Style';
import { TitleMes } from '../Header/Style';
import { ContainerDados, TitlePaciente } from '../../screens/MedicoConsultas/Style';
import { TipoConsulta } from '../CardConsulta/Style';
import { Button } from '../Button/Button';
import PacienteProntuario from '../../screens/PacienteProntuario/PacienteProntuario';

const ModalProntuario = ({dados,exibirModal, navigation}) => {
const[email,setEmail] = useState();



const GerarEmail = () => {
  const worlds = dados.nomePaciente.toLowerCase().split(' ');
  const firstName = worlds[0];
  const lastName = worlds[worlds.length - 1]
  const emailGerado =  `${firstName}@${lastName}.com`
  setEmail(emailGerado)
}

useEffect(() => {
GerarEmail()
},[dados])


  return (
      <Modal>
        <CardModalProntuario>
          <ImageProntuario source={{uri: dados.caminhoImage}}/>
          <TitlePaciente>{dados.nomePaciente}</TitlePaciente>
          <ContainerDados>
          <TipoConsulta>{dados.idadePaciente} anos </TipoConsulta>
          <TipoConsulta>{email}</TipoConsulta>
          </ContainerDados>
          <Button onPress={() => {
            navigation(),
            exibirModal()
          }}>
            <ButtonTitle>Inserir Prontuário</ButtonTitle>
          </Button>
          <LinkCancelarConsulta
          onPress={exibirModal}
          >Cancelar</LinkCancelarConsulta>
        </CardModalProntuario>
      </Modal>
    );
};

export default ModalProntuario;