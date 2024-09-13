import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

//-------------------------------------//----------------------------------//

import { MainScreen } from '@screens/auth/MainScreen';
import { SignIn } from '@screens/auth/SignIn';
import { SignUp } from '@screens/auth/SignUp';
import { SelectUser } from '@screens/auth/selectUser';
import { CommomUserRegister } from '@screens/auth/CommonUserRegister';
import { SchoolRegister } from '@screens/auth/SchoolRegister';
import { SchoolData } from '@screens/auth/SchoolData';

//-------------------------------------//----------------------------------//

type AuthRoutes = { //definimos rotas de autenticação
    Main: undefined;
    SignIn: undefined;
    SignUp: undefined;
    SelectUser: undefined;
    CommomUserRegister: undefined;
    SchoolRegister: undefined;
}

//agora vamos criar um type para exportar para ser reutilizada quando for necessário utilizar as rotas de autenticação
export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
    return(
        <Navigator
            initialRouteName='Main'
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
            <Screen
                name="SelectUser"
                component={SelectUser}
            />
            <Screen
                name="CommomUserRegister"
                component={CommomUserRegister}
            />
            <Screen
                name="SchoolRegister"
                component={SchoolData}
            />
            
        </Navigator>
    )
}