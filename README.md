# Dominando o Docker [HARD_MODE] 🐳⚡

Uma aplicação web interativa e imersiva projetada para ensinar os conceitos fundamentais e avançados de contêinerização e do ecossistema Docker. Com uma estética **retro-cyberpunk** e estilo terminal de comando, o guia proporciona uma experiência rica em aprendizado prático e visual.

---

## 🚀 Demonstração Visual & Estática

O projeto foi construído inteiramente utilizando tecnologias nativas da web (Single Page Application - SPA) e encapsulado de forma altamente portável. Ele apresenta:
- 🌌 **Fundo de Partículas Dinâmico**: Canvas 2D renderizando interações de rede em tempo real.
- 📺 **Overlay CRT Scanlines**: Filtro nostálgico que remete aos monitores de fósforo verde clássicos.
- 🔄 **Transição Buttery Smooth**: Navegação fluida por scroll, teclas (`Enter`) ou cliques na barra superior.
- 💻 **Simulador CLI Integrado**: Um laboratório interativo para rodar e entender comandos Docker reais no navegador.

---

## 🎯 Slides & Estrutura de Aprendizado

A ordem de apresentação foi cuidadosamente projetada para guiar o usuário em uma jornada do básico ao avançado:

1. **O que é Contêinerização**: Introdução teórica às primitivas do Kernel Linux (Namespaces, Cgroups, UnionFS e Kernel compartilhado).
2. **VM vs. Container**: Tabela comparativa e diagrama arquitetônico de recursos, boot, isolamento e overhead.
3. **O que é o Docker**: O modelo clássico **Build, Share, Run**.
4. **Conceitos Básicos**:
   - **Dockerfile**: Uma receita anotada interativa de aplicação Node.js (clique nas linhas para ver as explicações).
   - **Imagem**: Visualização das camadas UnionFS sobrepostas e explicação de Copy-on-Write (CoW).
   - **Container**: Ciclo de vida completo (Created, Running, Paused, Stopped, Removed) e comandos relacionados.
5. **Linha do Tempo**: Marcos históricos do Docker de 2013 até hoje.
6. **O Ecossistema Docker**: Divisão detalhada e visual dos componentes CLI, Daemon (dockerd), Registry (Hub), Redes, Volumes e Compose.
7. **Vantagens**: Isolamento, portabilidade, CI/CD simplificado, escalabilidade, segurança e IaC.
8. **Exemplo Real com Compose**: Exemplo de infraestrutura descritiva em YAML ligando Web (Node), Banco (PostgreSQL) e Cache (Redis).
9. **Laboratório Terminal**: Console interativo para simular o fluxo CLI do Docker.
10. **O Desafio do Arquiteto**: Botão estilizado com redirecionamento ao desafio gamificado oficial [Docker Game](https://harlem888.github.io/Docker-game/).

---

## 🛠️ Tecnologias Utilizadas

A aplicação foi criada sob o princípio de **overhead zero**, eliminando a necessidade de empacotadores modernos ou dependências pesadas de terceiros para rodar:

- **Estruturação**: HTML5 Semântico
- **Estilização**: CSS3 customizado (Variáveis CSS `:root`, HSL colors, Grid Layout, Flexbox, Animações `@keyframes`, Responsividade total e Efeitos Phosphor/Glow).
- **Lógica e Interatividade**: Vanilla JavaScript (Motor SPA, gerenciador de sliders de cards móveis, controle de tabs e simulador de terminal assíncrono).
- **Elementos Visuais**: Canvas API 2D e ícones inline SVG integrados.
- **Tipografia**: [Google Fonts - JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono).

---

## 💻 Como Rodar o Projeto

Como o projeto é estático e independente, você pode executá-lo de três formas muito simples:

### 1. Abertura Direta
Basta dar um duplo clique no arquivo `INDEX.html` para abri-lo diretamente em qualquer navegador moderno.

### 2. Usando Servidor HTTP Local (Recomendado)
Para melhor carregamento de imagens locais e tratamento de rotas hash no histórico do navegador, inicie um servidor web a partir da raiz do projeto:

**Usando Python (nativo):**
```bash
python -m http.server 8000
```
*Acesse em: `http://localhost:8000/INDEX.html`*

**Usando Node.js (se possuir o npm):**
```bash
npx serve .
```
*Acesse no endereço fornecido pelo terminal.*

**Usando VS Code Extension:**
- Clique com o botão direito em `INDEX.html` e selecione **Open with Live Server**.

---

## 📂 Organização dos Arquivos

```text
slides_devops/
├── INDEX.html           # A aplicação principal (HTML, CSS e JS do Deck)
├── README.md            # Documentação do projeto (este arquivo)
├── docker_nobg.png      # Logo estilizada da baleia Docker (Hero)
└── container_vs_vm.jpg  # Ilustração comparativa de VM vs Container
```

---

## 📝 Licença & Contribuição

Este é um projeto voltado para o aprendizado livre criado para auxiliar a comunidade técnica e estudantes de infraestrutura, arquitetura de sistemas e DevOps a compreenderem a tecnologia de contêineres de forma lúdica. 

Sinta-se à vontade para clonar, sugerir melhorias ou adaptar as explicações para suas próprias aulas ou apresentações! 🐳🔥
