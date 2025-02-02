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
  interpolation: {
    escapeValue: false,
  },
});

export const { t } = i18n;
export default i18n;
