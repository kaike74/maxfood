# MaxFood

Site e protótipo no ar: **https://maxfood.pages.dev**

Código: https://github.com/kaike74/maxfood

## Local

```
npm install
npm run generate-qr -- https://maxfood.pages.dev
npm run dev
```

## Publicar de novo

Push em `main` dispara Cloudflare Pages (`npm run build` → `dist`).

Alternativa Workers (depois de `npx wrangler login`):

```
npm run build
npx wrangler deploy
```

## QR

Arquivo: `public/qr-maxfood.png` (bloco “Aponte a câmera” na home).

Se a URL mudar:

```
npm run generate-qr -- https://NOVA-URL
```

Atualize também `SITE_URL` em `src/config.ts`.
