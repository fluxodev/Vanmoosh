import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import theme from '@theme/index';

import { AuthRoutes } from './Auth/app.routes';
import { DriverRoutes } from './Routes_Driver/app.routes';

import { useAuth } from '@hooks/useAuth';


import { useEffect } from 'react';
import { getUser } from '@storage/auth/storageUser';


const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {

    const { user } = useAuth();    

    const { COLORS } = theme;

    const themeNavigator = DefaultTheme;
    themeNavigator.colors.background = COLORS.WHITE;
    
    useEffect(() => {
        async function checkUser() {
          const user = await getUser();
          if (user) {
            // Usuário está logado, você pode redirecionar para a tela principal
            
          } else {
            // Usuário não está logado, redirecionar para a tela de login
            
          }
        }
      
        checkUser();
      }, []);
    return (
        <NavigationContainer theme={themeNavigator}>   
            {user.email ? <DriverRoutes /> :  <AuthRoutes />}
        </NavigationContainer>
    )
}