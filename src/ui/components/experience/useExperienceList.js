import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const LOCALE_PATH = 'constants.companies';

export function useExperienceList() {
  const { t } = useTranslation();

  const COMPANIES = useMemo(
    () => [
      {
        id: 1,
        key: 'allstacks',
        title: t(`${LOCALE_PATH}.allstacks.title`),
        name: t(`${LOCALE_PATH}.allstacks.name`),
        link: 'https://www.allstacks.com/',
        period: t(`${LOCALE_PATH}.allstacks.period`),
        descriptionKey: `${LOCALE_PATH}.allstacks.description`,
      },
      {
        id: 2,
        key: 'capim',
        title: t(`${LOCALE_PATH}.capim.title`),
        name: t(`${LOCALE_PATH}.capim.name`),
        link: 'https://capim.com.br/',
        period: t(`${LOCALE_PATH}.capim.period`),
        descriptionKey: `${LOCALE_PATH}.capim.description`,
      },
      {
        id: 3,
        key: 'petlove',
        title: t(`${LOCALE_PATH}.petlove.title`),
        name: t(`${LOCALE_PATH}.petlove.name`),
        link: 'https://www.petlove.com.br/',
        period: t(`${LOCALE_PATH}.petlove.period`),
        descriptionKey: `${LOCALE_PATH}.petlove.description`,
      },
      {
        id: 4,
        key: 'bhut',
        title: t(`${LOCALE_PATH}.bhut.title`),
        name: t(`${LOCALE_PATH}.bhut.name`),
        link: 'https://bhut.com.br/',
        period: t(`${LOCALE_PATH}.bhut.period`),
        descriptionKey: `${LOCALE_PATH}.bhut.description`,
      },
      {
        id: 5,
        key: 'conpec',
        title: t(`${LOCALE_PATH}.conpec.title`),
        name: t(`${LOCALE_PATH}.conpec.name`),
        link: 'https://www.conpec.com.br/',
        period: t(`${LOCALE_PATH}.conpec.period`),
        descriptionKey: `${LOCALE_PATH}.conpec.description`,
      },
    ],
    [t]
  );

  return {
    COMPANIES,
  };
}
