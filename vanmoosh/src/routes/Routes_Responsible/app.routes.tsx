import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';

import {  House, User, ChatDots  } from 'phosphor-react-native'
import theme from '@theme/index';


//-------------------------------------//----------------------------------//

import { Home_Responsible } from '@screens/responsible/Home';
import { Chat_Responsible } from '@screens/responsible/Chat';
import { Account_Responsible } from '@screens/responsible/Account';
import { AddChild } from '@screens/responsible/AddChild';

//-------------------------------------//----------------------------------//

const { Navigator, Screen } = createBottomTabNavigator<ResponsibleRoutesProps>();


type ResponsibleRoutesProps = {
    homeResponsible: undefined,
    chatResponsible: undefined,
    accountResponsible: undefined,
    addChild: undefined
}

export type ResponsibleNavigatorRoutesProps = BottomTabNavigationProp<ResponsibleRoutesProps>;

export function ResponsibleRoutes() {

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
                name='homeResponsible'  
                
                component={Home_Responsible}
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
                name='chatResponsible'
                component={Chat_Responsible}
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
                name='accountResponsible'
                component={Account_Responsible}
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
            name='addChild'
            component={AddChild}
            options={{
                tabBarButton: () => null,
                tabBarStyle: {display: 'none'},
            }}
            />
        </Navigator>
    )
}
