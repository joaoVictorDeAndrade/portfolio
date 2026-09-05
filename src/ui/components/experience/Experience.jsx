import { useTranslation } from 'react-i18next';

const LOCALE_PATH = 'components.Experience';

import { ExperienceList } from './ExperienceList.jsx';

export function Experience() {
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="m-auto mt-20 max-w-[760px] scroll-mt-24 text-center"
    >
      <h2 className="experience-text">{t(`${LOCALE_PATH}.title`)}</h2>

      <ExperienceList />
    </section>
  );
}
