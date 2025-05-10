import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style"
import { useState } from "react";

type Props = {
    titulo: string,
    hora: string,
    subtitulo: string,

}


export function CardMamadas(){
    const [visible, setVisible] = useState(false)
    const [observation, setObservetion] = useState('')
    const [textButton, setTextButton] = useState('Adicionar Observação')



    function handleTextAera(){
        if (visible){
            <TextInput style={styles.textInput}></TextInput>
        }
    }

    function visibleArea(){
        setVisible(!visible)

        if(observation.trim().length >= 1){
            setTextButton('Editar Observação')
        }
        
        if(observation.trim().length == 0){
            setTextButton('Adicione uma observação')
            setObservetion('Sem observações')
        }

        // if(observation.length > 0){
        //     setTextButton('Editar Observação')
        // }

        // if(observation == ''){
        //     setTextButton('Adicionar Observação')
        // }

        // if(visible == false  && observation == ''){
        //     setObservetion('Sem observação')
        // }
    }


    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.leite}>20 ml</Text>
                <Text style={styles.hora}>13:00</Text>
            </View>
            {!visible ?
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