import { t } from '../internationalization/i18n.js';

const LOCALE_PATH = 'constants.companies';

export const COMPANIES = [
  {
    id: 1,
    title: t(`${LOCALE_PATH}.capim.title`),
    name: t(`${LOCALE_PATH}.capim.name`),
    link: 'https://capim.com.br/',
    period: t(`${LOCALE_PATH}.capim.period`),
    description: t(`${LOCALE_PATH}.capim.description`),
  },
  {
    id: 2,
    title: t(`${LOCALE_PATH}.petlove.title`),
    name: t(`${LOCALE_PATH}.petlove.name`),
    link: 'https://www.petlove.com.br/',
    period: t(`${LOCALE_PATH}.petlove.period`),
    description: t(`${LOCALE_PATH}.petlove.description`),
  },
  {
    id: 3,
    title: t(`${LOCALE_PATH}.bhut.title`),
    name: t(`${LOCALE_PATH}.bhut.name`),
    link: 'https://bhut.com.br/',
    period: t(`${LOCALE_PATH}.bhut.period`),
    description: t(`${LOCALE_PATH}.bhut.description`),
  },
  {
    id: 4,
    title: t(`${LOCALE_PATH}.conpec.title`),
    name: t(`${LOCALE_PATH}.conpec.name`),
    link: 'https://www.conpec.com.br/',
    period: t(`${LOCALE_PATH}.conpec.period`),
    description: t(`${LOCALE_PATH}.conpec.description`),
  },
];
