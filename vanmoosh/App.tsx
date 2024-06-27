import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import TripStyles from './src/components/styles/Trip';

export default function App() {
  return (
    <View style={TripStyles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
