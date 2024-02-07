import React from 'react';
import { Text } from 'react-native';
import { Container } from '../../components/Container/Style';
import { Logo } from '../../components/Logo/Style';
import { Title } from '../../components/Title/Style';
import { TextQuickSand } from '../../components/Text/Text';
import { Input } from '../../components/Input/Input';
import { Button, ButtonTitle } from '../../components/Button/Button';

const RecuperarSenha = ({navigation}) => {
    return (
     <Container>
        <Logo source={require("../../assets/Images/LogoBlue.png")}/>
        <Title>Recuperar Senha</Title>
        <TextQuickSand>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</TextQuickSand>
        <Input placeholder="Usuário ou senha: "/>

        <Button onPress={() => navigation.navigate("VerifiqueEmail")}>
            <ButtonTitle>Continuar</ButtonTitle>
        </Button>
     </Container>
    );
};

export default RecuperarSenha;