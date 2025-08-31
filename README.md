# Dashboard Financeiro

Um dashboard financeiro moderno construído com Next.js, apresentando gráficos interativos e interface com tema escuro.

![Preview do Dashboard](public/placeholder.jpg)

## Visão Geral

Este projeto é um dashboard financeiro responsivo que fornece análises visuais através de gráficos interativos e visualização de dados. Construído com tecnologias web modernas, oferece uma interface elegante com tema escuro otimizada tanto para visualização em desktop quanto em dispositivos móveis.

## Funcionalidades

- 📊 Gráficos e visualizações financeiras interativas
- 🌙 Interface com tema escuro
- 📱 Layout totalmente responsivo
- 💰 Acompanhamento e visualização de transações
- 📈 Análise de receitas e despesas
- 🔍 Funcionalidade de busca
- 🔔 Sistema de notificações

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Estilização
- [Shadcn UI](https://ui.shadcn.com/) - Componentes de UI
- [Recharts](https://recharts.org/) - Componentes de gráficos
- [Geist Font](https://vercel.com/font) - Tipografia
- [Radix UI](https://www.radix-ui.com/) - Componentes primitivos
- [Lucide Icons](https://lucide.dev/) - Ícones

## Como Começar

### Pré-requisitos

- Node.js 18.x ou superior
- pnpm (recomendado) ou npm

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Louissilver/vibe_coding_v0_dev_dashboard_financeiro.git
cd vibe_coding_v0_dev_dashboard_financeiro
```

2. Instale as dependências:

```bash
pnpm install
```

3. Execute o servidor de desenvolvimento:

```bash
pnpm dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## Estrutura do Projeto

```
├── app/               # Diretório Next.js
├── components/        # Componentes React
│   ├── ui/           # Componentes UI reutilizáveis
│   └── charts/       # Componentes de gráficos
├── hooks/            # Hooks React personalizados
├── lib/              # Funções utilitárias
├── public/           # Arquivos estáticos
└── styles/           # Estilos globais
```

## Principais Componentes

- **DashboardHeader**: Navegação principal e funcionalidade de busca
- **MetricCards**: Exibição de métricas financeiras principais
- **ChartsSection**: Gráficos financeiros interativos
- **TransactionsTable**: Lista de transações recentes
- **CategoryChart**: Detalhamento de categorias de despesas
- **RevenueChart**: Acompanhamento de receitas
- **ExpenseChart**: Análise de despesas

## Personalização

O projeto utiliza variáveis CSS para temas, definidas em [`app/globals.css`](app/globals.css). Você pode personalizar cores e outros tokens de design modificando essas variáveis.

### Cores do Tema

```css
:root {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --primary: oklch(0.646 0.222 264.376);
  /* ... outras variáveis de cor */
}
```

## Abordagem de Desenvolvimento

Este dashboard foi desenvolvido usando [V0.dev](https://v0.dev), uma poderosa ferramenta de desenvolvimento de UI baseada em IA. O processo de desenvolvimento focou em:

1. Criar um layout responsivo que funciona em diferentes dispositivos
2. Implementar gráficos interativos para visualização de dados
3. Garantir estilização consistente do tema escuro
4. Construir componentes reutilizáveis com Shadcn UI
5. Otimizar performance e acessibilidade

## Como Foi Criado

O projeto foi gerado inicialmente usando o V0.dev, uma ferramenta de IA para desenvolvimento de interfaces web. O processo incluiu:

1. Geração do layout base através de prompts descritivos
2. Refinamento dos componentes gerados para atender às necessidades específicas
3. Implementação de interatividade e responsividade
4. Integração com o tema escuro e ajustes visuais
5. Otimização de performance e acessibilidade

## Objetivo do Projeto

O objetivo principal deste dashboard é fornecer uma interface moderna e intuitiva para visualização e análise de dados financeiros. Seus principais propósitos são:

- Permitir o acompanhamento visual de métricas financeiras importantes
- Facilitar a análise de tendências através de gráficos interativos
- Oferecer uma experiência de usuário consistente em diferentes dispositivos
- Demonstrar a integração eficiente de tecnologias modernas de frontend
- Servir como exemplo de implementação usando V0.dev, Tailwind CSS e Shadcn UI

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para enviar um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

## Agradecimentos

- [V0.dev](https://v0.dev) pelo auxílio no desenvolvimento da UI
- [Shadcn UI](https://ui.shadcn.com/) pelos templates de componentes
- [Tailwind CSS](https://tailwindcss.com/) pelas utilidades de estilização
