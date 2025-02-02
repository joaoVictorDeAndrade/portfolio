import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const LOCALE_PATH = 'constants.companies';

export function useExperienceList() {
  const { t } = useTranslation();

  const COMPANIES = useMemo(
    () => [
      {
        id: 1,
        key: 'capim',
        title: t(`${LOCALE_PATH}.capim.title`),
        name: t(`${LOCALE_PATH}.capim.name`),
        link: 'https://capim.com.br/',
        period: t(`${LOCALE_PATH}.capim.period`),
        description: t(`${LOCALE_PATH}.capim.description`),
      },
      {
        id: 2,
        key: 'petlove',
        title: t(`${LOCALE_PATH}.petlove.title`),
        name: t(`${LOCALE_PATH}.petlove.name`),
        link: 'https://www.petlove.com.br/',
        period: t(`${LOCALE_PATH}.petlove.period`),
        description: t(`${LOCALE_PATH}.petlove.description`),
      },
      {
        id: 3,
        key: 'bhut',
        title: t(`${LOCALE_PATH}.bhut.title`),
        name: t(`${LOCALE_PATH}.bhut.name`),
        link: 'https://bhut.com.br/',
        period: t(`${LOCALE_PATH}.bhut.period`),
        description: t(`${LOCALE_PATH}.bhut.description`),
      },
      {
        id: 4,
        key: 'conpec',
        title: t(`${LOCALE_PATH}.conpec.title`),
        name: t(`${LOCALE_PATH}.conpec.name`),
        link: 'https://www.conpec.com.br/',
        period: t(`${LOCALE_PATH}.conpec.period`),
        description: t(`${LOCALE_PATH}.conpec.description`),
      },
    ],
    [t]
  );

  return {
    COMPANIES,
  };
}
