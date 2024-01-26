import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Person from './src/components/Person/Person';


export default function App() {
  return (
<SafeAreaView>
<StatusBar/>
<Person />
</SafeAreaView>
  );
}

