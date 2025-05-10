import { View } from "react-native";
import { styles } from "./style";
import { Header } from "../../components/Header";
import { CardMamadas } from "../../components/CardMamadas";

export function Historical(){
    return (
        <View style={styles.container}>
            <Header title="Histórico de Mamadas" subtitle="09/05/2025" />
            <CardMamadas 
                leite={20}
                hora={'10:00'}
            />
        </View>
    )
}