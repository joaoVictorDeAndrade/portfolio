import { Switch } from '@components/Switch.jsx';
import { useTranslation } from 'react-i18next';

import brazilLogo from '/brazil.svg?url';
import unitedStatesLogo from '/unitedStates.svg?url';

export function LanguageSwitch() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="absolute right-6 hidden items-center gap-1 lg:flex">
      <img src={brazilLogo} alt="" />
      <Switch
        id="language"
        onCheckedChange={toggleLanguage}
        checked={i18n.language === 'en'}
      />
      <img src={unitedStatesLogo} alt="" />
    </div>
  );
}
