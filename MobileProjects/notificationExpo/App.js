import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//importar os recurso da biblioteca
import * as Notifications from "expo-notifications"
import { Audio } from 'expo-av';

//solicitar as permissões de notificação ao iniciar o app
Notifications.requestPermissionsAsync();

//definir como as notificações devem ser tratadas quando recebidas
Notifications.setNotificationHandler({
  handleNotification: async () => ({

    //configura o alerta quando a notificação for recebida
    shouldShowAlert: true,

    //configura ou não som ao receber a notificação
    shouldPlaySound: true,

    //configura número de notificações no ícone do app
    shouldSetBadge:  false
  })
})


export default function App() {
  //função para lidar com a chamada da notificação
const handleCallNotifications = async () => {
  
  //obtem o status das permissões
  const {status} = await Notifications.getPermissionsAsync();

  //verifica se o usuário concedeu a permissão para notificações
  if(status !== "granted")
  {
    alert("Você não deixou as notificações ativas");
    return;
  }

  const { sound: playbackObject } = await Audio.Sound.createAsync(
    require('./assets/mySoundFile.wav'),
    
  );
 

  await playbackObject.playAsync();
  //obter o token de envio de notificação 
  // const token = await Notifications

  //agendar uma notificação para ser exibida após 5 segundos
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Hello World",
      body: "Criando uma POC para implementar expo notifications"
    }, 
    trigger: null
  });
}
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleCallNotifications}>
        <Text style={styles.text}>Notificação</Text>
      </TouchableOpacity>
  
      <StatusBar style="auto" />
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
  button: {
    width: "80%",
    height: 80, 
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15
  },
  text: {
    color: "#FFF",
    fontSize: 18
  }
});
