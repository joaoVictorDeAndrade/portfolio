import reactLogo from '/public/react.svg';
import vueLogo from '/public/vue.svg';
import jestLogo from '/public/jest.svg';
import javascriptLogo from '/public/javascript.svg';
import typescriptLogo from '/public/typescript.svg';
import tailwindcssLogo from '/public/tailwindcss.svg';
import nextJsLogo from '/public/nextjs.svg';
import nodeLogo from '/public/node.svg';

export function IconsContainer() {
  return (
    <div className="grid grid-cols-5 gap-8">
      <img src={reactLogo} alt="" />
      <img src={vueLogo} alt="" />
      <img src={nextJsLogo} alt="" />
      <img src={nodeLogo} alt="" />
      <img src={jestLogo} alt="" />
      <img src={javascriptLogo} alt="" className="col-start-2" />
      <img src={typescriptLogo} alt="" />
      <img src={tailwindcssLogo} alt="" />
    </div>
  );
}
