import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.textLogin}>Login</Text>

      <Image
        source={require("./assets/sony-divulgacao.jpg")}
        style={styles.logo}
      />
      <Text style={styles.textInputPlaceholder}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.textInputPlaceholder}>Senha</Text>
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      
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

  textLogin: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Roboto'
  },

  textInputPlaceholder: {
    color: 'gray',
    fontSize: 20,
    marginRight: 250
  },

  logo: {
    width: '70%',
    height: 170,
    marginBottom: 20,

  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5
  },
  
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '80%'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },

});
