import { useTranslation, Trans } from 'react-i18next';
import { scrollTo } from '@app/utils/scrollTo.js';

import { Button } from './Button.jsx';
import { IconsContainer } from './IconsContainer.jsx';

import profile from '../assets/images/profile.jpg';

const LOCALE_PATH = 'components.Hero';

export function Hero() {
  const { t } = useTranslation();

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

        <h1 className="font-poppins text-white text-center text-4xl font-bold sm:text-5xl">
          {t(`${LOCALE_PATH}.title`)}
          <span className="text-transparent from-primary-main to-secondary-main bg-gradient-to-r bg-clip-text">
            {' '}
            {t(`${LOCALE_PATH}.complement`)}
          </span>
        </h1>

        <p className="text-neutral-light text-center">
          <Trans
            i18nKey={`${LOCALE_PATH}.description`}
            components={{
              strong: <strong className="text-white font-semibold" />,
            }}
          />
        </p>

        <div className="text-neutral-dark xs:flex-row flex flex-col justify-center gap-4">
          <Button
            onClick={() => scrollTo(document.documentElement.scrollHeight)}
          >
            {t(`${LOCALE_PATH}.getInTouch`)}
          </Button>
          <Button variant="secondary">{t(`${LOCALE_PATH}.downloadCV`)}</Button>
        </div>

        <div className="text-neutral-light !mt-16 flex flex-col items-center justify-center gap-6">
          <p className="text-xl font-semibold uppercase tracking-widest">
            {t(`${LOCALE_PATH}.experienceWith`)}
          </p>

          <IconsContainer />
        </div>
      </section>
    </>
  );
}
