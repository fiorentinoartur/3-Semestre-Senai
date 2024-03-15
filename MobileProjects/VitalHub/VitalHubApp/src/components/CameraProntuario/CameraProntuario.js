import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image, Alert } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library'
import { useEffect, useRef, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CameraProntuario = ({ showModal, setUriCameraCapture }) => {

    const cameraRef = useRef(null);
    const [photo, setPhoto] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [tipoCamera, setTipoCamera] = useState(Camera.Constants.Type.back);

    function ClearFoto() {
        setOpenModal(false);
        setPhoto(null);
    }

    async function CapturePhoto() {
        
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync();
            setPhoto(photo.uri)

            setOpenModal(true)
        }
    }

    async function SavePhoto() {
        if (photo) {
            await MediaLibrary.createAssetAsync(photo)
                .then(async () => {
                    Alert.alert('Sucesso', 'Foto salva na galeria');

                    await setUriCameraCapture(photo)

                    showModal();


                }).catch(error => {
                    alert("Erro ao salvar foto" + error)
                })
        }
    }
    useEffect(() => {
        (async () => {
            const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();

            const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();
        })()
    }, [])
    return (

        <View style={styles.container}>

            <Camera
                style={styles.camera}
                ref={cameraRef}
                type={tipoCamera}
                ratio='16:9'
            >
            </Camera>
            <TouchableOpacity onPress={() => CapturePhoto()} style={styles.btnCaptura}>
                <FontAwesome name='camera' size={23} color={'#fff'} />
            </TouchableOpacity>

            <Modal animationType='slide' transparent={false} visible={openModal}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                    <Image
                        style={{ width: '100%', height: 500, borderRadius: 10 }}
                        source={{ uri: photo }}
                    />

                    <View style={{ margin: 15, flexDirection: 'row' }}>

                        <TouchableOpacity onPress={() => ClearFoto()} style={styles.btnCancel}>
                            <FontAwesome name='trash' size={23} color={'#ff0000'} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => SavePhoto()} style={styles.btnUpload}>
                            <FontAwesome name='save' size={23} color={'#121212'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
        width: '100%',
        height: '80%',

    },
    btnCaptura: {
        margin: 20,
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnCancel: {
        padding: 20,
        borderRadius: 15,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnUpload: {
        padding: 20,
        borderRadius: 15,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default CameraProntuario;