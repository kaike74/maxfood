# MaxFood — plano do site

MVP de landing + protótipo para banca (Shark Tank), publicado na Cloudflare Pages.

- Site: https://maxfood.pages.dev
- Código: https://github.com/kaike74/maxfood

## Stack

Vite + React + TypeScript + Tailwind CSS v4. Deploy: Cloudflare Workers (assets SPA) ou Pages. Mesma receita de `wrangler deploy` usada no `relatorio-demandas-economia`.

## Rotas

| Rota | Função |
|------|--------|
| `/` | Landing |
| `/sobre` | Contexto do produto |
| `/precos` | Assinatura R$ 197–297 |
| `/privacidade` | Aviso curto (protótipo, sem backend) |
| `/app` | Login demo (Supermercado Central / Restaurante Villa) |
| `/app/dashboard` | KPIs: estoque, validade, R$ em risco |
| `/app/estoque` | Lista de produtos e prazos |
| `/app/alertas` | Alertas inteligentes |
| `/app/ofertas` | Marketplace interno vendedor ↔ consumidor |
| `/demo` | Redireciona para `/app` |
| `*` | 404 |

Dados 100% mock no cliente (`src/data/mock.ts`).

## SEO e compartilhamento

- `index.html`: title, description, `og:title`, `og:description`, `og:image` (logo), `lang="pt-BR"`
- Favicon: `/logo-maxfood.jpg`
- SPA: `wrangler.jsonc` `not_found_handling: single-page-application` e `public/_redirects` para Pages

## QR

- PNG em `public/qr-maxfood.png`
- Geração: `npm run generate-qr -- https://URL`
- Bloco grande na landing (`#qr`) + URL por escrito
- URL canônica em `src/config.ts` (`SITE_URL`)

## Visual

Verdes da marca (forest / leaf / lime), branco, logo e one-pager oficiais. Não usar paleta roxa de outros produtos.

## Responsivo e acessibilidade

- Header com CTA no mobile
- QR ~256–320 px, utilizável no celular da banca
- Tabelas com scroll horizontal
- Contraste alto no hero escuro
- `alt` no logo e no QR

## v2 (não bloqueia o ar)

- Backend real e autenticação
- Integração com PDV/ERP
- Pagamento da assinatura
- App nativo do consumidor
- Domínio próprio
- Formulário de demonstração com e-mail
