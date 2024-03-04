import React, { useEffect, useState } from 'react';
import { BotaoHora, CardContainer, ContainerData, DataPaciente, IdadePaciente, ImagePaciente, LinkCancel, NamePaciente, TextHour, TipoConsulta } from './Style';
import { BoxUser } from '../Header/Style';

const CardConsulta = ({ caminhoImage, nomePaciente, idadePaciente, tipoConsulta, horaConsulta, abrirModal, status, tipoCard, pegarObj }) => {

const[dados, setDados] =useState({
    caminhoImage: '',
    nomePaciente: '',
    idadePaciente:'',
})

useEffect(() => {
    if (tipoCard === 'realizada' && dados.caminhoImage != "") {
    console.warn(dados);
    pegarObj(dados)
}
}, [dados]);
    return (

<>
{status ? (  <CardContainer>
            <BoxUser>
                <ImagePaciente source={{ uri: caminhoImage }} />
                <DataPaciente>
                    <NamePaciente>{nomePaciente}</NamePaciente>
                    <ContainerData>
                        <IdadePaciente>{idadePaciente}</IdadePaciente>
                        <TipoConsulta>{tipoConsulta}</TipoConsulta>
                    </ContainerData>
                    <BotaoHora
                    tipoCard={tipoCard}
                    >
                        <TextHour tipoCard={tipoCard}>{horaConsulta}</TextHour>
                    </BotaoHora>
                </DataPaciente>
            </BoxUser>
            <LinkCancel
                 tipoCard={tipoCard}
                 onPress={() => {
                    abrirModal(),
                    setDados(prevState => ({ 
                    ...prevState,
                    caminhoImage: caminhoImage,
                    nomePaciente: nomePaciente,
                    idadePaciente:idadePaciente
                    }));               
                 }}
            >
                  {tipoCard == 'pendente' ? 'Cancelar' : tipoCard == 'realizada' ? 'Ver prontuario' : null}
            </LinkCancel>
        </CardContainer>) : null }
      
</>

    );
};

export default CardConsulta;