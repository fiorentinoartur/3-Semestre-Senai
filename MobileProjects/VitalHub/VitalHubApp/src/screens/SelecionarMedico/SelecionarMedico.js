import React, { useState } from 'react';
import { Container } from '../../components/Container/Style';
import { TitleAgendamentoClinica } from '../../components/ModalHomePaciente/Style';
import CardMedico from '../../components/CardMedico/CardMedico';
import { ContainerContinuar, ListarClinicas } from '../SelecionarClinica/Style';
import { FlatList, TouchableHighlight } from 'react-native';
import { Button, ButtonTitle } from '../../components/Button/Button';
import { LinkMediumAccount } from '../../components/Links/Style';

const SelecionarMedico = ({navigation}) => {
  const[id, setId] = useState();

  const pegarId = (id) => {
    console.warn(id);
    setId(id)
  }
    const DataMedico = [
        {
        id: "1",
        nameDoctor: "Dr Gabriel Panca",
        imagem: "http://github.com/pancabiel.png",
        especialidades: "Cirugião, Neurologista"
        },
        {
          id: "2",
        nameDoctor: "Dr Lucas Portal",
        imagem: "http://github.com/LucSilveira.png",
        especialidades: "Demartólogo, Esteticista"
        },
        {
          id: "3",
        nameDoctor: "Dr Paulo Brandão",
        imagem: "http://github.com/paulobrandaodev.png",
        especialidades: "Clinico, Pediatra"
        },
    ]
    return (
        <Container>
             <TitleAgendamentoClinica>Selecionar Médico</TitleAgendamentoClinica>
       
           <ListarClinicas
           data={DataMedico}
           renderItem={({item}) => 
           <TouchableHighlight onPress={() => {pegarId(item.id)}}> 
             <CardMedico 
             clickButton={item.id == id ?? false}
             key={Math.random()}
             imagem={item.imagem}
             nameDoctor={item.nameDoctor}
             especialidades={item.especialidades}
             />
           </TouchableHighlight>
        }
           />
                   <ContainerContinuar>

<Button>
  <ButtonTitle onPress={() => navigation.navigate("SelecionarData")}>Continuar</ButtonTitle>
</Button>
<LinkMediumAccount onPress={() => navigation.navigate("SelecionarClinica")}>Cancelar</LinkMediumAccount>
  </ContainerContinuar>
        </Container>
    );
};

export default SelecionarMedico;