import { Trans } from 'react-i18next';
import PropTypes from 'prop-types';

export function ExperienceItem({ experience }) {
  return (
    <li className="my-8 flex flex-col gap-4 text-start">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h4 className="text-xl font-semibold">
          {experience.title}
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {experience.name}
          </a>
        </h4>
        <p className="text-sm text-neutral-light">{experience.period}</p>
      </div>

      <p className="text-sm text-neutral-light">
        <Trans
          i18nKey={experience.descriptionKey}
          components={{
            strong: <strong className="font-semibold text-white" />,
          }}
        />
      </p>
    </li>
  );
}

ExperienceItem.propTypes = {
  experience: PropTypes.shape({
    descriptionKey: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
