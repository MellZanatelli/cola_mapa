import { useEffect, useRef, useState } from "react";
import MapView, { Marker, Polyline, Region } from 'react-native-maps'
import * as Location from 'expo-location'
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./style";
import { colors } from '../../styles/globalstyle';
import { MenuTabTypes } from "../../navigation/MenuBottomTabs";
import { IEntrada } from "../../navigation/MenuBottomTabs";

export function Entrada({ navigation }: MenuTabTypes) {
    const [data, setData] = useState<IEntrada>()

    function handleChange(item: IEntrada) {
        setData({ ...data, ...item });
        console.log(data)
    }

    function handleShowMap() {
        if (!data?.destinoLatitude || !data.destinoLongitude || !data.origemLatitude || !data.origemLongitude) {
        Alert.alert("Preencha todo o formulário!")
        } else {
        navigation.navigate("Mapa", data)
        }
       }

    return (
        <View style={styles.container}>
            <View style={styles.viewDados}>
                <Text style={styles.titulo}>Origem</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={colors.roxo}
                    placeholder="Latitude"
                    keyboardType="numeric"
                    onChangeText={(i) => handleChange({ origemLatitude:i })}
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={colors.roxo}
                    placeholder="Longitude"
                    keyboardType="numeric"
                    onChangeText={(i) => handleChange({ origemLongitude:i })}
                />
            </View>
            <View style={styles.viewDados}>
                <Text style={styles.titulo}>Destino</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={colors.black}
                    placeholder="Latitude"
                    keyboardType="numeric"
                    onChangeText={(i) => handleChange({ destinoLatitude:i })}
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={colors.black}
                    placeholder="Longitude"
                    keyboardType="numeric"
                    onChangeText={(i) => handleChange({ destinoLongitude:i })}
                />
            </View>
            <TouchableOpacity onPress={handleShowMap} style={styles.botao}>
                <Text style={styles.botaoTexto}>Enviar</Text>
            </TouchableOpacity>
        </View>
    )
}