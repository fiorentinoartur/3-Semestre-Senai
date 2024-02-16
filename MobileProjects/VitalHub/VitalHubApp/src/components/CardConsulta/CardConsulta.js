import React, { useState } from 'react';
import { BotaoHora, CardContainer, ContainerData, DataPaciente, IdadePaciente, ImagePaciente, LinkCancel, NamePaciente, TextHour, TipoConsulta } from './Style';
import { Image, View } from 'react-native';
import { Title16 } from '../Title/Style';
import { TextQuickSand14Gray, TextQuickSand14GraySemiBold, TextQuickSand14Green } from '../Text/Text';

import { ButtonHour } from '../Button/Button';
import { BoxUser } from '../Header/Style';

const CardConsulta = ({ caminhoImage, nomePaciente, idadePaciente, tipoConsulta, horaConsulta, abrirModal }) => {
    const [showModal, setShowModal] = useState(false);

    const exibirModal = () => {
        setShowModal(showModal ? false : true);
    }
    return (

<>
        <CardContainer>
            <BoxUser>
                <ImagePaciente source={{ uri: caminhoImage }} />
                <DataPaciente>
                    <NamePaciente>{nomePaciente}</NamePaciente>
                    <ContainerData>
                        <IdadePaciente>{idadePaciente}</IdadePaciente>
                        <TipoConsulta>{tipoConsulta}</TipoConsulta>
                    </ContainerData>
                    <BotaoHora>
                        <TextHour>{horaConsulta}</TextHour>
                    </BotaoHora>
                </DataPaciente>
            </BoxUser>
            <LinkCancel
                onPress={abrirModal}
            >
                Cancelar
            </LinkCancel>
        </CardContainer>
</>

    );
};

export default CardConsulta;