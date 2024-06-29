import Groups from '@screens/school/Groups';
import { ThemeProvider } from 'styled-components'
import theme from '@theme/index'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ActivityIndicator } from 'react-native';
export default function App() {

 const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold });



  return (
    <ThemeProvider theme={theme}>
      { fontsLoader ? <Groups /> : <ActivityIndicator/>}
    </ThemeProvider>
  );
}
