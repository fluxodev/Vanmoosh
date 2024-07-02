import { createNativeStackNavigator } from '@react-navigation/native-stack';

//-------------------------------------//----------------------------------//

// Screens Stack Groups School
import Groups from '@screens/school/Groups';
import NewGroup  from '@screens/school/NewGroup';
import Students from '@screens/school/Students';

//-------------------------------------//----------------------------------//

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return(
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name="Groups"
                component={Groups}
            />
            <Screen
                name="NewGroup"
                component={NewGroup}
            />
            <Screen
                name="Students"
                component={Students}
            />
        </Navigator>
    )
}