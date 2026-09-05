import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { scrollTo } from '@app/utils/scrollTo.js';

import { LanguageSwitch } from '@components/LanguageSwitch.jsx';

const LOCALE_PATH = 'components.Header';

export function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const closeMenuOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', closeMenuOnEscape);
    return () => document.removeEventListener('keydown', closeMenuOnEscape);
  }, [isMenuOpen]);

  const goToHome = () => {
    scrollTo(0);
    closeMenu();
  };

  return (
    <header className="fixed left-0 top-0 z-10 h-20 w-full bg-background bg-opacity-80 text-white drop-shadow-md backdrop-blur">
      <div className="relative flex h-full items-center justify-between px-5 lg:justify-center lg:px-0">
        <a
          href="#hero"
          translate="no"
          className="font-jakarta font-semibold lg:hidden"
          onClick={goToHome}
        >
          João Andrade
        </a>

        <nav
          className="hidden lg:block"
          aria-label={t(`${LOCALE_PATH}.navigation`)}
        >
          <ul className="flex gap-12 font-jakarta">
            <li>
              <a href="#hero" translate="no" onClick={goToHome}>
                {t(`${LOCALE_PATH}.home`)}
              </a>
            </li>
            <li>
              <span
                aria-disabled="true"
                className="cursor-not-allowed text-white/50"
              >
                {t(`${LOCALE_PATH}.projects`)}
              </span>
            </li>
            <li>
              <a href="#experience">{t(`${LOCALE_PATH}.experience`)}</a>
            </li>
            <li>
              <a href="#footer">{t(`${LOCALE_PATH}.contact`)}</a>
            </li>
          </ul>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg lg:hidden"
          aria-label={t(
            `${LOCALE_PATH}.${isMenuOpen ? 'closeMenu' : 'openMenu'}`
          )}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <LanguageSwitch />
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label={t(`${LOCALE_PATH}.navigation`)}
          className="border-t border-white/10 bg-background px-5 py-6 shadow-xl lg:hidden"
        >
          <ul className="mb-5 space-y-1 font-jakarta">
            <li>
              <a
                href="#hero"
                translate="no"
                className="block rounded-lg px-3 py-3 hover:bg-white/10"
                onClick={goToHome}
              >
                {t(`${LOCALE_PATH}.home`)}
              </a>
            </li>
            <li>
              <span
                aria-disabled="true"
                className="block cursor-not-allowed rounded-lg px-3 py-3 text-white/40"
              >
                {t(`${LOCALE_PATH}.projects`)}
              </span>
            </li>
            <li>
              <a
                href="#experience"
                className="block rounded-lg px-3 py-3 hover:bg-white/10"
                onClick={closeMenu}
              >
                {t(`${LOCALE_PATH}.experience`)}
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className="block rounded-lg px-3 py-3 hover:bg-white/10"
                onClick={closeMenu}
              >
                {t(`${LOCALE_PATH}.contact`)}
              </a>
            </li>
          </ul>

          <LanguageSwitch variant="menu" onLanguageChange={closeMenu} />
        </nav>
      )}
    </header>
  );
}
