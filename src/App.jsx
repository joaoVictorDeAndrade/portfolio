import { Header } from './ui/components/Header.jsx';
import { Hero } from './ui/components/Hero.jsx';
import { Footer } from './ui/components/Footer.jsx';
import { Experience } from './ui/components/experience/Experience.jsx';
import { Seo } from './ui/components/Seo.jsx';

function App() {
  return (
    <>
      <Seo />
      <Header />

      <main className="flex-1 px-8 pb-16">
        <Hero />
        <Experience />
      </main>

      <Footer />
    </>
  );
}

export default App;
