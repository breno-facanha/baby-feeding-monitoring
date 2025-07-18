import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style"
import { mamadas } from "../../db/mamadas";
import { Clock } from "phosphor-react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { useState } from "react";

export function CardRegistrer(){

    const data = new Date()
    const [hour, setHour] = useState(data.getHours())
    const [minutes, setMinutes] = useState(data.getMinutes())
    const [getHour, setGetHour] = useState(0)
    const [getMinutes, setGetMinutes] = useState(0)
    const [date, setDate] = useState(data.getDate())
    const [horaFull, setHoraFull] = useState(data.toLocaleTimeString())
    const [leiteMl, setLeiteMl] = useState(''); 
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    let dados = {
        id: mamadas.length + 1,
        ml: parseInt(leiteMl) || 0, 
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

    console.log(leiteMl, horaFull)

    return(

        <View style={styles.container}>
            <Text style={styles.titulo}>Registrar Nova Mamada</Text>
            <Text style={styles.subititulo}>Quantidade de Leite em ml </Text>
            <TextInput 
                style={styles.input} 
                placeholder="Ex: 90" 
                keyboardType="numeric"
                maxLength={3}
                onChangeText={(text) => setLeiteMl(text)}
                value={leiteMl}
            />
            <Text style={styles.subititulo}>Horário </Text>
            
            <TouchableOpacity onPress={showDatePicker} style={styles.datePicker}>
                <View style={styles.horarioContainer}>
                    // aumentar a espessura do icone Clock 
                    <Clock size={24} color="#996DFF" weight="bold"/>
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
                    date={new Date(2023, 10, 10, hour, minutes, 0)}
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

            </TouchableOpacity>
         
            <TouchableOpacity style={styles.button} onPress={handleSubmitRegister}>
                <Text style={styles.textbutton}>Adicionar Registro</Text>
            </TouchableOpacity>
        </View>
    )
}