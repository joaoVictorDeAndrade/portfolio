import { useTranslation } from 'react-i18next';

import { Divisor } from './Divisor.jsx';

const LOCALE_PATH = 'components.Footer';

export function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <Divisor />

      <footer
        id="footer"
        className="w-full bg-center px-14 pb-20 pt-10 sm:px-36"
      >
        <h5 className="text-xl font-bold">{t(`${LOCALE_PATH}.title`)}</h5>

        <p className="mb-4 mt-6">{t(`${LOCALE_PATH}.description`)}</p>

        <p>jv.andrade02@gmail.com</p>
      </footer>
    </>
  );
}
