import React, { useState, useMemo } from 'react';
import type { ImageType } from '../types';
import { PORTFOLIO_IMAGES } from '../constants';
import ImageModal from './ImageModal';
import { shuffleArray } from '../utils/arrayUtils';

interface PortfolioSectionProps {
  selectedCategory: string;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ selectedCategory }) => {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const openModal = (image: ImageType) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const filteredAndShuffledImages = useMemo(() => {
    let imagesToProcess = PORTFOLIO_IMAGES;
    if (selectedCategory !== 'Todos') {
      imagesToProcess = PORTFOLIO_IMAGES.filter(image => image.category === selectedCategory);
    }
    return shuffleArray(imagesToProcess);
  }, [selectedCategory]);

  return (
    <>
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 gradient-text">
            Portfólio
          </h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
            {filteredAndShuffledImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer mb-8 break-inside-avoid"
                onClick={() => openModal(image)}
              >
                <div className="overflow-hidden bg-gray-900">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-80"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
    </>
  );
};

export default PortfolioSection;