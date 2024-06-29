import 'styled-components/native' // importando o styled-components
import theme  from '../theme/index' // importando o tema

declare module 'styled-components' { // criando um modulo para o styled-components
    type ThemeType = typeof theme; // criando um tipo para o tema

    export interface DefaultTheme extends ThemeType {} // exportando o tema como DefaultTheme
}