import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { Container } from '../../components/Container/Style';
import { Logo } from '../../components/Logo/Style';
import { Title, TitleAccount } from '../../components/Title/Style';
import { Input } from '../../components/Input/Input';
import { LinkMedium, LinkMediumAccount } from '../../components/Links/Style';
import { Button, ButtonGoogle, ButtonTitle, ButtonTitleGoogle } from '../../components/Button/Button';
import { ContentAccount } from '../../components/ContentAccount/ContentAccount';


const Login = ({navigation}) => {
    return (
  <Container>
    <Logo source={require("../../assets/Images/LogoBlue.png")}/>
    <Title >Entrar ou criar conta</Title>
    
   <Input placeholder="Usuário ou E-mail" />
   <Input 
   placeholder="Senha" 
   secureTextEntry={true}
   />
     
  
    <LinkMedium onPress={() => navigation.navigate("RecuperarSenha")}>Esqueceu sua senha</LinkMedium>

    <Button>
       <ButtonTitle onPress={() => navigation.navigate("MedicoConsultas")}>Entrar</ButtonTitle> 
    </Button>

    <ButtonGoogle>
      <Image source={require("../../assets/Images/GOOGLE.png")} />
        <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
    </ButtonGoogle>
    
    <ContentAccount>
        <TitleAccount>Não tem uma Conta?  <LinkMediumAccount onPress={() => navigation.navigate("CriarConta")}>Crie Agora</LinkMediumAccount></TitleAccount>
    </ContentAccount>
  </Container>
    );
};

export default Login;