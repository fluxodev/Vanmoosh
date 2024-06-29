import Groups from '@screens/school/Groups';
import { ThemeProvider } from 'styled-components'
import theme from '@theme/index'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}
