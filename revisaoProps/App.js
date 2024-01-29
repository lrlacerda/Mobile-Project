import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView} from 'react-native';
import { useFonts, PermanentMarker_400Regular } from '@expo-google-fonts/permanent-marker';
import Person from "./src/components/Person/Person"
export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    PermanentMarker_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
const peopleList = [
  {id: '1', nome: 'Lucas', age: 37},
  {id: '2', nome: 'Uiara', age: 34},
  {id: '3', nome: 'Silvia', age: 58},
  {id: '4', nome: 'Tadeu', age: 57},
]

  return (
    <SafeAreaView>
      {/* <StatusBar/> */}
    
    {/* usando flatList */}
    <FlatList
      data={peopleList}
      keyExtractor={(item) => item.id}
      
      renderItem={({item}) => (
        //exibir cada item da lista
        <Person name={item.nome} age={item.age}/>
      )}
    />
    </SafeAreaView>
  );
}



