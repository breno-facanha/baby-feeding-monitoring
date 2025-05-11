import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
    container: {
        width: 330,
        height: 340,
        borderStyle: 'solid',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 35,
        borderColor: theme.COLORS.GRAY_200,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: theme.COLORS.WHITE
    },
    titulo: {
        color: theme.COLORS.BLACK,
        fontSize: theme.FONT_SIZE.XL,
        fontFamily: theme.FONT_FAMILY.REGULAR,
        marginBottom: 7,
    },
    input:{
        height: 50,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: theme.COLORS.GRAY_200,
        paddingLeft: 18,
    },
    subititulo:{
        paddingLeft: 5,
        marginTop: 15,
        marginBottom: 5
    },
    button:{
        height: 50,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: theme.COLORS.GRAY_200,
        backgroundColor: theme.COLORS.ROXO_600,
        justifyContent: 'center',
        marginTop: 20
    },
    textbutton: {
        color: theme.COLORS.WHITE,
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: theme.FONT_FAMILY.BOLD
    },
    data:{
        width: '100%',
        height: 50
    }
    

})