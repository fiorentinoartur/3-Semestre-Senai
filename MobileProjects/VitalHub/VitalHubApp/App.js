import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import Login from './src/screens/Login/Login';
//Instância do StackNavigator
const Stack = createNativeStackNavigator();
//import das fonts
import { useFonts, MontserratAlternates_700Bold, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_600SemiBold, Quicksand_500Medium, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import RecuperarSenha from './src/screens/RecuperarSenha/RecuperarSenha';
import CriarConta from './src/screens/CriarConta/CriarConta';
import RedefinirSenha from './src/screens/RedefinirSenha/RedefinirSenha';
import VerifiqueEmail from './src/screens/VerifiqueEmail/VerifiqueEmail';
import PerfilCadastro from './src/screens/PerfilCadastro/PerfilCadastro';
import MedicoConsultas from './src/screens/MedicoConsultas/MedicoConsultas';
import PacienteProntuario from './src/screens/PacienteProntuario/PacienteProntuario';
import HomePaciente from './src/screens/HomePaciente/HomePaciente';
import SelecionarClinica from './src/screens/SelecionarClinica/SelecionarClinica';
import SelecionarMedico from './src/screens/SelecionarMedico/SelecionarMedico';
import SelecionarData from './src/screens/SelecionarData/SelecionarData';
import VerLocalConsulta from './src/screens/VerLocalConsulta/VerLocalConsulta';
import { Main } from './src/screens/Main/Main';

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_700Bold,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    Quicksand_600SemiBold,
    Quicksand_500Medium,
    Quicksand_400Regular
  })
  if (!fontsLoaded && !fontsError) {
    return null;
  }
  
  return (
    //Navegação
    //Container
    //StackNavigator
    //StackScreen

    //Envolve a estrutura da navegação 
    <NavigationContainer>
      {/* Componente para navegação */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen 
        name='Main'
        component={Main}
        />
        <Stack.Screen
          //nome da tela
          name='Navegacao'

          //Componente que será chamado
          component={Navegacao}

          //Titulo da tela
          options={{ title: 'Navegacao' }}

        />
        <Stack.Screen
name='HomePaciente'
component={HomePaciente}
options={{title: 'Home Paciente'}}
        />
        <Stack.Screen
          //nome da tela
          name='Login'

          //Componente que será chamado
          component={Login}

          //Titulo da tela
          options={{ title: 'Login' }}

        />
        <Stack.Screen
          //nome da tela
          name='RecuperarSenha'

          //Componente que será chamado
          component={RecuperarSenha}

          //Titulo da tela
          options={{ title: 'Recuperar Senha' }}

        />
        <Stack.Screen
          //nome da tela
          name='CriarConta'

          //Componente que será chamado
          component={CriarConta}

          //Titulo da tela
          options={{ title: 'Recuperar Senha' }}

        />
        <Stack.Screen
          //nome da tela
          name='RedefinirSenha'

          //Componente que será chamado
          component={RedefinirSenha}

          //Titulo da tela
          options={{ title: 'Redefinir Senha' }}

        />
        <Stack.Screen
          //nome da tela
          name='VerifiqueEmail'

          //Componente que será chamado
          component={VerifiqueEmail}

          //Titulo da tela
          options={{ title: 'Verificar Email' }}

        />
        <Stack.Screen
          //nome da tela
          name='PerfilCadastro'

          //Componente que será chamado
          component={PerfilCadastro}

          //Titulo da tela
          options={{ title: 'Cadastrar Perfil' }}

        />
        <Stack.Screen
          //nome da tela
          name='MedicoConsultas'

          //Componente que será chamado
          component={MedicoConsultas}

          //Titulo da tela
          options={{ title: 'Cadastrar Perfil' }}

        />

        <Stack.Screen
        name='PacienteProntuario'

        component={PacienteProntuario}

        options={{title: 'Cadastrar Paciente'}}

        />

        <Stack.Screen
        name='SelecionarClinica'

        component={SelecionarClinica}

        options={{title: 'Selecionar Clinica'}}

        />
        <Stack.Screen
        name='SelecionarMedico'

        component={SelecionarMedico}

        options={{title: 'Selecionar Medico'}}

        />

        <Stack.Screen
        name='SelecionarData'

        component={SelecionarData}

        options={{title: 'Selecionar Data'}}
        />

        <Stack.Screen
        name='VerLocalConsulta'

        component={VerLocalConsulta}

        options={{title: 'Ver Local da Consulta'}}
        />

      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}

