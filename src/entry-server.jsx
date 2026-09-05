import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';

import App from './App.jsx';
import i18n from './app/internationalization/i18n.js';

export async function render(language) {
  await i18n.changeLanguage(language);

  const appHtml = renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );

  return {
    appHtml,
    metadata: {
      title: i18n.t('seo.title'),
      description: i18n.t('seo.description'),
      socialImageAlt: i18n.t('seo.socialImageAlt'),
      jobTitle: i18n.t('seo.jobTitle'),
      personDescription: i18n.t('seo.personDescription'),
      htmlLanguage: language === 'pt' ? 'pt-BR' : 'en',
      locale: language === 'pt' ? 'pt_BR' : 'en_US',
      alternateLocale: language === 'pt' ? 'en_US' : 'pt_BR',
    },
  };
}
