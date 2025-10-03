import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
    container: {
        width: 330,
        height: 'auto',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 20,
        borderColor: theme.COLORS.GRAY_200,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20
    },
    header:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    leite:{
        fontSize: theme.FONT_SIZE.XL,
        fontFamily: theme.FONT_FAMILY.REGULAR
    },
    hora:{
        width: 75,
        height: 30,
        paddingTop: 5,
        textAlign: 'right',
        fontSize: theme.FONT_SIZE.SM,
        color: theme.COLORS.GRAY_300,
        fontFamily: theme.FONT_FAMILY.EXTRALIGHT,
        
    },
    data:{
        width: 75,
        height: 30,
        textAlign: 'right',
        fontSize: theme.FONT_SIZE.SM,
        color: theme.COLORS.GRAY_300,
        fontFamily: theme.FONT_FAMILY.EXTRALIGHT,
    },
    observation:{
        fontSize: theme.FONT_SIZE.SM,
        color: theme.COLORS.GRAY_300,
        fontFamily: theme.FONT_FAMILY.EXTRALIGHT,
        marginTop: 6
    },
    button:{
        marginTop: 10,
        height: 40,
        borderColor: theme.COLORS.ROXO_600,
        backgroundColor: theme.COLORS.ROXO_600,
        borderRadius: 10,
        justifyContent: 'center',
        borderWidth: 1,
        marginBottom: 10
    },
    buttonPressed:{
        backgroundColor: theme.COLORS.ROXO_300
    },
    textButton:{
        textAlign:'center',
        color: theme.COLORS.WHITE,
        fontFamily: theme.FONT_FAMILY.BOLD,
        letterSpacing: 0.5,
    },
    textInput:{
        alignItems: 'flex-start',
        height: 80,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: theme.COLORS.GRAY_200,
        marginBottom: 5,
        marginTop:15,
        paddingLeft: 15,
    }

})