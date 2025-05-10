import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style"

type Props = {
    titulo: string,
    hora: string,
    subtitulo: string,

}

export function CardMamadas(){
    return(
        <View style={styles.container}>
            <View>
                <Text>Titulo</Text>
                <Text>Hora</Text>
            </View>
            <Text>Subtitulo</Text>
            <TouchableOpacity>
                <Text>Editar Observação</Text>
            </TouchableOpacity>
        </View>
    )
}