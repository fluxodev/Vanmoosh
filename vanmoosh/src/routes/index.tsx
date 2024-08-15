import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import theme from '@theme/index';

import { SchoolRoutes } from './Routes_School/app.routes';
import { AuthRoutes } from './Auth/app.routes';
import { DriverRoutes } from './Routes_Driver/app.routes';

import { useContext } from 'react';
import { authContext } from '@contexts/AuthContext';
import { useAuth } from '@hooks/useAuth';

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {

    const { user } = useAuth();

    console.log(user);
    

    const { COLORS } = theme;

    const themeNavigator = DefaultTheme;
    themeNavigator.colors.background = COLORS.WHITE;
    
    return (
        <NavigationContainer theme={themeNavigator}>

            {!user.email ? <SchoolRoutes/> :  <AuthRoutes />}

        </NavigationContainer>
    )
}