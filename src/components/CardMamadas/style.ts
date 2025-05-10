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
        marginTop: 30,
        borderColor: theme.COLORS.GRAY_200,
    }
})