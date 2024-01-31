//import fonts
import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

//import components
import { ContainerApp } from './styles';
import { StatusBar } from 'react-native';
import { Header } from './src/components/Header';
import { Home } from './src/screens/Home';

export default function App() {

  const [fontLoaded, fontError] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold
  })
  //validação de carregamento de fontes
  if(!fontLoaded && !fontError)
  {
    return null;
  }

  return (
    <ContainerApp>
      <StatusBar/>
      <Header/>
      <Home/>
      
    </ContainerApp>
  );
}


