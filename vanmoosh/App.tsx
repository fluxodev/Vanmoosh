import Groups from '@screens/school/Groups';
import { ThemeProvider } from 'styled-components'
import theme from '@theme/index'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';
import { NewGroup } from '@screens/school/NewGroup';
export default function App() {

 const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold });



  return (
    <ThemeProvider theme={theme}>
      { fontsLoader ? <NewGroup /> : <Loading />}
    </ThemeProvider>
  );
}
