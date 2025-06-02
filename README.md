# Sistema de Gerenciamento de Fila 👨‍⚕️

Um sistema web moderno e intuitivo para gerenciar filas de atendimento em clínicas, consultórios e estabelecimentos de saúde.

## 📋 Sobre o Projeto

O Sistema de Gerenciamento de Fila foi desenvolvido para otimizar o processo de atendimento ao paciente, proporcionando uma interface clean e funcional para organizar e controlar filas de espera de forma eficiente.

### ✨ Funcionalidades

- **Adicionar Pacientes**: Interface simples para inserir novos pacientes na fila
- **Chamar Próximo**: Sistema para avançar na fila e chamar o próximo paciente
- **Visualização em Tempo Real**: Acompanhe o paciente atual sendo atendido
- **Estatísticas**: Contadores de pacientes na fila e já atendidos
- **Histórico de Atendimentos**: Registro dos pacientes já atendidos com timestamps
- **Interface Responsiva**: Funciona perfeitamente em desktop e dispositivos móveis
- **Notificações**: Feedback visual quando pacientes são adicionados

### 🎨 Características Visuais

- Design moderno com gradientes suaves
- Animações e transições fluidas
- Ícones FontAwesome para melhor UX
- Paleta de cores profissional (azul e verde)
- Layout responsivo com CSS Grid
- Scrollbar customizada

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização com Tailwind CSS e custom styles
- **JavaScript (ES6+)**: Lógica da aplicação e manipulação do DOM
- **Tailwind CSS**: Framework CSS para estilização rápida
- **FontAwesome**: Biblioteca de ícones
- **Google Fonts (Poppins)**: Tipografia moderna

## 📁 Estrutura do Projeto

```
sistema-fila/
├── index.html          # Página principal da aplicação
├── js/
│   └── script.js       # Lógica JavaScript da aplicação
└── README.md           # Este arquivo
```

## 🔧 Como Usar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão com internet (para carregar dependências externas)

### Instalação e Execução

1. **Clone o repositório**:
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd sistema-fila
   ```

2. **Abra o arquivo HTML**:
   - Abra o arquivo `index.html` diretamente no seu navegador
   - Ou utilize um servidor local como Live Server (VSCode) ou Python SimpleHTTPServer

3. **Comece a usar**:
   - Digite o nome do paciente no campo "Nome do paciente"
   - Clique em "Adicionar à Fila" ou pressione Enter
   - Use "Chamar Próximo Paciente" para avançar na fila

## 💡 Funcionalidades Detalhadas

### Adicionar Paciente
- Campo de entrada com validação (não aceita nomes vazios)
- Tecla Enter como atalho para adicionar
- Notificação de sucesso com animação

### Gerenciar Fila
- Visualização ordenada dos pacientes em espera
- Destaque visual para o próximo paciente
- Contadores em tempo real

### Paciente Atual
- Área dedicada com destaque visual
- Animação de pulso para chamar atenção
- Instruções claras para o paciente

### Histórico
- Registro automático dos pacientes atendidos
- Timestamps simulados para referência
- Interface colapsável (aparece apenas quando há histórico)

## 🎯 Casos de Uso

- **Clínicas Médicas**: Organizar consultas e procedimentos
- **Consultórios Odontológicos**: Gerenciar atendimentos
- **Laboratórios**: Controlar coletas e exames
- **Recepções Hospitalares**: Organizar triagem
- **Outros Estabelecimentos**: Qualquer local que precise de controle de fila

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 👨‍🏫 Orientação

**Orientador**: Luan Oliveira dos Santos
