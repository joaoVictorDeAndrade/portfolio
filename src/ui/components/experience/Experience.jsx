import { useTranslation } from 'react-i18next';

const LOCALE_PATH = 'components.Experience';

import { ExperienceList } from './ExperienceList.jsx';

export function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="m-auto mt-20 max-w-[760px] text-center">
      <h3 className="experience-text">{t(`${LOCALE_PATH}.title`)}</h3>

      <ExperienceList />
    </section>
  );
}
