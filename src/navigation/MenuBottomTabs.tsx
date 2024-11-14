import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Mapa, Entrada} from "../screens/index";
import { Entypo, Feather } from "@expo/vector-icons";
import React from 'react';
import { colors } from "../styles/globalstyle";

export interface IEntrada {
    origemLatitude?: string
    origemLongitude?: string
    destinoLatitude?: string
    destinoLongitude?: string
}

type TabParam = {
    Entrada: undefined
    Mapa: undefined | IEntrada
}

type MenuScreenNavigation = BottomTabNavigationProp<TabParam, "Entrada">

export type MenuTabTypes = {
    navigation: MenuScreenNavigation;
}

export function MenuBottomTabs() {
    const Tab = createBottomTabNavigator<TabParam>();
    return (
        <Tab.Navigator screenOptions={{
            headerStyle: { backgroundColor: colors.roxo },
            headerTintColor: colors.white,
            tabBarStyle: { backgroundColor: colors.roxo },
            tabBarActiveTintColor: colors.white,
            tabBarInactiveTintColor: colors.white,
            tabBarActiveBackgroundColor: colors.amarelo
        }}>
            <Tab.Screen name="Entrada" component={Entrada}
                options={{
                    title:"Entrada",
                    tabBarIcon: () => (
                        <Feather name="search" size={27} color={colors.white} />
                    )
                }}
            />

            <Tab.Screen name="Mapa" component={Mapa}
                options={{
                    title:"Mapa",
                    tabBarIcon: () => (
                        <Entypo name="map" size={27} color={colors.white} />
                    )
                }}
            />
            </Tab.Navigator>
    )
}