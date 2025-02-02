import { useState } from 'react';
import { ExperienceItem } from '@components/experience/ExperienceItem.jsx';
import { useExperienceList } from '@components/experience/useExperienceList.js';

export function ExperienceList() {
  const [showAll, setShowAll] = useState(false);

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
          Mostrar mais
        </button>
      )}
    </>
  );
}
