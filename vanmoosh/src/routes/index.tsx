import { NavigationContainer } from '@react-navigation/native'

//Auth Routes
import { AuthRoutes } from './Auth/app.routes'

//School Routes
import { SchoolRoutes } from './Routes_School/app.routes'



export default function Routes() {
    return (
        <NavigationContainer>
            <AuthRoutes />
            {/* <SchoolRoutes /> */}
        </NavigationContainer>
    )
}