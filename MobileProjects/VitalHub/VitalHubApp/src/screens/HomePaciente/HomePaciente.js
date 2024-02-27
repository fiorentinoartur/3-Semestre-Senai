import React, { useState } from 'react';
import { Container } from '../../components/Container/Style';
import Header from '../../components/Header/Header';
import { TitleMes } from '../../components/Header/Style';
import CalendarStrip from 'react-native-calendar-strip';
import { ContainerBotoes } from '../MedicoConsultas/Style';
import ButtonListConsulta from '../../components/ButtonListConsulta/ButtonListConsulta';
import { FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import CardConsulta from '../../components/CardConsulta/CardConsulta';
import { ButtonEstetoscopio } from './Style';
import ModalHomePaciente from '../../components/ModalHomePaciente/ModalHomePaciente';
import CalendarHome from '../../components/CalendarHome/CalendarHome';

const HomePaciente = ({navigation}) => {
    const [showModal, setShowModal] = useState(false);
    const [statusLista, setStatusLista] = useState("pendente");
    const exibirModal = () => {
        setShowModal(showModal ? false : true);
    }
    const navigationNextPage = () => {
        navigation.navigate("SelecionarClinica")
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
                <Header caminhoImage='https://github.com/LimaGustav.png' nameUser='Gustavo Lima'></Header>
                
    <CalendarHome />
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
                <ButtonEstetoscopio onPress={exibirModal}>
                    <Image source={require('../../assets/Images/iconEstetoscopio.png')} />
                </ButtonEstetoscopio>
            </Container>

           {showModal ? <ModalHomePaciente navigation={navigationNextPage}  showModal={exibirModal}/> : null  } 
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

export default HomePaciente;