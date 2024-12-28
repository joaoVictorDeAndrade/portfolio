import { Button } from './Button.jsx';
import { IconsContainer } from './IconsContainer.jsx';

import profile from '../assets/images/profile.jpg';

export function Hero() {
  return (
    <section className="relative top-20 m-auto mb-20 mt-10 max-w-[760px] space-y-8">
      <img
        src={profile}
        alt="Foto de João"
        width={160}
        height={160}
        className="m-auto h-40 w-40 rounded-full object-cover object-[center_70%]"
      />

      <h1 className="font-poppins text-white text-center text-5xl font-bold sm:text-6xl">
        I do code and make content
        <span className="text-transparent from-primary-main to-secondary-main bg-gradient-to-r bg-clip-text">
          {' '}
          about it!
        </span>
        1
      </h1>

      <p className="text-neutral-light text-center">
        I am a seasoned full-stack software engineer with over 8 years of
        professional experience, specializing in backend development. My
        expertise lies in crafting robust and scalable SaaS-based architectures
        on the Amazon AWS platform.
      </p>

      <div className="text-neutral-dark xs:flex-row flex flex-col justify-center gap-4">
        <Button>Get in Touch</Button>
        <Button variant="secondary">Download CV</Button>
      </div>

      <div className="text-neutral-light !mt-16 flex flex-col items-center justify-center gap-6">
        <p className="text-xl font-semibold uppercase tracking-widest">
          Experience with
        </p>

        <IconsContainer />
      </div>
    </section>
  );
}
