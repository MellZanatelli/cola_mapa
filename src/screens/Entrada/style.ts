import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalstyle";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.white
    },
    viewDados: {
        display: "flex",
        alignContent: 'space-between',
    },
    titulo: {
        fontWeight: '800',
        marginBottom: 40,
        marginTop: 40,
        fontSize: 25
    },
    input: {
        height: 50,
        borderWidth: 2,
        borderColor: colors.roxo,
        marginBottom: 40,
        paddingLeft: 10,
    },
    botao: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: colors.roxo,
        height: 45,
        justifyContent: 'center',
        borderRadius: 10
    },
    botaoTexto: {
        fontSize: 20,
        fontWeight: '800',
        color: colors.white
    }
})