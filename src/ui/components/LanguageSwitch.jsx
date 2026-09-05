import { Switch } from '@components/Switch.jsx';
import { useTranslation } from 'react-i18next';

import brazilLogo from '/brazil.svg?url';
import unitedStatesLogo from '/unitedStates.svg?url';

const LOCALE_PATH = 'components.LanguageSwitch';

export function LanguageSwitch() {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="absolute right-6 hidden items-center gap-1 lg:flex">
      <img src={brazilLogo} alt="" />
      <Switch
        id="language"
        aria-label={t(`${LOCALE_PATH}.label`)}
        onCheckedChange={toggleLanguage}
        checked={i18n.language === 'en'}
      />
      <img src={unitedStatesLogo} alt="" />
    </div>
  );
}
