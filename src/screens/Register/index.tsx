import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { CardDay } from "../../components/CardDay";
import { Header } from "../../components/Header";
import { styles } from "./style";
import { CardRegistrer } from "../../components/CardRegistrer";

export function Register(){
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
                leite= {0}
                subtitulo="Total de leite"
            />
            <CardRegistrer
            leite = {0}
            
            >

            </CardRegistrer>
        </View>

        </ScrollView>
        </KeyboardAvoidingView>
    )
}