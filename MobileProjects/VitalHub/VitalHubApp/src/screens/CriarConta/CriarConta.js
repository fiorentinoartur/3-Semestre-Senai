import React from 'react';
import { Container } from '../../components/Container/Style';
import { Logo } from '../../components/Logo/Style';
import { Title } from '../../components/Title/Style';
import { TextQuickSand } from '../../components/Text/Text';
import { Input } from '../../components/Input/Input';
import { Button, ButtonTitle } from '../../components/Button/Button';
import { LinkMediumAccount } from '../../components/Links/Style';

const CriarConta = ({navigation}) => {
    return (
        <Container>
            <Logo source={require("../../assets/Images/LogoBlue.png")} />
            <Title>Criar Conta</Title>
            <TextQuickSand>Insira seu endereço de e-mail e senha para realizar seu cadastro.</TextQuickSand>
            <Input placeholder={"Usuário ou Email"}/>
            <Input placeholder={"Senha"}/>
            <Input placeholder={"Confirmar Senha"}/>
            <Button onPress={() => navigation.navigate("PerfilCadastro")}><ButtonTitle>Cadastrar</ButtonTitle></Button>
            <LinkMediumAccount onPress={() => navigation.navigate("Login")}>Cancelar</LinkMediumAccount>
        </Container>
    );
};

export default CriarConta;