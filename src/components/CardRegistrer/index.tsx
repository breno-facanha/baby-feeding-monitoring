import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style"
import { mamadas } from "../../db/mamadas";
import { Clock } from "phosphor-react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { useEffect, useState } from "react";

type Props = {
    leite?: number,
    horario?: string
}

export function CardRegistrer({leite, horario}: Props){

    const data = new Date()
    const [hour, setHour] = useState(data.getHours())
    const [minutes, setMinutes] = useState(data.getMinutes())

    let dados = {
        id: 2,
        qtde: 20,
        hora: "10:00",
        data: "21/05/2025"
    }


    function handleSubmitRegister(){
        try {
            mamadas.push(dados)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Registrar Nova Mamada</Text>
            <Text style={styles.subititulo}>Quantidade de Leite em ml </Text>
            <TextInput style={styles.input} placeholder="Ex: 90" keyboardType="numeric">{leite}</TextInput>
            <Text style={styles.subititulo}>Horário </Text>
            <TextInput style={styles.input} placeholder={`${hour}:${minutes >= 10 ? '' : '0' }${minutes}`}>
                {horario}
            </TextInput>
            <TouchableOpacity style={styles.button} onPress={handleSubmitRegister}>
                <Text style={styles.textbutton}>Adicionar Registro</Text>
            </TouchableOpacity>
        </View>
    )
}