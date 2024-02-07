import React from 'react';
import { Container } from '../../components/Container/Style';
import { Logo } from '../../components/Logo/Style';
import { Title } from '../../components/Title/Style';
import { TextQuickSand } from '../../components/Text/Text';
import { Input } from '../../components/Input/Input';
import { Button, ButtonTitle } from '../../components/Button/Button';

const RedefinirSenha = () => {
    return (
   <Container>
                    <Logo source={require("../../assets/Images/LogoBlue.png")}/>
                    <Title>Redefinir Senha</Title>
                    <TextQuickSand>
                                Insira e confirme a sua nova senha
                    </TextQuickSand>
                    <Input placeholder={"Nova Senha"}/>
                    <Input placeholder={"Confirmar nova Senha"}/>
                    <Button>
                        <ButtonTitle>Confirmar Nova Senha</ButtonTitle>
                    </Button>

   </Container>
    );
};

export default RedefinirSenha;