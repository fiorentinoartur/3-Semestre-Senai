import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container } from './src/components/Container/Container';
import { BtnDecrement, BtnIncrement, Button } from './src/components/Button/Button';
import { Title, TitleBtnDecrement, TitleBtnIncrement } from './src/components/Title/Title';

export default function App() {

  const [count, setCount] = useState(0);
  useEffect(() =>{
    console.warn(`Contador atualizado ${count}`);
  },[count])
  return (
    <Container>

      <Title>Contador: {count}</Title>
   <BtnIncrement onPress={() => {
        setCount(count + 1)
      }}>
    <TitleBtnIncrement>
      Incrementar
    </TitleBtnIncrement>
   </BtnIncrement>

<BtnDecrement  onPress={() => {
        if (count > 0) {
          setCount(count - 1)
        }
      }}>
      <TitleBtnDecrement>
        Decrementar
      </TitleBtnDecrement>
      </BtnDecrement>
    </Container>
 

  );
}

