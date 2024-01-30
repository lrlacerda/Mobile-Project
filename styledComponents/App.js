import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Container } from "./src/components/Container/Container";
import { Button, ButtonDecremento } from "./src/components/Button/Button";
import { Title, TitleContador } from "./src/components/Title/Title";
import { ImageContador } from "./src/components/img/img";

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
      <ImageContador source={require("./src/components/img/numeros.jpg")} />

      <TitleContador>Contador: {count} </TitleContador>

      <Button onPress={increment}>
        <Title>Incrementar</Title>
      </Button>

      <ButtonDecremento onPress={decrement}>
        <Title>Decrementar</Title>
      </ButtonDecremento>

      <StatusBar style="auto" />
    </Container>
  );
}
