import React from 'react';
import { Container } from '../../components/Container/Style';
import { Logo } from '../../components/Logo/Style';
import { Title } from '../../components/Title/Style';
import { TextCode, TextQuickSand } from '../../components/Text/Text';
import { LinkMediumAccount } from '../../components/Links/Style';
import { ContentAccount } from '../../components/ContentAccount/ContentAccount';
import { Button, ButtonTitle, ButtonsNumber } from '../../components/Button/Button';
import { InputCode } from '../../components/Input/Input';

const VerifiqueEmail = ({navigation}) => {
    return (
        <Container>
            <Logo source={require("../../assets/Images/LogoBlue.png")} />
            <Title>Verifique seu Email</Title>
            <TextQuickSand>Digite o código de 4 dígitos enviado para
                <LinkMediumAccount> username@email.com</LinkMediumAccount>
            </TextQuickSand>
            <ContentAccount>
                <InputCode placeholder="0"/>
                <InputCode placeholder="0"/>
                <InputCode placeholder="0"/>
                <InputCode placeholder="0"/>
            </ContentAccount>
            <Button onPress={() => navigation.navigate("RedefinirSenha")}><ButtonTitle>Entrar</ButtonTitle></Button>
            <LinkMediumAccount>Reenviar Código</LinkMediumAccount>
        </Container>
    );
};

export default VerifiqueEmail;