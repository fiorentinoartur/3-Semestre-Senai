import React, { useEffect, useRef, useState } from 'react';
import { Container, ContainerHeader } from '../../components/Container/Style';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, watchPositionAsync, LocationAccuracy } from 'expo-location'
import { ContainerVerClinica, LabelVerClinica, TextVerClincia } from './Style';
import { TitlePaciente } from '../MedicoConsultas/Style';
import { TextQuickSand16 } from '../../components/Text/Text';
import { InputCep, InputPerfil } from '../../components/Input/Input';
import { ContetnCidadeCep } from '../../components/ContentAccount/ContentAccount';
import { mapskey } from '../../utils/mapsApiKey';
const VerLocalConsulta = () => {

    const mapReference = useRef(null)

    //variavel que armazena a posiciao atual
    const [initialPosition, setInitialPosition] = useState(null);
    //variavel que armazena a posicao final/destino
    const [finalPosition, setFinalPosition] = useState(
        {
            latitude: -23.6953808353319,
            longitude: -46.53272876195503,
        }
    );

    //Funcao para capturar a localizacaoe
    async function CapturarLocalizacao() {
        //Funcao que solicita permissao ao usuario, para acessar algo em primeiro plano
        const granted = await requestForegroundPermissionsAsync();

        //granted true/false

        if (granted) {

            //Funcao que captura a posicao do Usuario
            const captureLocation = await getCurrentPositionAsync()

            setInitialPosition(captureLocation)
        }

    }


    useEffect(() => {
        CapturarLocalizacao()
        //monitora em tempo real a localizao
        watchPositionAsync({
            accuracy: LocationAccuracy.Highest,
            timeInterval: 1000,
            distanceInterval: 1,

        }, async (response) => {
            //recebe e guarda a nova localizacao
            await setInitialPosition(response)

            //anima a camera do mapa para a nova localizao 
            mapReference.current?.animateCamera({
                pitch: 60,
                center: response.coords
            })
            console.log(response);
        }, [1000])
    }, [1000])

    useEffect(() => {
        RecarregarVisualizacaoMapa()
       }, [initialPosition])
    async function RecarregarVisualizacaoMapa(){
        if(mapReference.current && initialPosition){
          await mapReference.current.fitToCoordinates(
            [
             {latitude: initialPosition.coords.latitude, longitude: initialPosition.coords.longitude}, 
             {latitude: finalPosition.latitude, longitude: finalPosition.longitude}
            ],
             {
              edgePadding: {top: 60, right: 60, bottom:60, left: 60},
              animated : true
             }
          )
        }
      }



    return (
        <Container>
            {initialPosition != null ? (
                <>
                <MapView
                    ref={mapReference}
                    initialRegion={{
                        latitude: initialPosition.coords.latitude,
                        longitude: initialPosition.coords.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                    style={styles.map} >

                    <Marker
                        coordinate={{ latitude: initialPosition.coords.latitude, longitude: initialPosition.coords.longitude }}
                        image={require("../../assets/Images/PinMapa.png")}
                    />
                    <MapViewDirections
                        origin={initialPosition.coords}
                        destination={
                            {
                                latitude: -23.6953808353319,
                                longitude: -46.53272876195503,
                                latitudeDelta: 0.01,
                                longitudeDelta: 0.01,
                            }
                        }
                        strokeWidth={5}
                        strokeColor='#496BBA'
                        apikey={mapskey}
                    />
                    <Marker
                        coordinate={{ latitude: finalPosition.latitude, longitude: finalPosition.longitude }}
                        image={require("../../assets/Images/PinMapa.png")}
                    />

                </MapView>
                
            <ContainerVerClinica>
                <TitlePaciente>Clinica Natureh</TitlePaciente>
                <TextVerClincia>São Paulo, SP</TextVerClincia>
                <TextQuickSand16>Rua: </TextQuickSand16>
                <InputPerfil />
                <ContetnCidadeCep>
                    <View >
                        <TextQuickSand16>Número: </TextQuickSand16>
                        <InputCep />
                    </View>
                    <View>
                        <TextQuickSand16>Bairro: </TextQuickSand16>
                        <InputCep />
                    </View>
                </ContetnCidadeCep>
            </ContainerVerClinica>
                </>
            ) : (
                <>
                <ContainerHeader>
                    <Text>Localização não encontrada</Text>
                    <ActivityIndicator />
                </ContainerHeader>
                </>
            )}

        </Container>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '50%',
    },
});
export default VerLocalConsulta;
