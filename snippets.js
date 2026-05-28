/* ─────────────────────────────────────────
   CODE SNIPPETS DATA
───────────────────────────────────────── */
const CODE_SNIPPETS = {
  "eco-cli": `# O ponto de entrada para orquestrar:
$ docker system info
$ docker network ls
$ docker volume ls
$ docker compose up -d`,

  "eco-daemon": `# Socket de comunicação
/var/run/docker.sock

# Componentes internos
dockerd → containerd → runc`,

  "eco-registry": `# Baixar imagem do Hub
$ docker pull nginx:alpine

# Enviar sua imagem
$ docker push user/meu-app:v1`,

  "eco-redes": `# Criar uma rede bridge customizada
$ docker network create app-net

# Iniciar container conectado à rede
$ docker run -d --net app-net --name web nginx

# Listar todas as redes no host
$ docker network ls`,

  "eco-volumes": `# Criar volume nomeado persistente
$ docker volume create pg-data

# Montar volume no container (postgres)
$ docker run -d -v pg-data:/var/lib/postgresql/data postgres

# Inspecionar detalhes do volume
$ docker volume inspect pg-data`,

  "eco-compose": `# Subir stack completa em background
$ docker compose up -d

# Visualizar status dos serviços compose
$ docker compose ps

# Derrubar stack e remover volumes
$ docker compose down -v`,

  "reproducible-env": `# Novo dev no time? Só isso:
$ git clone repo && docker compose up
# Ambiente idêntico em 2 minutos ✓`,

  "dependency-isolation": `# Projeto A — Node 16
docker run node:16 node -v

# Projeto B — Node 20 (mesmo host!)
docker run node:20 node -v`,

  "cicd-simplified": `# Pipeline GitHub Actions
- name: Build e Push
  run: |
    docker build -t app:$SHA .
    docker push app:$SHA
# Mesma imagem → staging → prod`,

  "horizontal-scaling": `# Sobe 5 instâncias do serviço web
$ docker compose up --scale web=5

# Resultado:
web_1, web_2, web_3, web_4, web_5 ✓`,

  "security-isolation": `# Limitar recursos do container
docker run \\
  --memory="512m" \\
  --cpus="0.5" \\
  --read-only \\
  meu-app`,

  "infrastructure-as-code": `# Tudo no git
git log --oneline
a3f2b1c fix: atualiza Node 20→22
7d9e4f0 feat: adiciona serviço Redis
2c8a1b3 chore: reduz imagem (multi-stage)`,

  "cmd-run": `# docker run: Cria e inicia um novo container a partir de uma imagem.
# -d: Roda em modo background ('detached'), liberando o terminal.
# -p 3000:3000: Mapeia a porta 3000 do host para a porta 3000 interna do container.
# --name minha-api: Dá um nome amigável e único para identificação do container.
$ docker run -d -p 3000:3000 --name minha-api meu-app`,

  "cmd-ps": `# docker ps: Lista todos os containers ativos no momento.
# Dica: Adicione o parâmetro '-a' (docker ps -a) para exibir também os containers inativos/parados.
$ docker ps`,

  "cmd-logs": `# docker logs: Exibe a saída padrão de log (console.log / logs da aplicação).
# -f: Modo 'follow' (acompanha e atualiza as novas linhas em tempo real no console).
$ docker logs -f minha-api`,

  "cmd-exec": `# docker exec: Executa um comando específico dentro de um container que já está ativo.
# -it: Roda em modo interativo atrelando um pseudo-TTY (essencial para shells interativos).
# sh: Abre o shell simplificado Alpine Linux (ou use 'bash' se estiver disponível na imagem).
$ docker exec -it minha-api sh`,

  "cmd-stats": `# docker stats: Exibe uma transmissão ao vivo com consumo de recursos de hardware.
# Mostra porcentagem de CPU, memória utilizada, limites, tráfego de rede e I/O de disco.
$ docker stats minha-api`,

  "cmd-stop": `# docker stop: Envia um sinal amigável SIGTERM e, após um tempo limite, SIGKILL para desligar o container.
# docker rm: Deleta o container do disco e exclui sua camada temporária gravável (Read-Write).
$ docker stop minha-api && docker rm minha-api`,

  "compose-yaml": `<span class="cy-com"># docker-compose.yml — Exemplo Real e Simples (Stack Web + Banco de Dados)</span>
<span class="cy-com"># Este arquivo define e orquestra múltiplos serviços em rede isolada de forma simples.</span>

<span class="cy-key">version</span>: <span class="cy-str">"3.8"</span> <span class="cy-com"># Versão da especificação do Compose</span>

<span class="cy-key">services</span>:
  <span class="cy-com"># 1. Serviço da Aplicação Web (Node.js/Express)</span>
  <span class="cy-key">web</span>:
    <span class="cy-key">image</span>: <span class="cy-img">node:20-alpine</span> <span class="cy-com"># Imagem base oficial do Node.js (leve)</span>
    <span class="cy-key">container_name</span>: <span class="cy-val">web-app</span> <span class="cy-com"># Nome fixo para o container ativo</span>
    <span class="cy-key">ports</span>:
      - <span class="cy-str">"3000:3000"</span> <span class="cy-com"># Mapeia a porta 3000 do host para a 3000 do container</span>
    <span class="cy-key">environment</span>:
      <span class="cy-com"># Variável de ambiente com as credenciais de conexão ao banco</span>
      - <span class="cy-val">DATABASE_URL=postgres://postgres:senha123@db:5432/db_production</span>
    <span class="cy-key">depends_on</span>:
      - <span class="cy-val">db</span> <span class="cy-com"># Garante que o banco inicie antes da aplicação</span>

  <span class="cy-com"># 2. Serviço de Banco de Dados (PostgreSQL)</span>
  <span class="cy-key">db</span>:
    <span class="cy-key">image</span>: <span class="cy-img">postgres:16-alpine</span> <span class="cy-com"># Imagem oficial estável do PostgreSQL</span>
    <span class="cy-key">container_name</span>: <span class="cy-val">db-postgres</span>
    <span class="cy-key">environment</span>:
      - <span class="cy-val">POSTGRES_USER=postgres</span>
      - <span class="cy-val">POSTGRES_PASSWORD=senha123</span> <span class="cy-com"># Senha de acesso</span>
      - <span class="cy-val">POSTGRES_DB=db_production</span> <span class="cy-com"># Banco de dados criado na inicialização</span>
    <span class="cy-key">volumes</span>:
      - <span class="cy-val">pgdata:/var/lib/postgresql/data</span> <span class="cy-com"># Persiste os dados de escrita no host</span>
    <span class="cy-key">ports</span>:
      - <span class="cy-str">"5432:5432"</span> <span class="cy-com"># Permite conectar ao banco via host (opcional)</span>

<span class="cy-com"># Definição dos volumes persistentes gerenciados pelo Docker</span>
<span class="cy-key">volumes</span>:
  <span class="cy-key">pgdata</span>: <span class="cy-com"># Cria o volume nomeado 'pgdata' no disco do host</span>`
};

function loadCodeSnippets() {
  document.querySelectorAll("[data-code-id]").forEach(el => {
    const id = el.getAttribute("data-code-id");
    if (CODE_SNIPPETS[id]) {
      if (id === "compose-yaml") {
        el.innerHTML = CODE_SNIPPETS[id];
      } else {
        el.textContent = CODE_SNIPPETS[id];
      }
    }
  });
}

// Load as soon as script runs or on DOMContentLoaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadCodeSnippets);
} else {
  loadCodeSnippets();
}
