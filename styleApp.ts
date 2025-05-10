import { StyleSheet } from "react-native";
import theme from "./src/theme";

export const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        backgroundColor: theme.COLORS.GRAY_300,
        justifyContent: 'flex-start',
        height: 'auto',
        alignItems: 'center'
    }
})