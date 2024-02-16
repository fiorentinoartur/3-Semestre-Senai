import React, { useState } from 'react';
import { CardContainer, Container, ContainerDoutorClaudio } from '../../components/Container/Style';
import { Header } from '../../components/Header/Header';
import { LinearGradient } from 'expo-linear-gradient';
import { Animated, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { FotoClaudio } from '../../components/Logo/Style';
import { TextQuickSand, TextQuickSand14, TextQuickSand14Gray, TextQuickSand14GrayMedium, TextQuickSand14GraySemiBold, TextQuickSand14Green } from '../../components/Text/Text';
import { Title, Title12, Title12White, Title16, Title16white } from '../../components/Title/Style';
import { ContentAccount } from '../../components/ContentAccount/ContentAccount';
import CalendarStrip from 'react-native-calendar-strip';
import { BtnCancelarConsulta, ButtonConsulta, ButtonConsultaDiferente, ButtonHour, ButtonTitle } from '../../components/Button/Button';
import { LinkCancel, LinkCancelarConsulta } from '../../components/Links/Style';
import { TitleMes } from '../../components/Header/Style';
import CardConsulta from '../../components/CardConsulta/CardConsulta';
import ModalConsultas from '../../components/ModalConsultas/ModalConsultas';



const MedicoConsultas = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false);

    const exibirModal = () => {
        setShowModal(showModal ? false : true);
    }
    return (
        <>


            <Container>
                <Header></Header>
                <TitleMes>Novembro 2023</TitleMes>
                <CalendarStrip
                    scrollable

                    style={{ height: 100, width: '90%' }}
                    dateNumberStyle={{ color: '#5F5C6B' }}
                    dateNameStyle={{ color: '#ACABB7', marginBottom: 10 }}
                    highlightDateNumberStyle={{ color: 'white', backgroundColor: '#60BFC5', height: 30, width: 30, borderRadius: 15, textAlignVertical: 'center' }}
                    highlightDateNameStyle={{ color: '#60BFC5' }}  //Dia semana
                    minDate={new Date(Date.now())}
                    maxDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
                    showMonth={false}

                />

                <View style={{ flexDirection: 'row', gap: 10, marginBottom: 30 }}>
                    <ButtonConsulta>
                        <Title12White>Agendadas</Title12White>
                    </ButtonConsulta>
                    <ButtonConsultaDiferente>
                        <Title12>Realizadas</Title12>
                    </ButtonConsultaDiferente>
                    <ButtonConsultaDiferente>
                        <Title12>Canceladas</Title12>
                    </ButtonConsultaDiferente>
                </View>
               

                    <CardConsulta
                        caminhoImage={'https://github.com/Carlos-Augusto-Roque.png'}
                        nomePaciente={"Carlos Roque"}
                        idadePaciente={30}
                        tipoConsulta={'Retina'}
                        horaConsulta={'14:00'}
                        abrirModal={exibirModal}
                    />
                    <CardConsulta
                        caminhoImage={'https://github.com/edualvesgt.png'}
                        nomePaciente={"Eduardo Alves"}
                        idadePaciente={"19"}
                        tipoConsulta={"Rotina"}
                        horaConsulta={"16:00"}
                        abrirModal={exibirModal}
                    />
                    <CardConsulta
                        caminhoImage={'https://github.com/ojuaum1.png'}
                        nomePaciente={"João Oliveira"}
                        idadePaciente={"19"}
                        tipoConsulta={"Rotina"}
                        horaConsulta={"17:00"}
                        abrirModal={exibirModal}
                    />
                    <CardConsulta
                        caminhoImage={'https://github.com/RichardRichk.png'}
                        nomePaciente={"Richard Senai"}
                        idadePaciente={"19"}
                        tipoConsulta={"Rotina"}
                        horaConsulta={"17:00"}
                        abrirModal={exibirModal}
                    />
            
            </Container>
          

            {showModal ? (
                <ModalConsultas exibirModal={exibirModal}></ModalConsultas>
            ) : null}
        </>







    );
};

export default MedicoConsultas;


