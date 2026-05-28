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
2c8a1b3 chore: reduz imagem (multi-stage)`
};

function loadCodeSnippets() {
  document.querySelectorAll("[data-code-id]").forEach(el => {
    const id = el.getAttribute("data-code-id");
    if (CODE_SNIPPETS[id]) {
      el.textContent = CODE_SNIPPETS[id];
    }
  });
}

// Load as soon as script runs or on DOMContentLoaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadCodeSnippets);
} else {
  loadCodeSnippets();
}
