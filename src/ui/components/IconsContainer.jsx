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

export function IconsContainer() {
  return (
    <div className="grid grid-cols-6 items-center gap-8">
      <img src={reactLogo} alt="React Js" />
      <img src={vueLogo} alt="Vue Js" />
      <img src={nodeLogo} alt="Node Js" />
      <img src={jestLogo} alt="Jest" />
      <img src={javascriptLogo} alt="JavaScript" />
      <img src={typescriptLogo} alt="TypeScript" />
      <img src={tailwindcssLogo} alt="Tailwind CSS" />
      <img src={nextJsLogo} alt="Next Js" />
      <img src={awsLogo} alt="AWS" />
      <img src={dockerLogo} alt="Docker" />
      <img src={gitLogo} alt="Git" />
      <img src={postgresLogo} alt="Postgres SQL" />
    </div>
  );
}
