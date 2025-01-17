import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalstyle"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(239, 253, 255)"
    },
    map: {
        width: '100%',
        height: '100%'
    },
    texto: {
        color: colors.white,
        fontSize: 18
    },
    input: {
        height: 56,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: colors.roxo
    }
})