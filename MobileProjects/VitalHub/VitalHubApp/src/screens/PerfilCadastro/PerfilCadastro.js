import React from 'react';
import { Container, ContainerEmail, ContainerFotoEmail } from '../../components/Container/Style';
import { ButtonTitle } from '../../components/Button/Button';
import { HeaderPerson } from '../../components/HeaderPerson/HeaderPerson';
import { TextQuickSand14, TextQuickSand16 } from '../../components/Text/Text';
import { Title16 } from '../../components/Title/Style';
import { Input, InputCep, InputPerfil } from '../../components/Input/Input'
import { ContentAccount, ContetnCidadeCep } from '../../components/ContentAccount/ContentAccount';
import { ScrollView, View } from 'react-native';

const PerfilCadastro = () => {
    return (
        <ScrollView>
            <Container>

                <ContainerFotoEmail>
                    <HeaderPerson source={require("../../assets/Images/Person.png")} />
                    <ContainerEmail>
                        <Title16>Artur Fiorentino</Title16>
                        <TextQuickSand14>artur@senai.com</TextQuickSand14>
                    </ContainerEmail>
                </ContainerFotoEmail>
                <TextQuickSand16>Data de nascimento: </TextQuickSand16>
                <InputPerfil />
                <TextQuickSand16>CPF: </TextQuickSand16>
                <InputPerfil />
                <TextQuickSand16>Endereço: </TextQuickSand16>
                <InputPerfil />

                <ContetnCidadeCep>
                    <View >
                        <TextQuickSand16>CEP:</TextQuickSand16>
                        <InputCep />
                    </View>
                    <View>
                        <TextQuickSand16>Cidade:</TextQuickSand16>
                        <InputCep />
                    </View>
                </ContetnCidadeCep>
            </Container>
        </ScrollView>
    );
};

export default PerfilCadastro;