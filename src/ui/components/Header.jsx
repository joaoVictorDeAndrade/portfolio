import { useTranslation } from 'react-i18next';

const LOCALE_PATH = 'components.Header';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="text-white fixed left-0 top-0 z-10 h-20 w-full justify-center bg-background bg-opacity-80 drop-shadow-md backdrop-blur">
      <div className="flex h-full items-center justify-center">
        <ul className="font-jakarta flex gap-4 sm:gap-12">
          <li>
            <a href="#hero">{t(`${LOCALE_PATH}.home`)}</a>
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
      </div>
    </header>
  );
}
