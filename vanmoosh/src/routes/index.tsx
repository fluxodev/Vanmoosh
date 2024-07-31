import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import theme from '@theme/index';

import { SchoolRoutes } from './Routes_School/app.routes';
import { AuthRoutes } from './Auth/app.routes';
import { DriverRoutes } from './Routes_Driver/app.routes';

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
    const { COLORS } = theme;

    const themeNavigator = DefaultTheme;
    themeNavigator.colors.background = COLORS.WHITE;
    
    return (
        <NavigationContainer theme={themeNavigator}>

            <DriverRoutes />

        </NavigationContainer>
    )
}