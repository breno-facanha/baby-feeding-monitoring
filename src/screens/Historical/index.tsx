import { Text, View } from "react-native";
import { styles } from "./style";
import { Header } from "../../components/Header";
import { CardMamadas } from "../../components/CardMamadas";
import { Button } from "react-native";
import { use, useEffect, useState } from "react";
import { mamadas } from "../../db/mamadas";

export function Historical(){

    const [refreshKey, setRefreshKey] = useState(0);



    return (
        <View style={styles.container}>
            <Header title="Histórico de Mamadas" subtitle="09/05/2025" />

            <Button
                title="Atualizar"
                onPress={() => setRefreshKey(prev => prev + 1)}
            />
            {mamadas.length > 0 ? 
                mamadas.map((item) => (
                    <CardMamadas 
                        key={item.id}
                        leite={item.ml}
                        hora={item.hora}
                    />
                ))
                :
                <Text>Nenhuma mamada registrada.</Text>

            }

            
            {/* <CardMamadas 
                leite={20}
                hora={'10:00'}
            /> */}
        </View>
    )
}