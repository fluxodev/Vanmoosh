import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Platform } from 'react-native';

import {  House, User, ChatDots  } from 'phosphor-react-native'
import theme from '@theme/index';


//-------------------------------------//----------------------------------//
import Home_School from '@screens/school/Home';
import Account_School from '@screens/school/Account';
import EditAccount from '@screens/school/EditAccount';
import Groups from '@screens/school/Groups';
import Students from '@screens/school/Students';
import NewGroup from '@screens/school/NewGroup';
import { ManageDriver } from '@screens/school/ManageDrivers';
import { RegisterNewDriver } from '@screens/school/RegisterNewDriver';

//-------------------------------------//----------------------------------//

const { Navigator, Screen } = createBottomTabNavigator<SchoolRoutesProps>();


type SchoolRoutesProps = {
    Home_School: undefined;
    Account_School: undefined;
    EditAccount_School: undefined;
    Groups: undefined;
    NewGroup: undefined;
    ManageDriver: undefined;
    Students: {
        group: string
    };
    RegisterNewDriver: undefined;
}

export type SchoolNavigatorRoutesProps = BottomTabNavigationProp<SchoolRoutesProps>;

export function SchoolRoutes() {

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
            <Screen 
            name='EditAccount_School'
            component={EditAccount}
            options={{
                tabBarButton: () => null,
                tabBarStyle: {display: 'none'},
            }}
            />
            <Screen 
            name='Groups'
            component={Groups}
            options={{
                tabBarButton: () => null,
                tabBarStyle: {display: 'none'},
            }}
            />
            <Screen 
            name='NewGroup'
            component={NewGroup}
            options={{
                tabBarButton: () => null,
                tabBarStyle: {display: 'none'},
            }}
            />
            <Screen 
            name='Students'
            component={Students}
            options={{
                tabBarButton: () => null,
                tabBarStyle: {display: 'none'},
            }}
            />
            <Screen 
            name='ManageDriver'
            component={ManageDriver}
            options={{
                tabBarButton: () => null,
                tabBarStyle: {display: 'none'},
            }}
            />
            <Screen 
            name='RegisterNewDriver'
            component={RegisterNewDriver}
            options={{
                tabBarButton: () => null,
                tabBarStyle: {display: 'none'},
            }}
            />
        </Navigator>
    )
}
