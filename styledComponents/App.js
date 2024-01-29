import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Container } from "./src/components/Container/Container";

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
    <Container>

      <Text style={styles.textoContador}>Contador: {count} </Text>
      
      <TouchableOpacity onPress={increment} style={styles.botao}>
        <Text style={styles.textoBotao}>Incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={decrement} style={styles.botaoDecrement}>
        <Text style={styles.textoBotao}>Decrementar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </Container>
  );
}

const styles = StyleSheet.create({
 
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
