import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

//-------------------------------------//----------------------------------//

import { MainScreen } from '@screens/auth/MainScreen';
import { SignIn } from '@screens/auth/SignIn';
import { SignUp } from '@screens/auth/SignUp';


//-------------------------------------//----------------------------------//

type AuthRoutes = { //definimos rotas de autenticação
    Main: undefined;
    SignIn: undefined;
    SignUp: undefined;

}

//agora vamos criar um type para exportar para ser reutilizada quando for necessário utilizar as rotas de autenticação
export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
            }}
        >
            <Screen
                name="Main"
                component={MainScreen}
            />
            <Screen
                name="SignIn"
                component={SignIn}
            />
            <Screen
                name="SignUp"
                component={SignUp}
            />
            
        </Navigator>
    )
}