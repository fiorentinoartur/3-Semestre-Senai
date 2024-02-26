import React, { useState } from 'react';
import { ButtonTitle, Modal } from '../ModalConsultas/Style';
import { CotainerAgendarConsulta, LabelAgendamento, ModalPaciente, SelectClinic, TextInput, TitleAgendamento } from './Style';
import { Input } from '../Input/Input';
import { Image, TouchableOpacity } from 'react-native';
import { ContainerBotoes } from '../../screens/MedicoConsultas/Style';
import ButtonListNivelConsulta from '../ButtonLIstNivelConsulta/ButtonListNivelConsulta';
import { Button } from '../Button/Button';
import { LinkMediumAccount } from '../Links/Style';

const ModalHomePaciente = ({navigation, showModal}) => {
    const [statusLista, setStatusLista] = useState("rotina");
    return (
        <ModalPaciente>
            <CotainerAgendarConsulta>
                <TitleAgendamento>
                    Agendar Consulta
                </TitleAgendamento>
                <LabelAgendamento>Informe o tipo de Consulta</LabelAgendamento>
                <SelectClinic>
                    <TextInput>Tipo de Consulta</TextInput>
                    <Image source={require("../../assets/Images/IconArrowSelection.png")} />
                </SelectClinic>

                <LabelAgendamento>Qual o nível de Consulta</LabelAgendamento>
                <ContainerBotoes>
                    <ButtonListNivelConsulta
                        clickButton={statusLista == "rotina" ?? false}
                        onPress={() => {
                            setStatusLista("rotina")
                        }}
                        textButton="Rotina" />
                    <ButtonListNivelConsulta
                        clickButton={statusLista == "exame" ?? false}
                        onPress={() => {
                            setStatusLista("exame")
                        }}
                        textButton="Exame" />
                    <ButtonListNivelConsulta
                        clickButton={statusLista == "urgencia" ?? false}
                        onPress={() => {
                            setStatusLista("urgencia")
                        }}
                        textButton="Urgência" />
                </ContainerBotoes>
                <LabelAgendamento>Informe a localização desejada</LabelAgendamento>

                <Input placeholder="Informe a localização" />
                <Button>
                    <ButtonTitle onPress={() => {

                        navigation();
                    }}>Continuar</ButtonTitle>
                    
                </Button>
                <LinkMediumAccount onPress={showModal}>Cancelar</LinkMediumAccount>
            </CotainerAgendarConsulta>
        </ModalPaciente>
    );
};

export default ModalHomePaciente;