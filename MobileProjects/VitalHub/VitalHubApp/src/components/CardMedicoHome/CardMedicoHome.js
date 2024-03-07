
import React, { useEffect, useState } from 'react';
import { BotaoHora, CardContainer, ContainerData, DataPaciente, IdadePaciente, ImagePaciente, LinkCancel, NamePaciente, TextHour, TipoConsulta } from '../CardConsulta/Style';
import { BoxUser } from '../Header/Style';

const CardMedicoHome = ({caminhoImage, nomePaciente, idadePaciente, tipoConsulta, horaConsulta, abrirModal, status, tipoCard, pegarObj}) => {
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
                               tipoCard == "realizada" ? abrirModal()   : null        
                             }}
                        >
                              {tipoCard == 'pendente' ? 'Cancelar' : tipoCard == 'realizada' ? 'Ver prontuario' : null}
                        </LinkCancel>
                    </CardContainer>) : null }
                  
            </>
    );
};



export default CardMedicoHome;