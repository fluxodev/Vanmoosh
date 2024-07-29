import Groups from '@screens/school/Groups';
import { ThemeProvider } from 'styled-components'
import theme from '@theme/index'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';
import  NewGroup  from '@screens/school/NewGroup';
import Students from '@screens/school/Students';
import Routes from '@routes/index';
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default function App() {

 const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold });



  return (
    <ThemeProvider theme={theme}>
      
      <StatusBar barStyle="dark-content"
      backgroundColor="transparent"
      translucent
      />
      <SafeAreaProvider>
      { fontsLoader ? <Routes /> : <Loading />}
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
