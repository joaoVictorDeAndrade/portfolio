import reactLogo from '/public/react.svg';
import vueLogo from '/public/vue.svg';
import jestLogo from '/public/jest.svg';
import javascriptLogo from '/public/javascript.svg';
import typescriptLogo from '/public/typescript.svg';
import tailwindcssLogo from '/public/tailwindcss.svg';
import nextJsLogo from '/public/nextjs.svg';
import nodeLogo from '/public/node.svg';

const iconsArray = [
  { name: 'React', src: reactLogo },
  { name: 'Vue', src: vueLogo },
  { name: 'Next.js', src: nextJsLogo },
  { name: 'Node.js', src: nodeLogo },
  { name: 'Jest', src: jestLogo },
  { name: 'JavaScript', src: javascriptLogo, className: 'col-start-2' },
  { name: 'TypeScript', src: typescriptLogo },
  { name: 'Tailwind CSS', src: tailwindcssLogo },
];

export function IconsContainer() {
  return (
    <div className="grid grid-cols-5 gap-8">
      {iconsArray.map((icon) => (
        <img
          key={icon.name}
          src={icon.src}
          alt=""
          className={`grayscale transition duration-500 hover:grayscale-0 ${icon.className}`}
        />
      ))}
    </div>
  );
}
