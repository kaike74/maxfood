import QRCode from "qrcode";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const url = process.argv[2] || "https://maxfood.pages.dev";
const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, "../public/qr-maxfood.png");

mkdirSync(dirname(out), { recursive: true });

const png = await QRCode.toBuffer(url, {
  type: "png",
  width: 1024,
  margin: 2,
  errorCorrectionLevel: "H",
  color: { dark: "#13261b", light: "#ffffff" },
});

writeFileSync(out, png);
console.log(`QR gerado: ${out}`);
console.log(`Aponta para: ${url}`);
