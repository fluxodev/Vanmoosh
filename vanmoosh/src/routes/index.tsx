import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import theme from '@theme/index';

import { SchoolRoutes } from './Routes_School/app.routes';
import { AuthRoutes } from './Auth/app.routes';
import { DriverRoutes } from './Routes_Driver/app.routes';
import { Home_Responsible } from '@screens/responsible/Home';
import Account_Responsible from '@screens/responsible/Account';

import { useContext } from 'react';
import { authContext } from '@contexts/AuthContext';
import { useAuth } from '@hooks/useAuth';
import { AddChild } from '@screens/responsible/AddChild';

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {

    const { user } = useAuth();

    console.log(user);
    

    const { COLORS } = theme;

    const themeNavigator = DefaultTheme;
    themeNavigator.colors.background = COLORS.WHITE;
    
    return (
        <NavigationContainer theme={themeNavigator}>
        

             {!user.email ? <AddChild /> :  <AuthRoutes />} 

        </NavigationContainer>
    )
}