import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles_Trip from './src/components/styles/Trip';

export default function App() {
  return (
    <View style={styles_Trip.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
