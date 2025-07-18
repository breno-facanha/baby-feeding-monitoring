// 1. Definindo a estrutura (interface ou type) para cada item de dado
// Usamos 'interface' para definir a forma do objeto.
interface DadoMocado {
  id: number; // Representa o campo de auto incremento
  ml: number; // Representa o campo ml (mililitros ou outra unidade)
  hora: string; // Representa o campo hora (um número)
  data: number; // Representa o campo data (um número)
  observacao?: string; // Representa o campo observação (texto)
}

// 2. Criando um array de dados mocados que segue a estrutura definida
// Em dados mocados estáticos, o "auto incremento" do ID é feito manualmente.
export const mamadas: DadoMocado[] = [
  {
    id: 2,
    ml: 180,
    hora: '19:00:44', // Exemplo: representando 18h
    data: 20231026, // Exemplo: mesmo dia
    observacao: 'Segunda coleta, final do dia.',
  },
  {
    id: 3,
    ml: 300,
    hora: '19:00:44', // Exemplo: representando 9h
    data: 20231027, // Exemplo: dia seguinte
    observacao: 'Coleta inicial do novo dia.',
  },
  // Adicione mais objetos DadoMocado conforme necessário
];