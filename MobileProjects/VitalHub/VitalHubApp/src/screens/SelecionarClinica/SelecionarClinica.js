import React from 'react';
import { Container } from '../../components/Container/Style';
import { TitleAgendamento, TitleAgendamentoClinica } from '../../components/ModalHomePaciente/Style';
import CardClinica from '../../components/CardClinica/CardClinica';
import { FlatList } from 'react-native';
import { ContainerContinuar, ListarClinicas } from './Style';
import { Button } from '../../components/Button/Button';
import { ButtonTitle } from '../../components/ModalConsultas/Style';
import { LinkMedium, LinkMediumAccount } from '../../components/Links/Style';
const SelecionarClinica = ({navigation}) => {

  const Data = [
    {
      clinicName: "Clínica Natureh",
      cidade: "São Paulo",
      estado: "SP",
      funcionamento: "Seg-Sex",
      mediaAvaliacao: "4,5"
    },
    {
      clinicName: "Diamond Pró-Mulher",
      cidade: "São Paulo",
      estado: "SP",
      funcionamento: "Seg-Sex",
      mediaAvaliacao: "4,5"
    },
    {
      clinicName: "Clinica Villa Lobos",
      cidade: "Taboão",
      estado: "SP",
      funcionamento: "Seg-Sex",
      mediaAvaliacao: "4,5"
    },
    {
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
        renderItem={({ item }) =>
          <CardClinica
            key={Math.random()}
            cidade={item.cidade}
            estado={item.estado}
            funcionamento={item.funcionamento}
            mediaAvaliacao={item.mediaAvaliacao}
            nameClinic={item.clinicName}

          />
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