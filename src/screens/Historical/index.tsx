import { ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import { Header } from "../../components/Header";
import { CardMamadas } from "../../components/CardMamadas";
import { Button } from "react-native";
import { useEffect, useState } from "react";
import instance from "../../instance/instance";

interface Mamada {
    id: number;
    quantidade: number;
    dataHora: string;
}

export function Historical(){

    const [refreshKey, setRefreshKey] = useState(0);
    const [mamadas, setMamadas] = useState<Mamada[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await instance.get('/mamada/register');
                setMamadas(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, [refreshKey]);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ width: '100%', marginHorizontal: 40, paddingBottom: 20}}>
            <Header title="Histórico de Mamadas" subtitle="09/05/2025" />

            <Button
                title="Atualizar"
                onPress={() => setRefreshKey(prev => prev + 1)}
                />
            {mamadas.length > 0 ? 
                mamadas.map((item) => (
                    <CardMamadas 
                    key={item.id}
                    leite={item.quantidade}
                    hora={item.dataHora}
                    data={item.dataHora}
                    />
                ))
                :
                <Text>Nenhuma mamada registrada.</Text>
                
            }
            </ScrollView>
            
        </View>
    )
}