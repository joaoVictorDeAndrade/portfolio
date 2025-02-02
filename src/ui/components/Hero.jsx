import { useTranslation, Trans } from 'react-i18next';
import { scrollTo } from '@app/utils/scrollTo.js';

import { Button } from './Button.jsx';
import { IconsContainer } from './IconsContainer.jsx';

import profile from '../assets/images/profile.jpg';

const LOCALE_PATH = 'components.Hero';

export function Hero() {
  const { t, i18n } = useTranslation();

  async function downloadCV() {
    const { language } = i18n;
    const pdfUrl = `${import.meta.env.VITE_API_URL}/JoaoAndrade-${language}.pdf`;

    try {
      const response = await fetch(pdfUrl);

      if (!response.ok) {
        console.error('Error:', response.statusText);
        return;
      }

      const blob = await response.blob();

      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'JoaoAndrade.pdf';
      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  return (
    <>
      <section className="relative top-20 m-auto mt-10 max-w-[760px] space-y-8 pb-20">
        <img
          src={profile}
          alt="Foto de João"
          width={160}
          height={160}
          className="m-auto h-40 w-40 rounded-full object-cover object-[center_70%]"
        />

        <h1 className="text-center text-3xl font-bold text-white [text-wrap:balance] sm:text-5xl">
          {t(`${LOCALE_PATH}.title`)}{' '}
          <span className="inline-flex h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] flex-col overflow-hidden sm:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))]">
            <ul className="block animate-text-slide-3 bg-gradient-to-r from-primary-main to-secondary-main bg-clip-text text-center leading-tight text-transparent xs:text-left [&_li]:block">
              <li>{t(`${LOCALE_PATH}.software`)}</li>
              <li>{t(`${LOCALE_PATH}.technology`)}</li>
              <li>{t(`${LOCALE_PATH}.apps`)}</li>
              <li aria-hidden="true">{t(`${LOCALE_PATH}.software`)}</li>
            </ul>
          </span>
        </h1>

        <p className="text-center text-neutral-light">
          <Trans
            i18nKey={`${LOCALE_PATH}.description`}
            components={{
              strong: <strong className="font-semibold text-white" />,
            }}
          />
        </p>

        <div className="flex flex-col justify-center gap-4 text-neutral-dark xs:flex-row">
          <Button
            onClick={() => scrollTo(document.documentElement.scrollHeight)}
          >
            {t(`${LOCALE_PATH}.getInTouch`)}
          </Button>
          <Button variant="secondary" onClick={downloadCV}>
            {t(`${LOCALE_PATH}.downloadCV`)}
          </Button>
        </div>

        <div className="!mt-16 flex flex-col items-center justify-center gap-6 text-neutral-light">
          <p className="text-center text-xl font-semibold uppercase tracking-widest">
            {t(`${LOCALE_PATH}.experienceWith`)}
          </p>

          <IconsContainer />
        </div>
      </section>
    </>
  );
}
