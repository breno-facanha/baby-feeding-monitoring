// import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
// import { styles } from "./style"
// import { useState } from "react";
// import { mamadas } from "../../db/mamadas";

// type Props = {
//     leite: number,
//     hora: string,
// }


// export function CardMamadas({leite, hora}: Props){
//     const [visible, setVisible] = useState(false)
//     const [observation, setObservetion] = useState('')
//     const [textButton, setTextButton] = useState('Adicionar Observação')

//     function visibleArea(){
//         setVisible(!visible)

//         if(observation.trim().length >= 1){
//             setTextButton('Editar Observação')
//         }
        
//         if(observation.trim().length == 0){
//             setTextButton('Adicione uma observação')
//             setObservetion('Sem observações')
//         }

//     }

//     return(
//         <View>

//         {
//             mamadas.length > 0 ?
//             mamadas.map((item) => (
                               
//             <View style={styles.container}>
//                 <View style={styles.header}>
//                     <Text style={styles.leite}>{item.ml} ml</Text>
//                     <Text style={styles.hora}>{item.hora}</Text>
//                 </View>

//                 {
//                     !visible ?
//                     <Text style={styles.observation}>{observation}</Text>
//                     :
//                     ''
//                 }

//                 {visible ? 
//                     <TextInput 
//                     style={styles.textInput} 
//                     placeholder="Adicione uma observação" 
//                     multiline={true} 
//                     numberOfLines={4}
//                     onChangeText={ele => setObservetion(ele)}
//                     value={observation}  
//                     >
//                     </TextInput> 
//                     : 
//                     ''
//                 }
//                 <TouchableOpacity style={styles.button} onPress={visibleArea}>
//                     <Text style={styles.textButton}>{textButton}</Text>
//                 </TouchableOpacity>
//             </View>
//             ))
//             :
//             "Nenhuma mamada registrada ainda"
//         }

//         </View>
//     )
// }