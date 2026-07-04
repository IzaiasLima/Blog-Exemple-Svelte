# the blacklist — Blog

Blog estático construído com [SvelteKit](https://kit.svelte.dev/) + [adapter-static](https://kit.svelte.dev/docs/adapter-static). Os posts são escritos em Markdown com front matter YAML e convertidos para HTML durante o build.

## Estrutura

```
├── src/
│   ├── app.css              # Estilos globais (fontes, variáveis, botões)
│   ├── app.html             # Template HTML do SvelteKit
│   ├── lib/components/
│   │   ├── Header.svelte    # Nav fixa, dropdown Serviços, menu mobile
│   │   ├── PostHero.svelte  # Hero com vídeo, meta, título gradiente
│   │   ├── PostArticle.svelte   # Capa + grid (sidebar + conteúdo)
│   │   ├── PostSidebar.svelte   # TOC + CTA "Fale conosco"
│   │   ├── PostShareNav.svelte  # Compartilhar, navegação entre posts
│   │   └── Footer.svelte    # Grid com brand, páginas, contato
│   └── routes/
│       ├── +layout.svelte       # Layout global
│       ├── +page.server.ts      # Redireciona / → /blog/
│       ├── +page.svelte
│       └── blog/
│           ├── +page.server.ts  # Lista todos os posts (front matter)
│           ├── +page.svelte     # Grid de cards dos posts
│           └── [slug]/
│               ├── +page.server.ts  # Lê .md, gera TOC, converte HTML
│               └── +page.svelte     # Layout do post
├── static/
│   └── assets/              # Imagens, vídeos, SVGs (servidos em /assets/)
├── post.md                  # Post: "O que é landing page para Advogados"
├── cabana.md                # Post: "Refutando 'A Cabana'"
├── svelte.config.js         # Config SvelteKit (adapter-static, precompress)
├── vercel.json              # Cache e headers de segurança
└── package.json
```

## Pré-requisitos

- **Node.js** >= 18
- **npm** (ou pnpm/yarn)

## Setup

```bash
# 1. Instalar dependências
npm install

# 2. Servidor de desenvolvimento (com HMR)
npm run dev

# 3. Build de produção
npm run build

# 4. Preview do build local
npm run preview
```

## Como criar um novo post

1. Crie um arquivo `.md` na raiz do projeto

2. Adicione o front matter YAML obrigatório:

```yaml
---
title: "Título do post"
emphasis: "Destaque no título"
hero: "Frase de destaque no hero"
date: "31/12/2026"
category: "categoria"
reading_time: "5 min"
image: "nome-do-arquivo.webp"
description: "Descrição curta"
alt: "Texto alternativo da imagem"
lead: "Parágrafo de introdução"
---
```

3. Escreva o conteúdo em Markdown após o `---`

4. Coloque a imagem de capa em `static/assets/`

5. Faça o build — o SvelteKit detecta automaticamente o novo arquivo e gera a página em `/blog/{nome-do-arquivo}`.

> O índice (TOC) é gerado automaticamente a partir dos cabeçalhos `##`, `###` do Markdown. TOCs manuais escritos como listas de links com âncora são removidos automaticamente.

## Scripts disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Servidor de desenvolvimento com recarga automática |
| `npm run build` | Build de produção estático em `build/` |
| `npm run preview` | Preview local do build gerado |
| `npm run check` | Type checking com svelte-check |
| `npm run deploy` | Deploy para produção na Vercel |
| `npm run deploy:preview` | Deploy para preview (URL temporária) |

## Deploy

### Automático (recomendado)

O deploy é automático via integração GitHub + Vercel:

1. Crie um repositório no GitHub e faça push do projeto
2. Acesse [vercel.com/new](https://vercel.com/new)
3. Importe o repositório
4. A Vercel detecta SvelteKit automaticamente (Framework Preset: SvelteKit)
5. Clique em **Deploy**

A cada novo `git push`, a Vercel executa `npm install` + `npm run build` e publica automaticamente.

### Manual (via CLI)

```bash
npm run deploy        # Deploy direto para produção
npm run deploy:preview  # Preview com URL temporária
```

> O CLI da Vercel requer Node.js >= 20.

## Cache e segurança

O `vercel.json` configura:

- **`/_app/immutable/*`** — Cache de 1 ano (arquivos com hash, imutáveis)
- **`/assets/*`** — Cache de 1 ano (imagens, vídeos, SVGs)
- **`/**`** — CDN cache de 1 dia com `stale-while-revalidate`
- **Headers de segurança:** `X-Frame-Options`, `X-Content-Type-Options`, `Strict-Transport-Security`, `Referrer-Policy`, `Permissions-Policy`

O build gera arquivos pré-comprimidos (`.br` e `.gz`) para todos os assets via `precompress: true`.

## Tecnologias

- [SvelteKit](https://kit.svelte.dev/) — Framework
- [Svelte 5](https://svelte.dev/) — Componentes com runes (`$state`, `$props`, `$derived`)
- [adapter-static](https://kit.svelte.dev/docs/adapter-static) — Geração de site estático
- [gray-matter](https://github.com/jonschlinkert/gray-matter) — Front matter YAML
- [marked](https://marked.js.org/) — Conversão Markdown → HTML
- [Vercel](https://vercel.com/) — Hospedagem e deploy
