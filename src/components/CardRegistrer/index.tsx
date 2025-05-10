import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style"

type Props = {
    leite?: number,
    horario?: string
}

export function CardRegistrer({leite, horario}: Props){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Registrar Nova Mamada</Text>
            <Text style={styles.subititulo}>Quantidade de Leite em ml </Text>
            <TextInput style={styles.input} placeholder="Ex: 90" keyboardType="numeric">{leite}</TextInput>
            <Text style={styles.subititulo}>Horário </Text>
            <TextInput style={styles.input} placeholder="04:55">{horario}</TextInput>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textbutton}>Adicionar Registro</Text>
            </TouchableOpacity>
        </View>
    )
}