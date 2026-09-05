import reactLogo from '/react.svg?url';
import vueLogo from '/vue.svg?url';
import jestLogo from '/jest.svg?url';
import javascriptLogo from '/javascript.svg?url';
import typescriptLogo from '/typescript.svg?url';
import tailwindcssLogo from '/tailwindcss.svg?url';
import nextJsLogo from '/nextjs.svg?url';
import nodeLogo from '/node.svg?url';
import awsLogo from '/aws.svg?url';
import dockerLogo from '/docker.svg?url';
import gitLogo from '/git.svg?url';
import postgresLogo from '/postgres.svg?url';

const technologies = [
  { name: 'React', logo: reactLogo },
  { name: 'Vue', logo: vueLogo },
  { name: 'Node.js', logo: nodeLogo },
  { name: 'Jest', logo: jestLogo },
  { name: 'JavaScript', logo: javascriptLogo },
  { name: 'TypeScript', logo: typescriptLogo },
  { name: 'Tailwind CSS', logo: tailwindcssLogo },
  { name: 'Next.js', logo: nextJsLogo },
  { name: 'AWS', logo: awsLogo },
  { name: 'Docker', logo: dockerLogo },
  { name: 'Git', logo: gitLogo },
  { name: 'PostgreSQL', logo: postgresLogo },
];

export function IconsContainer() {
  return (
    <ul className="grid grid-cols-4 items-center gap-8 sm:grid-cols-6">
      {technologies.map(({ name, logo }) => (
        <li key={name}>
          <img src={logo} alt={name} title={name} />
        </li>
      ))}
    </ul>
  );
}
