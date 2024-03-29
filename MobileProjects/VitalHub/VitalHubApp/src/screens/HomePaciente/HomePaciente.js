import React, { useEffect, useState } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalMedico from '../../components/ModalMedico/ModalMedico';
import PrescricaoMedica from '../PrescricaoMedica/PrescricaoMedica';
import CardMedico from '../../components/CardMedico/CardMedico';
import CardMedicoHome from '../../components/CardMedicoHome/CardMedicoHome';

const HomePaciente = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false);
    const [showModalMedico, setShowModalMedico] = useState(false);
    const [showPrescricaoMedica, setShowPrescricaoMedica] = useState(false);
    const [dataMedico, setDataMedico] = useState({
        imageDoctor: " ",
        nameDoctor: " ",
    })
    const [statusLista, setStatusLista] = useState("pendente");


    const exibirModal = () => {
        setShowModal(showModal ? false : true);
    }
    const exibirModalMedico = () => {
            setShowModalMedico(showModalMedico ? false : true)
    }

    const exibirPrescricaoMedica = () => {
        setShowPrescricaoMedica(showPrescricaoMedica ? false : true)
    }
    const navigationToMaps = () => {
        navigation.navigate("VerLocalConsulta")
    }
    const navigationPrescricao = () => {
        navigation.navigate("PrescricaoMedica")
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
   

        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            caminhoImage: 'https://github.com/edualvesgt.png',
            nomePaciente: "Eduardo Alves",
            idadePaciente: 19,
            tipoConsulta: 'Retina',
            status: 'realizada',
            horaConsulta: '14:00',
            abrirPrescricao: navigationPrescricao,
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

        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d74',
            caminhoImage: 'https://github.com/RichardRichk.png',
            nomePaciente: "Richard",
            idadePaciente: 30,
            tipoConsulta: 'Retina',
            status: 'realizada',
            horaConsulta: '14:00',
            abrirPrescricao: navigationPrescricao,
        },


    ];
    return (
        <>
            <Container>
                <Header navigation={navigation} caminhoImage='https://github.com/LimaGustav.png' nameUser='Gustavo Lima'></Header>

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
                        <TouchableOpacity
                            onPress={() => {

                                setDataMedico({
                                    ...dataMedico,
                                    imageDoctor: item.caminhoImage,
                                    nameDoctor: item.nomePaciente
                                })
                                statusLista == "pendente" ? 
                                exibirModalMedico() : null;
                            }}>




                            <CardMedicoHome
                                tipoCard={item.status}
                                status={item.status == statusLista ?? false}
                                buscarId={item.buscarId}
                                abrirModal={item.abrirPrescricao}
                                pegarObj={item.pegarObj}
                                nomePaciente={item.nomePaciente}
                                caminhoImage={item.caminhoImage}
                                idadePaciente={item.idadePaciente}
                                tipoConsulta={item.tipoConsulta}
                                horaConsulta={item.horaConsulta} 
                                
                                />
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.container}
                />
                <ButtonEstetoscopio onPress={exibirModal}>
                    <Image source={require('../../assets/Images/iconEstetoscopio.png')} />
                </ButtonEstetoscopio>
            </Container>

        
            {showModal ? <ModalHomePaciente navigation={navigationNextPage} showModal={exibirModal} /> : null}
          
     {showModalMedico && statusLista === "pendente" ? (
        <ModalMedico dados={dataMedico} showModal={exibirModalMedico} navigation={navigationToMaps} />
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

export default HomePaciente;