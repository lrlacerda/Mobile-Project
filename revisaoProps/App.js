import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Person from './src/components/Person/Person';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Person name='Lucas' age='36'/>
      <Person name='Uiara' age='34'/>
      <Person name='Silvia' age='57'/>
      <Person name='Tadeu' age='56'/>
    </SafeAreaView>
  );
}


