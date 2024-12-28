import reactLogo from '/public/react.svg';
import vueLogo from '/public/vue.svg';
import jestLogo from '/public/jest.svg';
import javascriptLogo from '/public/javascript.svg';
import typescriptLogo from '/public/typescript.svg';
import tailwindcssLogo from '/public/tailwindcss.svg';
import nextJsLogo from '/public/nextjs.svg';
import nodeLogo from '/public/node.svg';
import awsLogo from '/public/aws.svg';
import dockerLogo from '/public/docker.svg';
import gitLogo from '/public/git.svg';
import postgresLogo from '/public/postgres.svg';

export function IconsContainer() {
  return (
    <div className="grid grid-cols-6 items-center gap-8">
      <img src={reactLogo} alt="" />
      <img src={vueLogo} alt="" />
      <img src={nodeLogo} alt="" />
      <img src={jestLogo} alt="" />
      <img src={javascriptLogo} alt="" />
      <img src={typescriptLogo} alt="" />
      <img src={tailwindcssLogo} alt="" />
      <img src={nextJsLogo} alt="" />
      <img src={awsLogo} alt="" />
      <img src={dockerLogo} alt="" />
      <img src={gitLogo} alt="" />
      <img src={postgresLogo} alt="" />
    </div>
  );
}
