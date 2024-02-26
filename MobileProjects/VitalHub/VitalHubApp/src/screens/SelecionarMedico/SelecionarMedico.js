import React from 'react';
import { Container } from '../../components/Container/Style';
import { TitleAgendamentoClinica } from '../../components/ModalHomePaciente/Style';
import CardMedico from '../../components/CardMedico/CardMedico';
import { ContainerContinuar, ListarClinicas } from '../SelecionarClinica/Style';
import { FlatList } from 'react-native';
import { Button, ButtonTitle } from '../../components/Button/Button';
import { LinkMediumAccount } from '../../components/Links/Style';

const SelecionarMedico = ({navigation}) => {
    const DataMedico = [
        {
        nameDoctor: "Dr Gabriel Panca",
        imagem: "http://github.com/pancabiel.png",
        especialidades: "Cirugião, Neurologista"
        },
        {
        nameDoctor: "Dr Lucas Portal",
        imagem: "http://github.com/LucSilveira.png",
        especialidades: "Demartólogo, Esteticista"
        },
        {
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
           <CardMedico 
           key={Math.random()}
           imagem={item.imagem}
           nameDoctor={item.nameDoctor}
           especialidades={item.especialidades}
           />
        }
           />
                   <ContainerContinuar>

<Button>
  <ButtonTitle onPress={() => navigation.navigate("SelecionarMedico")}>Continuar</ButtonTitle>
</Button>
<LinkMediumAccount onPress={() => navigation.navigate("SelecionarClinica")}>Cancelar</LinkMediumAccount>
  </ContainerContinuar>
        </Container>
    );
};

export default SelecionarMedico;