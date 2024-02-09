import React from 'react';
import { CardContainer, Container, ContainerDoutorClaudio } from '../../components/Container/Style';
import { Header } from '../../components/Header/Header';
import { LinearGradient } from 'expo-linear-gradient';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import { FotoClaudio } from '../../components/Logo/Style';
import { TextQuickSand14 } from '../../components/Text/Text';
import { Title, Title12, Title12White, Title16white } from '../../components/Title/Style';
import { ContentAccount } from '../../components/ContentAccount/ContentAccount';
import CalendarStrip from 'react-native-calendar-strip';
import { ButtonConsulta, ButtonConsultaDiferente } from '../../components/Button/Button';



const MedicoConsultas = () => {
    return (
        <Container>

            <LinearGradient
                style={{
                    height: 144,
                    width: '100%',
                    borderRadius: 15,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginBottom: 20,
                }}
                colors={['#60BFC5', '#496BBA']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}>

                <ContainerDoutorClaudio>
                    <View>
                        <TextQuickSand14>Bem Vindo</TextQuickSand14>
                        <Title16white>Dr Claudio</Title16white>
                    </View>
                    <FotoClaudio source={require("../../assets/Images/claudioDoctor.png")} />
                </ContainerDoutorClaudio>
                <Image style={{ margin: 22 }} source={require("../../assets/Images/notification.png")} />
            </LinearGradient>
            <Title style={{ width: '90%' }}>Novembro 2023</Title>


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
                    <Image source={require("../../assets/Images/PersonGirl.png")}/>
            </CardContainer>
        </Container>



    );
};

export default MedicoConsultas;


