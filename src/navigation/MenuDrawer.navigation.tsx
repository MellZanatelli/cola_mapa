import { DrawerNavigationProp, createDrawerNavigator} from '@react-navigation/drawer'
import { colors } from '../styles/globalstyle';
import { Entypo, Feather } from "@expo/vector-icons";
import { Mapa } from '../screens';
import { Entrada } from '../screens';

type DrawerParamList = {
    Mapa: undefined
    Entrada: undefined
}

type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Mapa'>

export type DrawerTypes = {
    navigation: DrawerScreenNavigationProp
}

export function MenuDrawer() {
    const Drawer = createDrawerNavigator<DrawerParamList>()

    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: colors.roxo },
            headerTintColor: colors.white,
            drawerStyle: {
                backgroundColor: colors.roxo
            },
            drawerActiveTintColor: colors.white,
            drawerInactiveTintColor: colors.white
        }}>
            <Drawer.Screen name='Mapa' component={Mapa}
            options={{
                drawerIcon: () => (
                    <Entypo name="map" size={27} color={colors.white} />
                ),
            }}/>
            <Drawer.Screen name='Entrada' component={Entrada} 
            options={{
                drawerIcon: ()=> (
                    <Feather name="search" size={27} color={colors.white} />
                ),
            }} />
        </Drawer.Navigator>
    )
}