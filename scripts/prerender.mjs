import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(scriptDirectory, '..');
const clientHtmlPath = path.join(projectDirectory, 'dist/index.html');
const serverBuildPath = path.join(projectDirectory, 'dist-ssr/entry-server.js');
const rootPlaceholder = '<div id="root"></div>';
const siteUrl = 'https://joaoandrade.dev.br';
const routes = [
  {
    language: 'pt',
    url: `${siteUrl}/`,
    outputPath: path.join(projectDirectory, 'dist/index.html'),
  },
  {
    language: 'en',
    url: `${siteUrl}/en/`,
    outputPath: path.join(projectDirectory, 'dist/en/index.html'),
  },
];

const template = await readFile(clientHtmlPath, 'utf8');
const { render } = await import(pathToFileURL(serverBuildPath).href);
const defaultPage = await render('pt');

function replaceRequired(content, search, replacement) {
  if (!content.includes(search)) {
    throw new Error(`Conteúdo esperado não encontrado: ${search}`);
  }

  return content.replace(search, replacement);
}

function replaceAllRequired(content, search, replacement) {
  if (!content.includes(search)) {
    throw new Error(`Conteúdo esperado não encontrado: ${search}`);
  }

  return content.split(search).join(replacement);
}

function localizeTemplate(page, url) {
  let html = template;

  html = replaceRequired(
    html,
    `<html lang="${defaultPage.metadata.htmlLanguage}">`,
    `<html lang="${page.metadata.htmlLanguage}">`
  );
  html = replaceAllRequired(
    html,
    defaultPage.metadata.title,
    page.metadata.title
  );
  html = replaceAllRequired(
    html,
    defaultPage.metadata.description,
    page.metadata.description
  );
  html = replaceAllRequired(
    html,
    defaultPage.metadata.socialImageAlt,
    page.metadata.socialImageAlt
  );
  html = replaceAllRequired(
    html,
    defaultPage.metadata.jobTitle,
    page.metadata.jobTitle
  );
  html = replaceAllRequired(
    html,
    defaultPage.metadata.personDescription,
    page.metadata.personDescription
  );
  html = replaceRequired(
    html,
    `<meta property="og:locale" content="${defaultPage.metadata.locale}" />`,
    `<meta property="og:locale" content="${page.metadata.locale}" />`
  );
  html = replaceRequired(
    html,
    `<meta property="og:locale:alternate" content="${defaultPage.metadata.alternateLocale}" />`,
    `<meta property="og:locale:alternate" content="${page.metadata.alternateLocale}" />`
  );
  html = replaceRequired(
    html,
    `<link rel="canonical" href="${siteUrl}/" />`,
    `<link rel="canonical" href="${url}" />`
  );
  html = replaceRequired(
    html,
    `<meta property="og:url" content="${siteUrl}/" />`,
    `<meta property="og:url" content="${url}" />`
  );
  html = replaceAllRequired(html, `"url": "${siteUrl}/"`, `"url": "${url}"`);

  return replaceRequired(
    html,
    rootPlaceholder,
    `<div id="root">${page.appHtml}</div>`
  );
}

for (const route of routes) {
  const page =
    route.language === 'pt' ? defaultPage : await render(route.language);
  const prerenderedHtml = localizeTemplate(page, route.url);

  await mkdir(path.dirname(route.outputPath), { recursive: true });
  await writeFile(route.outputPath, prerenderedHtml);
}

await rm(path.dirname(serverBuildPath), { recursive: true, force: true });

console.log('Páginas pré-renderizadas em português e inglês.');
