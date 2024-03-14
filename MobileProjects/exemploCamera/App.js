import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image, Alert } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library'
import { useEffect, useRef, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const [photo, setPhoto] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [tipoCamera, setTipoCamera] = useState(Camera.Constants.Type.back);


/*
Quando salvar a foto - poder apagar da galeria
Botao para ativar o flash
forma de recarregar o autofocus

Aplicando o Vídeo no projeto


*/

  async function CapturePhoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhoto(photo.uri)
      setOpenModal(true)
    }
  }

  function ClearPhoto(){
    setPhoto(null)
    setOpenModal(false)
  }

  async function SavePhoto(){
if(photo){
  await MediaLibrary.createAssetAsync(photo)
  .then(() => {
    Alert.alert("Sucesso", "Foto salva na galeria")
  }).catch(error => {
    alert("Erro ao processar foto" + error)
  })
}
  }

  const cameraRef = useRef(null)


  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();

      const{status: mediaStatus} = await MediaLibrary.requestPermissionsAsync();
    })()
  }, [])
  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        type={tipoCamera}
        style={styles.camera}

        ratio={'16:9'}
      >
        <View style={styles.viewFlip}>
          <TouchableOpacity onPress={() => setTipoCamera(tipoCamera == CameraType.front ? CameraType.back : CameraType.front)} style={styles.btnFlip}>
            <Text style={styles.txtFlip}>Trocar</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <TouchableOpacity onPress={() => CapturePhoto()} style={styles.bntCaptura}>
        <FontAwesome name='camera' size={23} color={'#fff'} />
      </TouchableOpacity>
      <Modal animationType='slide' transparent={false} visible={openModal}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }}>
          <Image
            style={{ width: '100%', height: 500, borderRadius: 10 }}
            source={{ uri: photo }}
          />
          <View style={{ margin: 15, flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => ClearPhoto()} style={styles.btnCancel}>
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
}

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
    height: '80%'
  },
  viewFlip: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  btnFlip: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    padding: 15
  },
  txtFlip: {
    fontSize: 20,
    color: '#fff'
  },
  bntCaptura: {
    margin: 20,
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center'
  },
btnClear: {
  padding: 20,
  borderRadius: 15,
  backgroundColor: "transparent",
  alignItems: 'center',
  justifyContent: 'center'
},
btnUpload: {
  padding: 20,
  borderRadius: 15,
  backgroundColor: "transparent",
  alignItems: 'center',
  justifyContent: 'center'
}

});
