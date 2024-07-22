import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';

import {  House, User, ChatDots  } from 'phosphor-react-native'
import theme from '@theme/index';


//-------------------------------------//----------------------------------//
import Home_School from '@screens/school/Home';
import Chat_School from '@screens/school/Chat';
import Account_School from '@screens/school/Account';

//-------------------------------------//----------------------------------//

const { Navigator, Screen } = createBottomTabNavigator<SchoolRoutesProps>();

type SchoolRoutesProps = {
    Home_School: undefined;
    Chat_School: undefined;
    Account_School: undefined;
}

export type SchoolNavigatorRoutesProps = BottomTabNavigationProp<SchoolRoutesProps>;

export function SchoolRoutes() {

    const { COLORS, FONT_FAMILY, FONT_SIZE } = theme;

    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    borderTopColor: COLORS.BRAND_MID,
                    borderTopWidth: Platform.OS === 'android' ? 0.2 : 0.4, //se for android, a borda é mais fina
                }
            }}
        >
            <Screen
                name="Home_School"  
                
                component={Home_School}
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
                name="Chat_School"
                component={Chat_School}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({focused}) => {
                        if(focused){
                            return <ChatDots 
                            weight='fill'
                            size={24}
                            color={COLORS.BRAND_MID}
                            />
                        }
                        return <ChatDots 
                            weight='light'
                            size={24}
                            color={COLORS.BRAND_MID}
                        />
                    },
                    tabBarLabelStyle: { 
                        fontFamily: theme.FONT_FAMILY.REGULAR, 
                        fontSize: theme.FONT_SIZE.XS, 
                        color: COLORS.BRAND_MID 
                    },
                }}
            />
            <Screen
                name="Account_School"
                component={Account_School}
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
        </Navigator>
    )
}