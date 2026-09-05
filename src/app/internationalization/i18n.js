import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en-US.js';
import pt from './pt-BR.js';

const resources = {
  en,
  pt,
};

function getDefaultLanguage() {
  return navigator.language?.includes('pt') ? 'pt' : 'en';
}

i18n.use(initReactI18next).init({
  resources,
  lng: getDefaultLanguage(),
  fallbackLng: 'en',
  supportedLngs: ['en', 'pt'],
  interpolation: {
    escapeValue: false,
  },
});

function updateDocumentLanguage(language) {
  document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
}

updateDocumentLanguage(i18n.resolvedLanguage);
i18n.on('languageChanged', updateDocumentLanguage);

export const { t } = i18n;
export default i18n;
