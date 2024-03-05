import React from 'react';
import { Container } from '../../components/Container/Style';
import MapView from 'react-native-maps';
import Marker from  'react-native-maps'
import { StyleSheet } from 'react-native';
const VerLocalConsulta = () => {

    const SenaiLocation = {
        latitude: -23.61511886409227,
        longitude:-46.570723260077095,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    }

    return (
<Container>
<MapView 
initialRegion={SenaiLocation}
style={styles.map} >
       <Marker ></Marker>
    </MapView>
</Container>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });
export default VerLocalConsulta;