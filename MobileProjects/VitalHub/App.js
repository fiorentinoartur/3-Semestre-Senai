import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Instância do StackNavigator
const Stack = createNativeStackNavigator();
export default function App() {
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
          </Stack.Navigator>
      </NavigationContainer>
  );
}

