import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  //função de incremento
  const increment = () => {
    setCount(count + 1);
  };

  //função de decremento
  const decrement = () => {
    setCount(count - 1);
  };

  //useffect
  useEffect(() => {
    console.warn(`Contador Atualizado: ${count}`);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.textoContador}>Contador: {count} </Text>
      <TouchableOpacity onPress={increment} style={styles.botao}>
        <Text style={styles.textoBotao}>Incrementar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={decrement} style={styles.botaoDecrement}>
        <Text style={styles.textoBotao}>Decrementar</Text>
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
  botao: {
    backgroundColor: "green",
    marginTop: 15,
    padding: 20,
    borderRadius: 10,
    height: 80,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoDecrement: {
    backgroundColor: "red",
    marginTop: 15,
    padding: 20,
    borderRadius: 10,
    height: 80,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotao: {
    color: "white",
    fontSize: 25,
  },
  textoBotaoDecrement: {},
  textoContador: {
    fontSize: 30,
    color: "white",
  },
});
