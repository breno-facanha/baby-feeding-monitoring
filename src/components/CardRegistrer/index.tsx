import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./style"
import { mamadas } from "../../db/mamadas";
import { Clock } from "phosphor-react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { useEffect, useState } from "react";
import { maskaredHour } from "../../utils/maskaredHour";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";


type Props = {
    leite?: number,
    horario?: string
}

export function CardRegistrer({leite, horario}: Props){

    const data = new Date()
    const [hour, setHour] = useState(data.getHours())
    const [minutes, setMinutes] = useState(data.getMinutes())
    const [getHour, setGetHour] = useState(0)
    const [getMinutes, setGetMinutes] = useState(0)
    const [date, setDate] = useState(data.getDate())
    const [horaFull, setHoraFull] = useState(data.toLocaleTimeString())
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    let dados = {
        id: mamadas.length + 1,
        ml: 20,
        hora: horaFull,
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

    function showDatePicker() {
        setDatePickerVisibility(!isDatePickerVisible);
    }

    return(

        <View style={styles.container}>
            <Text style={styles.titulo}>Registrar Nova Mamada</Text>
            <Text style={styles.subititulo}>Quantidade de Leite em ml </Text>
            <TextInput style={styles.input} placeholder="Ex: 90" keyboardType="numeric">{leite}</TextInput>
            <Text style={styles.subititulo}>Horário </Text>
            
            <TouchableOpacity onPress={showDatePicker} style={styles.datePicker}>
                <View style={styles.horarioContainer}>
                    <Clock size={24} color="#000" />
                    <TextInput
                        style={styles.textHorario}
                        
                        value={getHour || getMinutes == 0 ? `${hour}:${minutes}` : `${getHour}:${getMinutes}`}
                        keyboardType="numeric"
                        maxLength={5}
                        editable={false}
                    />
                </View>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="time"
                    date={new Date(2023, 10, 10, hour, minutes)}
                    onConfirm={(date) => {
                        setGetHour(date.getHours())
                        setGetMinutes(date.getMinutes())
                        setHour(date.getHours())
                        setMinutes(date.getMinutes())
                        setHoraFull(`${date.getHours()}:${date.getMinutes()}
                        `)
                        setDatePickerVisibility(false);
                    }}
                    onCancel={() => {
                        setDatePickerVisibility(false);
                    }}
                    display="spinner"
                    >
                    
                </DateTimePickerModal>
                {/* <TextInput
                    style={styles.datePicker2}
                    placeholder={`${hour}:${minutes}`}
                /> */}
                
                {/* <TextInput
                    style={styles.datePicker2}
                    placeholder="Ex: 08:00"
                    value={maskaredHour(`${hour}:${minutes}`)}
                
                    keyboardType="numeric"
                    maxLength={5}
                /> */}

            </TouchableOpacity>
         
            <TouchableOpacity style={styles.button} onPress={handleSubmitRegister}>
                <Text style={styles.textbutton}>Adicionar Registro</Text>
            </TouchableOpacity>
        </View>
    )
}