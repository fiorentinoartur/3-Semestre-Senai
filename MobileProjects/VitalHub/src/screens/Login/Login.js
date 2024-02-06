import React from 'react';
import { Text } from 'react-native';
import { Container } from '../../components/Container/Style';
import { Logo } from '../../components/Logo/Style';
import { Title } from '../../components/Title/Style';
import { Input } from '../../components/Input/Input';
import { LinkMedium } from '../../components/Links/Style';


const Login = () => {
    return (
  <Container>
    <Logo source={require("../../assets/Images/LogoBlue.png")}/>
    <Title >Entrar ou crira conta</Title>
    
   <Input placeholder="Usuário ou E-mail" />
   <Input 
   placeholder="Senha" 
   secureTextEntry={true}
   />
     
  
    <LinkMedium>Esqueceu sua senha</LinkMedium>

    {/*
    <Button>
       <ButtonTitle></ButtonTitle> 
    </Button>

    <ButtonGoogle>
        <ButtonTitleGoogle></ButtonTitleGoogle>
    </ButtonGoogle>

    <ContentAccount>
        <TextAccount></TextAccount>
    </ContentAccount> */}
  </Container>
    );
};

export default Login;