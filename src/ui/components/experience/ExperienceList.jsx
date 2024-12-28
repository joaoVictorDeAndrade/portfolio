import { COMPANIES } from '@app/constants/companies.js';
import { ExperienceItem } from '@components/experience/ExperienceItem.jsx';

export function ExperienceList() {
  return (
    <ul>
      {COMPANIES.map((company) => (
        <ExperienceItem key={company.id} experience={company} />
      ))}
    </ul>
  );
}
