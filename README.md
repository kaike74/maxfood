# MaxFood

Site e protótipo do MaxFood — trabalho acadêmico estilo Shark Tank.

## Local

```
npm install
npm run generate-qr
npm run dev
```

## Publicar (Cloudflare Workers / Pages)

```
npm run generate-qr -- https://maxfood.pages.dev
npm run build
npx wrangler deploy
```

Se o Wrangler pedir login: `npx wrangler login`

URL prevista: https://maxfood.pages.dev  
Worker (alternativa): https://maxfood.kaike-458.workers.dev
