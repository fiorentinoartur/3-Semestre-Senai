import React from 'react';
import { BtnCancelarConsulta, ButtonTitle, CardModal, LinkCancelarConsulta, Modal } from './Style';
import { Title } from '../Title/Style';
import { TextQuickSand } from '../Text/Text';
import * as Notifications from "expo-notifications"

Notifications.requestPermissionsAsync();

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false
    })
})

const ModalConsultas = ({ exibirModal }) => {
    const handleCallNotifications = async () => {
        const {status} = await Notifications.getPermissionsAsync();

        if(status !== "granted")
        {
            alert("Você não ativou as notificações");
            return;
        }

        // const {sound: playSound} = await Audio.Sound.createAsync(

        // )

        // await playSound.playSound();

        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Information",
                body: "Consulta cancelada com sucesso!"
            },
            trigger: null
        })
    }
    return (
        <Modal>
            <CardModal>
                <Title>Cancelar Consulta</Title>
                <TextQuickSand>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</TextQuickSand>
                <BtnCancelarConsulta onPress={() => {
                    handleCallNotifications();
                    exibirModal();
                }}>
                    <ButtonTitle>Confrmar</ButtonTitle>
                </BtnCancelarConsulta>
                <LinkCancelarConsulta
                    onPress={exibirModal}
                >Cancelar</LinkCancelarConsulta>
            </CardModal>
        </Modal>
    );
};

export default ModalConsultas;