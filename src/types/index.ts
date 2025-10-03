// Tipos para as mamadas/registros de alimentação
export interface MamadaRecord {
    id: number;
    quantidade: number;
    dataHora: string;
    observacao?: string;
}

// Tipo para criar/postar uma nova mamada
export interface CreateMamadaRequest {
    quantidade: number;
    dataHora: string;
    observacao?: string;
}

// Propriedades para o componente CardRegistrer
export interface CardRegistrerProps {
    onRecordAdded?: () => void;
}

// Propriedades para o componente CardDay
export interface CardDayProps {
    titulo: string;
    leite: number;
    subtitulo: string;
}

// Propriedades para o componente Header
export interface HeaderProps {
    title: string;
    subtitle: string;
}

// Estados de carregamento
export interface LoadingState {
    isLoading: boolean;
    error?: string | null;
}

// Resposta da API genérica
export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
    error?: string;
}

// Tipos para navegação
export type RootTabParamList = {
    Registrar: undefined;
    Historico: undefined;
};

// Permissões de input
export const VALIDATION_LIMITS = {
    MIN_MILK_AMOUNT: 1,
    MAX_MILK_AMOUNT: 500,
    MAX_OBSERVATION_LENGTH: 200,
} as const;

// Mensagens de erro padronizadas
export const ERROR_MESSAGES = {
    REQUIRED_FIELD: 'Este campo é obrigatório',
    INVALID_AMOUNT: 'Digite uma quantidade válida (1-500ml)',
    NETWORK_ERROR: 'Erro de conexão. Verifique sua internet.',
    SERVER_ERROR: 'Erro no servidor. Tente novamente.',
    GENERIC_ERROR: 'Algo deu errado. Tente novamente.',
} as const;

export type ErrorMessage = typeof ERROR_MESSAGES[keyof typeof ERROR_MESSAGES];
