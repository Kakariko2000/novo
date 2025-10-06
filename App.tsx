import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import { NAV_CATEGORIES, MAIN_NAV_LINKS } from './constants';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(NAV_CATEGORIES[0]);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar links={MAIN_NAV_LINKS} />
      <main>
        <HeroSection
          categories={NAV_CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <PortfolioSection selectedCategory={selectedCategory} />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;