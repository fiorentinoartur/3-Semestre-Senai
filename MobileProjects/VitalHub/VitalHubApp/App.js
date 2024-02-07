import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import Login from './src/screens/Login/Login';

//Instância do StackNavigator
const Stack = createNativeStackNavigator();
//import das fonts
import { useFonts, MontserratAlternates_700Bold,MontserratAlternates_600SemiBold, MontserratAlternates_500Medium} from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_600SemiBold,Quicksand_500Medium} from '@expo-google-fonts/quicksand';
import RecuperarSenha from './src/screens/RecuperarSenha/RecuperarSenha';
import CriarConta from './src/screens/CriarConta/CriarConta';
import RedefinirSenha from './src/screens/RedefinirSenha/RedefinirSenha';
import VerifiqueEmail from './src/screens/VerifiqueEmail/VerifiqueEmail';
export default function App() {
  const[fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_700Bold,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    Quicksand_600SemiBold,
    Quicksand_500Medium
  })
  if(!fontsLoaded && !fontsError){
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
          <Stack.Navigator>
              <Stack.Screen
              //nome da tela
              name='Navegacao'

              //Componente que será chamado
              component={Navegacao}

              //Titulo da tela
              options={{title: 'Navegacao'}}
              
              />
              <Stack.Screen
              //nome da tela
              name='Login'

              //Componente que será chamado
              component={Login}

              //Titulo da tela
              options={{title: 'Login'}}
              
              />
              <Stack.Screen
              //nome da tela
              name='RecuperarSenha'

              //Componente que será chamado
              component={RecuperarSenha}

              //Titulo da tela
              options={{title: 'Recuperar Senha'}}
              
              />
              <Stack.Screen
              //nome da tela
              name='CriarConta'

              //Componente que será chamado
              component={CriarConta}

              //Titulo da tela
              options={{title: 'Recuperar Senha'}}
              
              />
              <Stack.Screen
              //nome da tela
              name='RedefinirSenha'

              //Componente que será chamado
              component={RedefinirSenha}

              //Titulo da tela
              options={{title: 'Redefinir Senha'}}
              
              />
              <Stack.Screen
              //nome da tela
              name='VerifiqueEmail'

              //Componente que será chamado
              component={VerifiqueEmail}

              //Titulo da tela
              options={{title: 'Verificar Email'}}
              
              />

          </Stack.Navigator>
      </NavigationContainer>
  );
}

