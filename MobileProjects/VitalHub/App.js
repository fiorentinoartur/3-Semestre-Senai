import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import Login from './src/screens/Login/Login';

//Instância do StackNavigator
const Stack = createNativeStackNavigator();
//import das fonts
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium } from '@expo-google-fonts/montserrat-alternates';
export default function App() {
  const[fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium
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
          </Stack.Navigator>
      </NavigationContainer>
  );
}

