import { useState, useCallback } from 'react';
import instance from '../instance/instance';
import { MamadaRecord } from '../types';

export function useMamadas() {
    const [mamadas, setMamadas] = useState<MamadaRecord[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchMamadas = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        
        try {
            const response = await instance.get('/mamada/register');
            setMamadas(response.data);
        } catch (error: any) {
            console.error('Erro ao carregar mamadas:', error);
            let errorMessage = 'Erro ao carregar dados';
            
            if (!error.response) {
                errorMessage = 'Erro de conexão. Verifique sua internet.';
            } else if (error.response.status >= 500) {
                errorMessage = 'Erro no servidor. Tente novamente.';
            }
            
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const addMamada = useCallback(async (novaMamada: MamadaRecord) => {
        setIsLoading(true);
        setError(null);
        
        try {
            const response = await instance.post('/mamada/includes', novaMamada);
            await fetchMamadas(); // Refresh the list
            return response.data;
        } catch (error: any) {
            console.error('Erro ao adicionar mamada:', error);
            let errorMessage = 'Erro ao adicionar registro';
            
            if (!error.response) {
                errorMessage = 'Erro de conexão. Verifique sua internet.';
            } else if (error.response.status >= 500) {
                errorMessage = 'Erro no servidor. Tente novamente.';
            }
            
            setError(errorMessage);
            throw error;
        } finally {
            setIsLoading(false);
        }
    }, [fetchMamadas]);

    const getTotalToday = useCallback(() => {
        const today = new Date().toDateString();
        return mamadas
            .filter(mamada => new Date(mamada.dataHora).toDateString() === today)
            .reduce((total, mamada) => total + mamada.quantidade, 0);
    }, [mamadas]);

    return {
        mamadas,
        isLoading,
        error,
        fetchMamadas,
        addMamada,
        getTotalToday,
        clearError: () => setError(null)
    };
}

