import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style"
import { useState } from "react";
import { maskFiveCaracter } from "../../utils/maskFiveCaracter";
import { maskaredData } from "../../utils/maskaredData";
import { maskaredHourIso } from "../../utils/maskaredHourIso";
import { maskaredHour } from "../../utils/maskaredHour";

type Props = {
    leite: number,
    hora: string,
    data: string
}


export function CardMamadas({leite, hora, data}: Props){
    const [visible, setVisible] = useState(false)
    const [observation, setObservetion] = useState('')
    const [textButton, setTextButton] = useState('Adicionar Observação')

    function visibleArea(){
        setVisible(!visible)

        if(observation.trim().length >= 1){
            setTextButton('Editar Observação')
        }
        
        if(observation.trim().length == 0){
            setTextButton('Adicione uma observação')
            setObservetion('Sem observações')
        }

    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.leite}>{leite} ml</Text>
                <View>
                    <Text style={styles.hora}>{maskaredHour(hora)}</Text>
                    <Text style={styles.data}>{maskaredData(data)}</Text>
                </View>
            </View>
            {
            !visible ?
                <Text style={styles.observation}>{observation}</Text>
                :
                ''
            }

            {visible ? 
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Adicione uma observação" 
                    multiline={true} 
                    numberOfLines={4}
                    onChangeText={ele => setObservetion(ele)}
                    value={observation}  
                    >
                </TextInput> 
                : 
                ''
            }
            <TouchableOpacity style={styles.button} onPress={visibleArea}>
                <Text style={styles.textButton}>{textButton}</Text>
            </TouchableOpacity>
        </View>
    )
}