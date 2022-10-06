import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Add from '../screens/Add';
import Details from '../screens/Details';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Track from '../screens/Track';

const { Navigator, Screen } = createStackNavigator()

const Stacks = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                headerTitle: "Adicionar nova encomenda",
                headerTitleAlign: "center",
                headerTintColor: "#FFF",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}

        >
            <Screen name='Home' component={Home} />
            <Screen name="Add" component={Add} options={
                {
                    headerShown: true
                }
            } />
            <Screen name='Track' component={Track} options={
                {
                    headerShown: true,
                    headerTitle: "Status",
                    cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS
                }
            } />
            <Screen name='Settings' component={Settings} options={
                {
                    headerShown: true,
                    headerTitle: "Configurações",
                    cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS
                }
            } />
            <Screen name='Details' component={Details} options={
                {
                    headerShown: true,
                    headerTitle: "Detalhes",
                    cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS
                }
            } />
        </Navigator >
    )

}

export default Stacks