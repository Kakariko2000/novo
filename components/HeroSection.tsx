import React from 'react';

interface HeroSectionProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-3xl flex flex-col items-center">
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight gradient-text">
              Wanderson Seven
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide gradient-text mt-2">
              Fotógrafo Esportivo
            </p>
          </div>
          <h2 className="text-xl md:text-2xl text-gray-300 font-medium">
            Retratando a cidade através da luz, do movimento e das pessoas.
          </h2>
          <p className="text-gray-400 max-w-xl leading-relaxed mx-auto">
            Meu trabalho busca capturar a energia crua e a paixão do esporte. Cada clique é uma tentativa de congelar a emoção, a dedicação e a beleza do movimento humano em sua forma mais autêntica.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`text-lg font-medium transition-colors duration-300 ${
                selectedCategory === category
                  ? 'gradient-text'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;