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
        aria-labelledby="contact-title"
        className="w-full scroll-mt-24 bg-center px-10 pb-20 pt-10 lg:px-36"
      >
        <h2 id="contact-title" className="text-xl font-bold">
          {t(`${LOCALE_PATH}.title`)}
        </h2>

        <p className="mb-4 mt-6">{t(`${LOCALE_PATH}.description`)}</p>

        <a className="inline-block" href="mailto:jv.andrade02@gmail.com">
          jv.andrade02@gmail.com
        </a>
      </footer>
    </>
  );
}
