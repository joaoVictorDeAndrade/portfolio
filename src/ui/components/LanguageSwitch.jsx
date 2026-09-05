import { Switch } from '@components/Switch.jsx';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { setPreferredLanguage } from '@app/internationalization/i18n.js';

import brazilLogo from '/brazil.svg?url';
import unitedStatesLogo from '/unitedStates.svg?url';

const LOCALE_PATH = 'components.LanguageSwitch';

const languages = [
  {
    code: 'pt',
    label: 'Português',
    flag: brazilLogo,
  },
  {
    code: 'en',
    label: 'English',
    flag: unitedStatesLogo,
  },
];

export function LanguageSwitch({ variant = 'desktop', onLanguageChange }) {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'pt' : 'en';
    setPreferredLanguage(newLanguage);
  };

  const changeLanguage = (language) => {
    setPreferredLanguage(language);
    onLanguageChange?.();
  };

  if (variant === 'menu') {
    return (
      <div
        className="grid grid-cols-2 gap-3 border-t border-white/10 pt-5"
        aria-label={t(`${LOCALE_PATH}.label`)}
      >
        {languages.map(({ code, label, flag }) => {
          const isSelected = i18n.language === code;

          return (
            <button
              key={code}
              type="button"
              lang={code}
              aria-pressed={isSelected}
              className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/10 px-3 text-sm transition-colors hover:bg-white/10 aria-pressed:border-secondary-main aria-pressed:bg-white/10"
              onClick={() => changeLanguage(code)}
            >
              <img src={flag} alt="" className="h-6 w-6" />
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  const nextLanguage = i18n.language === 'en' ? 'PT' : 'EN';

  return (
    <div className="absolute right-6 hidden items-center gap-1 lg:flex">
      <img src={brazilLogo} alt="" />
      <Switch
        id="language"
        aria-label={`${nextLanguage} — ${t(`${LOCALE_PATH}.label`)}`}
        onCheckedChange={toggleLanguage}
        checked={i18n.language === 'en'}
      />
      <img src={unitedStatesLogo} alt="" />
    </div>
  );
}

LanguageSwitch.propTypes = {
  onLanguageChange: PropTypes.func,
  variant: PropTypes.oneOf(['desktop', 'menu']),
};
