import React, { useState } from 'react';
import { Container } from '../../components/Container/Style';
import { TitleAgendamento, TitleAgendamentoClinica } from '../../components/ModalHomePaciente/Style';
import CardClinica from '../../components/CardClinica/CardClinica';
import { FlatList, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { ContainerContinuar, ListarClinicas } from './Style';
import { Button } from '../../components/Button/Button';
import { ButtonTitle } from '../../components/ModalConsultas/Style';
import { LinkMedium, LinkMediumAccount } from '../../components/Links/Style';
const SelecionarClinica = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(); 

  const  toggleItemSelect = ( id ) => { 
  setSelectedId(id)

  }; 
  const Data = [
    {
      id: '1',
      clinicName: "Clínica Natureh",
      cidade: "São Paulo",
      estado: "SP",
      funcionamento: "Seg-Sex",
      mediaAvaliacao: "4,5"
    },
    {
      id: '2',
      clinicName: "Diamond Pró-Mulher",
      cidade: "São Paulo",
      estado: "SP",
      funcionamento: "Seg-Sex",
      mediaAvaliacao: "4,5"
    },
    {
      id: '3',
      clinicName: "Clinica Villa Lobos",
      cidade: "Taboão",
      estado: "SP",
      funcionamento: "Seg-Sex",
      mediaAvaliacao: "4,5"
    },
    {
      id: '4',
      clinicName: "SP Oncologia Clínica",
      cidade: "Taboão",
      estado: "SP",
      funcionamento: "Seg-Sex",
      mediaAvaliacao: "4,5"
    },
  ]


  return (
    <Container>
      <TitleAgendamentoClinica>Selecionar Clínica</TitleAgendamentoClinica>
  
      <ListarClinicas
        data={Data}

        keyExtractor={item => item.id} 
        renderItem={({ item }) =>
        <TouchableOpacity
        onPress={() => toggleItemSelect(item.id)} 
        >
          <CardClinica
           clickButton={item.id == selectedId ?? false}
            key={Math.random()}
            cidade={item.cidade}
            estado={item.estado}
            funcionamento={item.funcionamento}
            mediaAvaliacao={item.mediaAvaliacao}
            nameClinic={item.clinicName}

          />
        </TouchableOpacity>
        }
      />
      <ContainerContinuar>

    <Button>
      <ButtonTitle onPress={() => navigation.navigate("SelecionarMedico")}>Continuar</ButtonTitle>
    </Button>
    <LinkMediumAccount onPress={() => navigation.navigate("HomePaciente")}>Cancelar</LinkMediumAccount>
      </ContainerContinuar>
    </Container>
  );
};

export default SelecionarClinica;