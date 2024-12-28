import { useState } from 'react';
import { COMPANIES } from '@app/constants/companies.js';
import { ExperienceItem } from '@components/experience/ExperienceItem.jsx';

export function ExperienceList() {
  const [showAll, setShowAll] = useState(false);

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
