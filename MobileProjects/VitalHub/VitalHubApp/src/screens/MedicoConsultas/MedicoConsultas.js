import React from 'react';
import { Container } from '../../components/Container/Style';
import { Header } from '../../components/Header/Header';
import LinearGradient from 'react-native-linear-gradient';

const MedicoConsultas = () => {
    return (
        <Container>
           <LinearGradient
           style={{
            height: 45, 
            width: 100, 
            marginTop: 15, 
            borderRadius: 5}}
            colors={['#A62A5C','#6A2597']}>
           </LinearGradient>
        </Container>
    );
};

export default MedicoConsultas;