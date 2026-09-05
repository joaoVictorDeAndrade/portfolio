import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en-US.js';
import pt from './pt-BR.js';

const resources = {
  en,
  pt,
};

const supportedLanguages = ['en', 'pt'];
const languageStorageKey = 'portfolioLanguage';
const prerenderLanguage = 'pt';
const isBrowser = typeof window !== 'undefined';
const languageRoutes = {
  en: '/en/',
  pt: '/',
};

function getRouteLanguage() {
  if (!isBrowser) {
    return null;
  }

  return window.location.pathname.startsWith('/en') ? 'en' : null;
}

function getStoredLanguage() {
  if (!isBrowser) {
    return null;
  }

  try {
    const language = localStorage.getItem(languageStorageKey);
    return supportedLanguages.includes(language) ? language : null;
  } catch {
    return null;
  }
}

function getPreferredLanguage() {
  const storedLanguage = getStoredLanguage();

  if (storedLanguage) {
    return storedLanguage;
  }

  if (!isBrowser) {
    return prerenderLanguage;
  }

  const preferredLanguages = navigator.languages ?? [navigator.language];
  const browserLanguage = preferredLanguages
    .map((language) => language?.toLowerCase().split('-')[0])
    .find((language) => supportedLanguages.includes(language));

  return browserLanguage ?? 'en';
}

function getInitialLanguage() {
  if (!isBrowser) {
    return prerenderLanguage;
  }

  const routeLanguage = getRouteLanguage();

  if (routeLanguage) {
    return routeLanguage;
  }

  const rootElement = document.getElementById('root');

  if (rootElement?.hasChildNodes()) {
    return document.documentElement.lang.split('-')[0];
  }

  return getPreferredLanguage();
}

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  supportedLngs: supportedLanguages,
  interpolation: {
    escapeValue: false,
  },
});

function updateDocumentLanguage(language) {
  if (isBrowser) {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }
}

updateDocumentLanguage(i18n.resolvedLanguage);
i18n.on('languageChanged', updateDocumentLanguage);

export function setPreferredLanguage(language) {
  if (!supportedLanguages.includes(language)) {
    return;
  }

  try {
    localStorage.setItem(languageStorageKey, language);
  } catch {
    // A preferência ainda é aplicada quando o armazenamento está indisponível.
  }

  if (
    isBrowser &&
    window.location.pathname !== languageRoutes[language] &&
    !(
      language === 'en' &&
      window.location.pathname.startsWith(languageRoutes.en)
    )
  ) {
    window.location.assign(languageRoutes[language]);
    return;
  }

  i18n.changeLanguage(language);
}

export function syncLanguageWithPreferences() {
  const routeLanguage = getRouteLanguage();

  if (routeLanguage) {
    if (i18n.resolvedLanguage !== routeLanguage) {
      i18n.changeLanguage(routeLanguage);
    }
    return;
  }

  const preferredLanguage = getPreferredLanguage();

  if (isBrowser && preferredLanguage === 'en') {
    window.location.replace(languageRoutes.en);
    return;
  }

  if (i18n.resolvedLanguage !== preferredLanguage) {
    i18n.changeLanguage(preferredLanguage);
  }
}

export const { t } = i18n;
export default i18n;
