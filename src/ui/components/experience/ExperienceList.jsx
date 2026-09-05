import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ExperienceItem } from '@components/experience/ExperienceItem.jsx';
import { useExperienceList } from '@components/experience/useExperienceList.js';

const LOCALE_PATH = 'components.Experience';

export function ExperienceList() {
  const [showAll, setShowAll] = useState(false);
  const { t } = useTranslation();

  const { COMPANIES } = useExperienceList();

  const displayedCompanies = showAll ? COMPANIES : COMPANIES.slice(0, 3);

  return (
    <>
      <ul>
        {displayedCompanies.map((company) => (
          <ExperienceItem key={company.id} experience={company} />
        ))}
      </ul>
      {!showAll && (
        <button type="button" onClick={() => setShowAll(true)}>
          {t(`${LOCALE_PATH}.showMore`)}
        </button>
      )}
    </>
  );
}
