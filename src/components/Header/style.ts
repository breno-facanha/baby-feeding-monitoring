import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 100,
        backgroundColor: theme.COLORS.WHITE
    },
    title:{
        color: theme.COLORS.ROXO_700,
        fontFamily: theme.FONT_FAMILY.BOLD,
        fontSize: theme.FONT_SIZE.XXL,
    },
    subtitle:{
        color: theme.COLORS.ROXO_500,
        fontFamily: theme.FONT_FAMILY.REGULAR,
        fontSize: theme.FONT_SIZE.LG,
        marginTop: 20
    }
})