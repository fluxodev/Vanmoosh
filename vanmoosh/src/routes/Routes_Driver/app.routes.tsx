import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';

import {  House, User, ChatDots  } from 'phosphor-react-native'
import theme from '@theme/index';


//-------------------------------------//----------------------------------//

import { Home_Driver } from '@screens/driver/Home';
import { Account_Driver } from '@screens/driver/Account';
import { Departure } from '@screens/driver/Departure';
import { StartRoute } from '@screens/driver/StartRoute';
import { Arrival } from '@screens/driver/Arrival';

//-------------------------------------//----------------------------------//

const { Navigator, Screen } = createBottomTabNavigator<DriverRoutesProps>();


type DriverRoutesProps = {
    Home_School: undefined;
    Account_School: undefined;
    EditAccount_School: undefined;
    Groups: undefined;
    Students: undefined;
    NewGroup: undefined;

    Home_Driver: undefined;
    Chat_Driver: undefined;
    Account_Driver: undefined;

    Departure: {
        id: string,
    };
    Arrival: {
        id: string,
    };
    StartRoute: undefined;
}

export type DriverNavigatorRoutesProps = BottomTabNavigationProp<DriverRoutesProps>;

export function DriverRoutes() {

    const { COLORS, FONT_FAMILY, FONT_SIZE } = theme;

    return(
        <Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarStyle: {
                    borderTopColor: COLORS.GRAY_300,
                    borderTopWidth: Platform.OS === 'android' ? 0.2 : 0.4, //se for android, a borda é mais fina
                }
            })}
        >
            <Screen
                name="Home_Driver"  
                
                component={Home_Driver}
                options={{
                    tabBarLabel: 'Tela Inicial',
                    tabBarIcon: ({focused}) => {
                        if(focused){
                            return <House 
                            weight='fill'
                            size={24}
                            color={COLORS.BRAND_MID}
                            />
                        }
                        return <House 
                            weight='light'
                            size={24}
                            color={COLORS.BRAND_MID}
                        />
                    },
                    tabBarLabelStyle: { 
                        fontFamily: theme.FONT_FAMILY.REGULAR, 
                        fontSize: theme.FONT_SIZE.XS, 
                        color: COLORS.BRAND_MID },
                }}
            />
            <Screen
                name="Account_Driver"
                component={Account_Driver}
                options={{
                    tabBarLabel: 'Conta',
                    tabBarIcon: ({focused}) => {
                        if(focused){
                            return <User 
                            weight='fill'
                            size={24}
                            color={COLORS.BRAND_MID}
                            />
                        }
                        return <User 
                            weight='light'
                            size={24}
                            color={COLORS.BRAND_MID}
                        />
                    },
                    tabBarLabelStyle: { 
                        fontFamily: theme.FONT_FAMILY.REGULAR, 
                        fontSize: theme.FONT_SIZE.XS, 
                        color: COLORS.BRAND_MID },
                }}

                //quando precisar criar mais rotas, criar aqui e adicionar options para cada uma: tabBarButton: () => null
            />
            <Screen 
            name='Departure'
            component={Departure}
            options={{
                tabBarButton: () => null,
                tabBarStyle: {display: 'none'},
            }}
            />
            <Screen 
            name='Arrival'
            component={Arrival}
            options={{
                tabBarButton: () => null,
                tabBarStyle: {display: 'none'},
            }}
            />
            <Screen 
            name='StartRoute'
            component={StartRoute}
            options={{
                tabBarButton: () => null,
                tabBarStyle: {display: 'none'},
            }}
            />
        </Navigator>
    )
}
