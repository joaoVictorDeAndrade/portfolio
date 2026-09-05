import { readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(scriptDirectory, '..');
const clientHtmlPath = path.join(projectDirectory, 'dist/index.html');
const serverBuildPath = path.join(projectDirectory, 'dist-ssr/entry-server.js');
const rootPlaceholder = '<div id="root"></div>';

const template = await readFile(clientHtmlPath, 'utf8');
const { render } = await import(pathToFileURL(serverBuildPath).href);
const appHtml = await render();

if (!template.includes(rootPlaceholder)) {
  throw new Error('Elemento raiz não encontrado no HTML gerado pelo Vite.');
}

const prerenderedHtml = template.replace(
  rootPlaceholder,
  () => `<div id="root">${appHtml}</div>`
);

await writeFile(clientHtmlPath, prerenderedHtml);
await rm(path.dirname(serverBuildPath), { recursive: true, force: true });

console.log('Página pré-renderizada em dist/index.html.');
