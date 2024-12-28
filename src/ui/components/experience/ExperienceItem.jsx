import { Trans } from 'react-i18next';

export function ExperienceItem({ experience }) {
  return (
    <li className="my-8 flex flex-col gap-4 text-start">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h4 className="text-xl font-semibold">
          {experience.title}
          <a href={experience.link} target="_blank" className="hover:underline">
            {experience.name}
          </a>
        </h4>
        <p className="text-neutral-light text-sm">{experience.period}</p>
      </div>

      <p className="text-neutral-light text-sm">
        <Trans
          i18nKey={experience.description}
          components={{
            strong: <strong className="text-white font-semibold" />,
          }}
        />
      </p>
    </li>
  );
}
