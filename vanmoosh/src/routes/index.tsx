import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './Routes_User/app.routes'

export default function Routes() {
    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
}