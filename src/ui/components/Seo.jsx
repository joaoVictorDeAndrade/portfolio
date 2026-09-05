import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LOCALE_PATH = 'seo';

function updateMetaContent(selector, content) {
  document.querySelector(selector)?.setAttribute('content', content);
}

function updateLinkHref(selector, href) {
  document.querySelector(selector)?.setAttribute('href', href);
}

export function Seo() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const title = t(`${LOCALE_PATH}.title`);
    const description = t(`${LOCALE_PATH}.description`);
    const socialImageAlt = t(`${LOCALE_PATH}.socialImageAlt`);
    const isPortuguese = i18n.resolvedLanguage === 'pt';
    const locale = isPortuguese ? 'pt_BR' : 'en_US';
    const alternateLocale = isPortuguese ? 'en_US' : 'pt_BR';
    const canonicalUrl = `${window.location.origin}${isPortuguese ? '/' : '/en/'}`;

    document.title = title;
    updateLinkHref('link[rel="canonical"]', canonicalUrl);
    updateMetaContent('meta[name="description"]', description);
    updateMetaContent('meta[property="og:title"]', title);
    updateMetaContent('meta[property="og:description"]', description);
    updateMetaContent('meta[property="og:url"]', canonicalUrl);
    updateMetaContent('meta[property="og:locale"]', locale);
    updateMetaContent('meta[property="og:locale:alternate"]', alternateLocale);
    updateMetaContent('meta[property="og:image:alt"]', socialImageAlt);
    updateMetaContent('meta[name="twitter:title"]', title);
    updateMetaContent('meta[name="twitter:description"]', description);
    updateMetaContent('meta[name="twitter:image:alt"]', socialImageAlt);
  }, [i18n.resolvedLanguage, t]);

  return null;
}
