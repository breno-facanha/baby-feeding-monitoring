import { Text, View } from "react-native";
import { styles } from "./style";

type Props = {
    title: string,
    subtitle: string
}

export function Header({title, subtitle}: Props){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    )
}