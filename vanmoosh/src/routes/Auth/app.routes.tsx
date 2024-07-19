import { createNativeStackNavigator } from '@react-navigation/native-stack';

//-------------------------------------//----------------------------------//

import { MainScreen } from '@screens/auth/MainScreen';
import { SignIn } from '@screens/auth/SignIn';

//-------------------------------------//----------------------------------//

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
            }}
        >
            <Screen
                name="Main"
                component={MainScreen}
            />
            <Screen
                name="SignIn"
                component={SignIn}
            />
            
        </Navigator>
    )
}