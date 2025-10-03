# 🍼 MilkBaby - Aplicativo de Monitoramento de Alimentação Infantil

Um aplicativo React Native desenvolvido com Expo para acompanhar e registrar as mamadas do bebê durante o dia.

## 📱 Sobre o Aplicativo

O MilkBaby é uma ferramenta útil para pais e cuidadores acompanhar a alimentação dos bebês, permitindo:

- ✅ Registrar mamadas com quantidade e horário
- 📊 Visualizar total de leite consumido no dia atual
- 📋 Consultar histórico completo de mamadas
- 🔄 Interface intuitiva e fácil de usar

## 📸 Screenshots

### Tela Registrar
![Tela Registrar - Registro de Mamadas](assests/app.png)

*A interface principal para registro rápido de mamadas com visualização do total diário de leite consumido (186 ml no exemplo)*

## 🛠️ Tecnologias Utilizadas

- **React Native** (v19.0.0)
- **Expo** (v53.0.9)
- **TypeScript**
- **React Navigation** (Bottom Tabs)
- **Axios** (para requisições HTTP)
- **date-fns** (manipulação de datas)
- **Phosphor Icons** (ícones)

### Bibliotecas de UI e Fontes

- Phosphor React Native (ícones)
- Google Fonts - Roboto
- React Native Modal DateTime Picker
- React Native Safe Area Context

## 📋 Pré-requisitos

Para executar este projeto, você precisa ter instalado:

- Node.js (versão 16 ou superior)
- npm ou yarn
- Expo CLI
- Para desenvolvimento móvel:
  - Expo Go app (iOS/Android)
  - Para iOS: Xcode
  - Para Android: Android Studio

## 🚀 Como Executar

1. **Clone o projeto**
   ```bash
   git clone <repository-url>
   cd baby-feeding-monitoring
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o projeto**
   ```bash
   npm start
   # ou
   yarn start
   ```

4. **Execute em diferentes plataformas**
   ```bash
   # Para Android
   npm run android

   # Para iOS
   npm run ios

   # Para Web
   npm run web
   ```

5. **Teste no dispositivo**
   - Use o app Expo Go para escanear o QR code
   - Ou conecte um emulador/dispositivo para desenvolvimento

## 📁 Estrutura do Projeto

```
baby-feeding-monitoring/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── CardDay/        # Card de resumo diário
│   │   ├── CardMamadas/    # Card de mamada individual
│   │   ├── CardRegistrer/  # Formulário de registro
│   │   └── Header/         # Cabeçalho da aplicação
│   ├── hooks/              # Custom hooks
│   │   └── useMamadas.ts   # Hook para gerenciar mamadas
│   ├── screens/            # Telas da aplicação
│   │   ├── Register/       # Tela de registro
│   │   └── Historical/     # Tela de histórico
│   ├── types/              # Definições TypeScript
│   ├── utils/              # Funções utilitárias
│   ├── instance/           # Configuração da API
│   └── theme/              # Tema da aplicação
├── assets/                 # Imagens e ícones
├── App.tsx                 # Componente principal
└── package.json
```

## 🔧 Configuração da API

O aplicativo se conecta a uma API backend para persistir os dados. Certifique-se de que a API esteja configurada corretamente no arquivo `src/instance/instance.ts`.

### Endpoints Utilizados

- `GET /mamada/register` - Buscar todas as mamadas
- `POST /mamada/includes` - Registrar nova mamada

## 📱 Funcionalidades

### Tela Registrar
- Registro rápido de mamadas com hora e quantidade
- Visualização do total de leite consumido hoje
- Interface responsiva com teclado adaptável

### Tela Histórico
- Lista completa de mamadas registradas
- Atualização em tempo real dos dados
- Visualização organizada por data/hora

## 🎨 Temas e Cores

O aplicativo utiliza um tema customizado definido em `src/theme/index.ts` com cores padronizadas para manter consistência visual.

## 📦 Comandos Disponíveis

```bash
npm start          # Inicia o servidor de desenvolvimento do Expo
npm run android    # Executa no Android
npm run ios        # Executa no iOS
npm run web        # Executa no navegador
```

## 🔒 Controle de Qualidade

- **TypeScript**: Tipagem forte para maior segurança
- **Validação**: Validação de inputs com limites configuráveis
- **Tratamento de Erros**: Mensagens de erro padronizadas
- **Estados de Loading**: Feedback visual durante requisições

## 🌐 Compatibilidade

- ✅ iOS 11+
- ✅ Android 5.0+ (API 21+)
- ✅ PWA (Progressive Web App)

## 📝 Licença

Este projeto é privado e destinado ao uso pessoal/familiar.

## 🤝 Contribuição

Este é um projeto pessoal, mas sugestões e melhorias são sempre bem-vindas!

## 📞 Suporte

Para dúvidas ou problemas, verifique se:
- Todas as dependências estão instaladas
- A API backend está funcionando
- As configurações do Expo estão corretas

---

**Desenvolvido com ❤️ para acompanhar o crescimento do bebê**
