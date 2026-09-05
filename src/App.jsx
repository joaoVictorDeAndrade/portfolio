import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { syncLanguageWithPreferences } from './app/internationalization/i18n.js';
import { Header } from './ui/components/Header.jsx';
import { Hero } from './ui/components/Hero.jsx';
import { Footer } from './ui/components/Footer.jsx';
import { Experience } from './ui/components/experience/Experience.jsx';
import { Seo } from './ui/components/Seo.jsx';
import { TooltipProvider } from './ui/components/components/ui/tooltip.jsx';

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    return syncLanguageWithPreferences();
  }, []);

  return (
    <TooltipProvider delayDuration={200}>
      <Seo />
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-50 -translate-y-24 rounded-md bg-white px-4 py-2 font-semibold text-background transition-transform focus:translate-y-0"
      >
        {t('accessibility.skipToContent')}
      </a>
      <Header />

      <main id="main-content" tabIndex="-1" className="flex-1 px-8 pb-16">
        <Hero />
        <Experience />
      </main>

      <Footer />
    </TooltipProvider>
  );
}

export default App;
