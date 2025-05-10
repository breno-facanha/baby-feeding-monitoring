import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style"

type Props = {
    titulo: string,
    leite: string,
    subtitulo: string,

}

export function CardDay({titulo, leite, subtitulo}: Props){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.leite}>{leite} ml</Text>
            <Text style={styles.subtitle}>{subtitulo}</Text>
            <TouchableOpacity><Text>Adicionar Registro</Text></TouchableOpacity>
        </View>
    )
}