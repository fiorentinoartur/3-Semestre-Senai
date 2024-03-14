import React, { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { Container } from '../Container/Style';
import { StyleSheet } from 'react-native';
import * as MediaLibrary from 'expo-media-library'

const CameraProntuario = () => {

    const cameraRef = useRef(null);
    const [tipoCamera, setTipoCamera] = useState(Camera.Constants.Type.back);
    useEffect(() => {
        (async () => {
            const {status: cameraStatus} = await Camera.requestCameraPermissionsAsync();

            const{status: mediaStatus} = await MediaLibrary.requestPermissionsAsync();
        })()
    },[])
    return (
        <Container>
            <Camera
                style={styles.camera}
                useRef={cameraRef}
                type={tipoCamera}
                ratio='16:9'
            >

            </Camera>
        </Container>
    );
};

const styles = StyleSheet.create({
    camera: {
        flex: 1,
        width: '100%',
        height: '80%'
    }
})

export default CameraProntuario;