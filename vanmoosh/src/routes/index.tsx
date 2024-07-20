import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import theme from '@theme/index';

//-------------------------------------//----------------------------------//
import { MainScreen } from '@screens/auth/MainScreen';
import { SignIn } from '@screens/auth/SignIn';
import { SignUp } from '@screens/auth/SignUp';

//-------------------------------------//----------------------------------//
import Groups from '@screens/school/Groups';
import NewGroup from '@screens/school/NewGroup';
import Students from '@screens/school/Students';
import { AuthRoutes } from './Auth/app.routes';

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
    const { COLORS } = theme;

    const themeNavigator = DefaultTheme;
    themeNavigator.colors.background = COLORS.WHITE;
    
    return (
        <NavigationContainer theme={themeNavigator}>

            <AuthRoutes />

        </NavigationContainer>
    )
}