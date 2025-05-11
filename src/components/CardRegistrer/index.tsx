import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
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
    const [date, setDate] = useState(data.getDate())

    let dados = {
        id: mamadas.length + 1,
        ml: 20,
        hora: hour,
        data: date
    }


    function handleSubmitRegister(){
        try {
            mamadas.push(dados)
            console.log(dados)
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