import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import groupsStyles from './style';

export default function Groups() {
  return (
    <View style={groupsStyles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
