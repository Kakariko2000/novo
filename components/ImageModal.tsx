
import React, { useEffect } from 'react';
import type { ImageType } from '../types';

interface ImageModalProps {
  image: ImageType;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-full max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="block max-w-[90vw] max-h-[90vh] object-contain"
        />
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 h-10 w-10 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold hover:bg-gray-200 transition-colors"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
