import React, { useState } from 'react';
import { CardContainer, Container, ContainerDoutorClaudio } from '../../components/Container/Style';
import { Header } from '../../components/Header/Header';
import { LinearGradient } from 'expo-linear-gradient';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import { FotoClaudio } from '../../components/Logo/Style';
import { TextQuickSand, TextQuickSand14, TextQuickSand14Gray, TextQuickSand14GrayMedium, TextQuickSand14GraySemiBold, TextQuickSand14Green } from '../../components/Text/Text';
import { Title, Title12, Title12White, Title16, Title16white } from '../../components/Title/Style';
import { ContentAccount } from '../../components/ContentAccount/ContentAccount';
import CalendarStrip from 'react-native-calendar-strip';
import { BtnCancelarConsulta, ButtonConsulta, ButtonConsultaDiferente, ButtonHour, ButtonTitle } from '../../components/Button/Button';
import { LinkCancel, LinkCancelarConsulta } from '../../components/Links/Style';
import { CardModal, Modal } from '../../components/ModalCancelarConsulta/ModalCancelar/MoadalCancelar';



const MedicoConsultas = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false);

    const exibirModal = () => {
        setShowModal(showModal ? false : true);
    }
    return (
        <View>
            <Container>
                <Header>
                    <ContainerDoutorClaudio>
                        <View>
                            <TextQuickSand14>Bem Vindo</TextQuickSand14>
                            <Title16white>Dr Claudio</Title16white>
                        </View>
                        <FotoClaudio source={require("../../assets/Images/claudioDoctor.png")} />
                    </ContainerDoutorClaudio>
                    <Image style={{ margin: 22 }} source={require("../../assets/Images/notification.png")} />

                    <Title style={{ width: '90%' }}>Novembro 2023</Title>
                </Header>




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
                <CardContainer>
                    <Image source={require("../../assets/Images/PersonGirl.png")} />
                    <View style={{ justifyContent: 'space-between', height: '100%' }}>
                        <Title16>Niccole Sarga</Title16>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <TextQuickSand14Gray>22 anos</TextQuickSand14Gray>
                            <TextQuickSand14GraySemiBold>Retina</TextQuickSand14GraySemiBold>
                        </View>
                        <ButtonHour>
                            <Image source={require("../../assets/Images/clock.png")} />
                            <TextQuickSand14Green>14:00</TextQuickSand14Green>
                        </ButtonHour>
                    </View>
                    <View style={{ height: '100%', justifyContent: 'flex-end' }}>
                        <LinkCancel
                            onPress={() => exibirModal()}
                        >Cancelar</LinkCancel>

                    </View>
                </CardContainer>
            </Container>

            {showModal ? (
                <Modal>
                    <CardModal>
                        <Title>Cancelar Consulta</Title>
                        <TextQuickSand>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</TextQuickSand>
                        <BtnCancelarConsulta>
                            <ButtonTitle>Confrmar</ButtonTitle>
                        </BtnCancelarConsulta>
                        <LinkCancelarConsulta
                            onPress={() => exibirModal()}
                        >Cancelar</LinkCancelarConsulta>
                    </CardModal>
                </Modal>
            ) : null}




        </View>



    );
};

export default MedicoConsultas;


