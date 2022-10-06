import { NavigationContainer } from '@react-navigation/native';
import Stacks from "./Stacks.routes"



const Router = () => {

    return (
        <NavigationContainer theme={{ colors: { background: '#151515' } }} >
            <Stacks />
        </NavigationContainer>
    )
}



export default Router