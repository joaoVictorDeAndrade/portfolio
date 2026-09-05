import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LOCALE_PATH = 'seo';

function updateMetaContent(selector, content) {
  document.querySelector(selector)?.setAttribute('content', content);
}

export function Seo() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const title = t(`${LOCALE_PATH}.title`);
    const description = t(`${LOCALE_PATH}.description`);
    const locale = i18n.resolvedLanguage === 'pt' ? 'pt_BR' : 'en_US';

    document.title = title;
    updateMetaContent('meta[name="description"]', description);
    updateMetaContent('meta[property="og:title"]', title);
    updateMetaContent('meta[property="og:description"]', description);
    updateMetaContent('meta[property="og:locale"]', locale);
    updateMetaContent('meta[name="twitter:title"]', title);
    updateMetaContent('meta[name="twitter:description"]', description);
  }, [i18n.resolvedLanguage, t]);

  return null;
}
