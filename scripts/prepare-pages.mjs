import { readFile, mkdir, writeFile } from "node:fs/promises";
const html = await readFile("dist/client/index.html", "utf8");
for (const route of ["about", "about-us", "pricing", "how-it-works", "contact", "contact-us", "login", "create-account"]) {
  await mkdir(`dist/client/${route}`, { recursive: true });
  await writeFile(`dist/client/${route}/index.html`, html);
}
await writeFile("dist/client/404.html", html);
await writeFile("dist/client/.nojekyll", "");
