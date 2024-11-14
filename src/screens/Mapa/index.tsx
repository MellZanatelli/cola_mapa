import { useEffect, useRef, useState } from "react";
import MapView, { LatLng, Marker, Polyline, Region } from 'react-native-maps'
import * as Location from 'expo-location'
import { View, Alert } from "react-native";
import { styles } from "./style";
import { colors } from '../../styles/globalstyle';
import { useRoute } from "@react-navigation/native"
import { IEntrada, MenuTabTypes } from "../../navigation/MenuBottomTabs";
import { MaterialIcons } from "@expo/vector-icons";

export function Mapa({ navigation }: MenuTabTypes) {
    const [errorMsg, setErrorMsg] = useState<null | string>(null);
    const mapRef = useRef<MapView>(null)

    const route = useRoute()
    const data = route.params as IEntrada

    const [origem, setOrigem]  = useState<Region>();
    const [destino, setDestino]  = useState<Region>();
    useEffect(() => {

        const handleLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to acces location was denied");
                return;
            }
            if (data && data.origemLatitude && data.origemLongitude && data.destinoLatitude && data.destinoLongitude) {
                setOrigem({
                    latitude: Number(data.origemLatitude),
                    longitude: Number(data.origemLongitude),
                    latitudeDelta:0.004,
                    longitudeDelta: 0.004
                })
                setDestino({
                    latitude: Number(data.destinoLatitude),
                    longitude: Number(data.destinoLongitude),
                    latitudeDelta:0.004,
                    longitudeDelta: 0.004,
                })
            } else {
                navigation.navigate('Entrada')
                Alert.alert('Preencha todos os dados!')
            }

        };

        handleLocation();
    }, [data]);


    let text = "Waiting..";
    if (errorMsg) {
        text = errorMsg;
    }

    return (
        <View style={styles.container}>

            <MapView style={styles.map} region={origem}
                showsUserLocation={true} ref={mapRef}
            >

                <Marker coordinate={origem as LatLng}>
                    <MaterialIcons name="room" size={34} color={colors.vermelho} />               
                </Marker>
                <Marker coordinate={destino as LatLng}>
                    <MaterialIcons name="room" size={34} color={colors.vermelho} />  
                </Marker>

                <Polyline strokeColor={colors.vermelho} strokeWidth={6} coordinates={[origem as LatLng, destino as LatLng]}></Polyline>

            </MapView>


        </View>
    )
}