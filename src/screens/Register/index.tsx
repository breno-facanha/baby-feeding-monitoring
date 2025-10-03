import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { CardDay } from "../../components/CardDay";
import { Header } from "../../components/Header";
import { styles } from "./style";
import { CardRegistrer } from "../../components/CardRegistrer";
import { useEffect } from "react";
import { useMamadas } from "../../hooks/useMamadas";

export function Register(){
    const { mamadas, isLoading, error, fetchMamadas, getTotalToday } = useMamadas();

    useEffect(() => {
        fetchMamadas();
    }, [fetchMamadas]); 

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
                leite={getTotalToday()}
                subtitulo={isLoading ? 'Carregando...' : 'Total de leite'}
            />
            <CardRegistrer onRecordAdded={fetchMamadas}/>

        </View>

        </ScrollView>
        </KeyboardAvoidingView>
    )
}