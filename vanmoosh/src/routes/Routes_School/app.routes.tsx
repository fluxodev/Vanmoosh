import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

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
    return(
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen
                name="Home_School"
                component={Home_School}
            />
            <Screen
                name="Chat_School"
                component={Chat_School}
            />
            <Screen
                name="Account_School"
                component={Account_School}
            />
        </Navigator>
    )
}