import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>

      <TextInput style={styles.input} defaultValue=" exemplo de input" />

      {/*image*/}
      <Image
        style={styles.image}
        source={require("./src/assets/ZS5yNRqWKpJ7BEN4mPqX6C.jpg")}
      />

      {/*botão*/}
      <TouchableOpacity style={styles.btm}>
        <Text style={styles.textBotao}>Exemplo de Botão</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "white",
    fontSize: 50,
    fontWeight: "500",
  },

  input: {
    width: "90%",
    height: 40,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "grey",
    padding: 10,
  },

  image: {
    width: "90%",
    height: "40%",
    marginTop: 20,
  },

  btm: {
    borderWidth: 2,
    borderColor: 'white',
    width: '80%',
    height: 40,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#001969'
  },

  textBotao: {
    color: 'white',
    justifyContent: 'center'
  }
});
