import { View } from "react-native";
import { CardDay } from "../../components/CardDay";
import { Header } from "../../components/Header";
import { styles } from "./style";
import { CardRegistrer } from "../../components/CardRegistrer";

export function Register(){
    return(
        <View style={styles.container}>
            <Header title="Registro do Bebê" subtitle="Acopanhamento de mamadas"/>
            <CardDay
                titulo="Hoje"
                leite="20"
                subtitulo="Total de leite"
            />
            <CardRegistrer
            leite = {0}
            horario="te"
            >

            </CardRegistrer>
        </View>
    )
}