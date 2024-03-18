import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

//expo notifications biblioteca
import * as Notifications from "expo-notifications";

//solicitar oermissões de notificação ao iniciar o app
Notifications.requestPermissionsAsync();

//definir como as notificações devem ser tratadas quando recebidas
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    //mostra o alerta quando a notificação for recebida
    shouldShowAlert: true,
    //configura reproduz ou não som ao receber a notificação
    shouldPlaySound: true,
    //configura o numero de notificações no icone do app
    shouldSetBadge: true,
  }),
});

export default function App() {
  //função para lidar com a chamada da notificação
  const handleCallNotifications = async () => {
    //obtem o status das permissões
    const { status } = await Notifications.getPermissionsAsync();

    //verifica se o usuário concedeu permissão para notificação
    if (status !== "granted") {
      alert("Você não deixou as notificações ativas");
      return;
    }

    // const token = await Notifications.getExpoPushTokenAsync();
    // console.log(token);

    //agendar uma notificação para ser exibida após 5 segundos
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hello World!",
        body: "Criando uma POC para implementar expo Notification",
        // sound: "default", // Ou substitua 'default' pelo nome de um som personalizado
      },
      trigger: null,
    });
  };

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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "80%",
    height: 90,
    backgroundColor: "gray",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
