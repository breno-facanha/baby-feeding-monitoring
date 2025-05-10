import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
    container: {
        width: 330,
        height: 150,
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 35,
        borderColor: theme.COLORS.GRAY_200,
        paddingLeft: 30,
        backgroundColor: '#f4f7fe'
    },
    titulo: {
        color: theme.COLORS.BLACK,
        fontSize: theme.FONT_SIZE.LG,
        fontFamily: theme.FONT_FAMILY.REGULAR,
        marginBottom: 7
    },
    leite: {
        fontSize: theme.FONT_SIZE.XXL,
        color: theme.COLORS.ROXO_500,
        fontFamily: theme.FONT_FAMILY.BOLD
    },
    subtitle: {
        color: theme.COLORS.GRAY_300,
        fontSize: theme.FONT_SIZE.SM,
        fontFamily: theme.FONT_FAMILY.EXTRALIGHT
    }

})