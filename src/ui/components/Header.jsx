import { useTranslation } from 'react-i18next';
import { scrollTo } from '@app/utils/scrollTo.js';

import { LanguageSwitch } from '@components/LanguageSwitch.jsx';

const LOCALE_PATH = 'components.Header';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="fixed left-0 top-0 z-10 h-20 w-full bg-background bg-opacity-80 text-white drop-shadow-md backdrop-blur">
      <div className="relative flex h-full items-center justify-center">
        <ul className="flex gap-4 font-jakarta sm:gap-12">
          <li>
            <a href="#hero" translate="no" onClick={() => scrollTo(0)}>
              {t(`${LOCALE_PATH}.home`)}
            </a>
          </li>
          <li>
            <a href="#projects" className="cursor-not-allowed">
              {t(`${LOCALE_PATH}.projects`)}
            </a>
          </li>
          <li>
            <a href="#experience">{t(`${LOCALE_PATH}.experience`)}</a>
          </li>
          <li>
            <a href="#footer">{t(`${LOCALE_PATH}.contact`)}</a>
          </li>
        </ul>

        <LanguageSwitch />
      </div>
    </header>
  );
}
