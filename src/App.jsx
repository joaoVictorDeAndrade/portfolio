import { Header } from './ui/components/Header.jsx';
import { Hero } from './ui/components/Hero.jsx';
import { Footer } from './ui/components/Footer.jsx';
import { Experience } from './ui/components/experience/Experience.jsx';

function App() {
  return (
    <>
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
