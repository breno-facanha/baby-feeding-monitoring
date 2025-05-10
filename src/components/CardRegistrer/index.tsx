import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style"

export function CardRegistrer(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Registrar Nova Mamada</Text>
            <Text style={styles.subititulo}>Quantidade de Leite em ml </Text>
            <TextInput style={styles.input} placeholder="Ex: 90"></TextInput>
            <Text style={styles.subititulo}>Horário </Text>
            <TextInput style={styles.input} placeholder="04:55"></TextInput>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textbutton}>Adicionar Registro</Text>
            </TouchableOpacity>
        </View>
    )
}