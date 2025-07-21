import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { CardDay } from "../../components/CardDay";
import { Header } from "../../components/Header";
import { styles } from "./style";
import { CardRegistrer } from "../../components/CardRegistrer";
import { useEffect, useState } from "react";
import instance from "../../instance/instance";

// Empty dependency array to run only once on mount

export function Register(){

    type Mamada = {
        quantidade: number;
        
    };

    const [mamadas, setMamadas] = useState<Mamada[]>([]); 

    useEffect(() => {

    async function fetchData() {
        try {
            const dados = await instance.get('/mamada/register')
            setMamadas(dados.data);
            console.log(dados.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    fetchData();
}, []); 

    return(

        <KeyboardAvoidingView 
            style={{ flex: 1 }} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
        
        <ScrollView 
            contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps='handled'
>

        <View style={styles.container}>
            <Header title="Registro do Bebê" subtitle="Acompanhamento de mamadas"/>
            <CardDay
                titulo="Hoje"
                leite={mamadas.reduce((total, item) => total + item.quantidade, 0)}
                subtitulo="Total de leite"
            />
            <CardRegistrer/>

        </View>

        </ScrollView>
        </KeyboardAvoidingView>
    )
}