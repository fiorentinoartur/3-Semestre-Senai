import React, { useState } from 'react';
import { CardContainer, Container, ContainerDoutorClaudio } from '../../components/Container/Style';
import { Header } from '../../components/Header/Header';
import { LinearGradient } from 'expo-linear-gradient';
import { Animated, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { FotoClaudio } from '../../components/Logo/Style';
import { TextQuickSand, TextQuickSand14, TextQuickSand14Gray, TextQuickSand14GrayMedium, TextQuickSand14GraySemiBold, TextQuickSand14Green } from '../../components/Text/Text';
import { Title, Title12, Title12White, Title16, Title16white } from '../../components/Title/Style';
import { ContentAccount } from '../../components/ContentAccount/ContentAccount';
import CalendarStrip from 'react-native-calendar-strip';
import { BtnCancelarConsulta, ButtonHour, ButtonTitle } from '../../components/Button/Button';
import { LinkCancel, LinkCancelarConsulta } from '../../components/Links/Style';
import { TitleMes } from '../../components/Header/Style';
import CardConsulta from '../../components/CardConsulta/CardConsulta';
import ModalConsultas from '../../components/ModalConsultas/ModalConsultas';
import { ButtonConsulta, ButtonConsultaDiferente, ButtonConsultaWhite, ButtonTextStyle, ContainerBotoes } from './Style';
import ButtonListConsulta from '../../components/ButtonListConsulta/ButtonListConsulta';
import ModalProntuario from '../../components/ModalProntuario/ModalProntuario';



const MedicoConsultas = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [statusLista, setStatusLista] = useState("pendente");
  const [data, setData] = useState({
    caminhoImage: '',
    nomePaciente: '',
    idadePaciente: '',
    emailPaciente: ''
  });


  const exibirModal = () => {
    setShowModal(showModal ? false : true);
  }
  const NavigationNextPage = () => {
    navigation.navigate("PacienteProntuario",
      {
        nome: data.nomePaciente,
        imagem: data.caminhoImage,
        idade: data.idadePaciente,
        email: data.emailPaciente
      })

  }
  const pegarObj = (dados) => {
    setData({
      caminhoImage: dados.caminhoImage,
      nomePaciente: dados.nomePaciente,
      idadePaciente: dados.idadePaciente,
      emailPaciente: 'beta@senai.com'
    })
  }
  const Consultas = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',

      caminhoImage: 'https://github.com/Carlos-Augusto-Roque.png',
      nomePaciente: "Carlos Roque",
      idadePaciente: 30,
      tipoConsulta: 'Retina',
      horaConsulta: '14:00',
      status: 'pendente',
      abrirModal: exibirModal,


    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      caminhoImage: 'https://github.com/edualvesgt.png',
      nomePaciente: "Eduardo Alves",
      idadePaciente: 19,
      tipoConsulta: 'Retina',
      status: 'realizada',
      horaConsulta: '14:00',
      abrirModal: exibirModal,
      pegarObj: pegarObj
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      caminhoImage: 'https://github.com/ojuaum1.png',
      nomePaciente: "João Oliveira",
      idadePaciente: 30,
      tipoConsulta: 'Retina',
      status: 'cancelada',
      horaConsulta: '14:00',

    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      caminhoImage: 'https://github.com/RichardRichk.png',
      nomePaciente: "Richard",
      idadePaciente: 30,
      tipoConsulta: 'Retina',
      status: 'pendente',
      horaConsulta: '14:00',
      abrirModal: exibirModal,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d74',
      caminhoImage: 'https://github.com/RichardRichk.png',
      nomePaciente: "Richard",
      idadePaciente: 30,
      tipoConsulta: 'Retina',
      status: 'realizada',
      horaConsulta: '14:00',
      abrirModal: exibirModal,
    },
    

  ];


  return (
    <>


      <Container>
        <Header nameUser={"Artur Fiorentino"} caminhoImage={'https://github.com/fiorentinoartur.png'}></Header>
        <TitleMes>Novembro 2023</TitleMes>
        <CalendarStrip
          scrollable

          style={{ height: 100, width: '90%', }}
          dateNumberStyle={{ color: '#5F5C6B' }}
          dateNameStyle={{ color: '#ACABB7', marginBottom: 10 }}
          highlightDateNumberStyle={{ color: 'white', backgroundColor: '#60BFC5', height: 30, width: 30, borderRadius: 15, textAlignVertical: 'center' }}
          highlightDateNameStyle={{ color: '#60BFC5' }}  //Dia semana
          minDate={new Date(Date.now())}
          maxDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
          showMonth={false}

        />

        <ContainerBotoes>
          <ButtonListConsulta
            text={"Agendadas"}
            clickButton={statusLista == 'pendente' ?? false}
            onPress={() => {
              setStatusLista("pendente")

            }} />
          <ButtonListConsulta
            text={"Realizadas"}
            clickButton={statusLista == 'realizada' ?? false}
            onPress={() => {
              setStatusLista("realizada")

            }}
          />
          <ButtonListConsulta
            text={"Canceladas"}
            clickButton={statusLista == 'cancelada' ?? false}
            onPress={() => {
              setStatusLista("cancelada")
            }}
          />
        </ContainerBotoes>


        <FlatList
          data={Consultas}
          renderItem={({ item }) =>
            <CardConsulta
              tipoCard={item.status}
              status={item.status == statusLista ?? false}
              buscarId={item.buscarId}
              abrirModal={item.abrirModal}
              pegarObj={item.pegarObj}
              nomePaciente={item.nomePaciente}
              caminhoImage={item.caminhoImage}
              idadePaciente={item.idadePaciente}
              tipoConsulta={item.tipoConsulta}
              horaConsulta={item.horaConsulta} />}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.container}
        />



      </Container>


      {showModal && statusLista == "pendente" ? (
        <ModalConsultas exibirModal={exibirModal}></ModalConsultas>
      ) : showModal && statusLista == "realizada" ? (
        <ModalProntuario
          exibirModal={exibirModal}
          dados={data}
          navigation={NavigationNextPage}
        />
      ) : null}
    </>







  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',

    width: '90%',
    padding: 0,

  },
  item: {



  },
});

export default MedicoConsultas;



//   type ItemProps = {title: string};



