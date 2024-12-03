import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from '@theme/index';

import { SchoolRoutes } from './Routes_School/app.routes';
import { AuthRoutes } from './Auth/app.routes';
import { DriverRoutes } from './Routes_Driver/app.routes';

import { Home_Responsible } from '@screens/responsible/Home';
import { SchoolRegister } from '@screens/auth/SchoolRegister';
import { useContext } from 'react';
import { authContext } from '@contexts/AuthContext';
import { useAuth } from '@hooks/useAuth';
import { AddChild } from '@screens/responsible/AddChild';
import { ResponsibleRoutes } from './Routes_Responsible/app.routes';

import { useEffect } from 'react';
import { getUser } from '@storage/auth/storageUser';
import { SchoolData } from '@screens/auth/SchoolData';
import { Account_Driver } from '@screens/driver/Account';

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {

    const { user } = useAuth();

    console.log(user);
    
    const { COLORS } = theme;

    const themeNavigator = DefaultTheme;
    themeNavigator.colors.background = COLORS.WHITE;
    
    useEffect(() => {
        async function checkUser() {
            const user = await getUser();
            if (user) {
                // Usuário está logado, você pode redirecionar para a tela principal
                console.log('Usuário logado:', user);
            } else {
                // Usuário não está logado, redirecionar para a tela de login
                console.log('Nenhum usuário logado');
            }
        }
      
        checkUser();
    }, []);

    let RoutesComponent = <AuthRoutes />; // Fallback para quando o usuário não tem uma role definida

    if (user && user.role) {
        switch(user.role) {
            case 'driver':
                RoutesComponent = <DriverRoutes />;
                break;
            case 'school':
                RoutesComponent = <SchoolRoutes />;
                break;
            case 'common':
                RoutesComponent = <ResponsibleRoutes />;
                break;
            default:
                RoutesComponent = <AuthRoutes />; // Se a role for desconhecida, redireciona para a tela de autenticação
        }
    }

    return (
        <NavigationContainer theme={themeNavigator}>   
            {RoutesComponent}
        </NavigationContainer>
    );
}
