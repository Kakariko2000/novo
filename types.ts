export interface ImageType {
  id: number;
  src: string;
  alt: string;
  location: string;
  equipment: string;
  settings: {
    shutter: string;
    iso: string;
    aperture: string;
  };
  category: string;
}

export interface ExperienceType {
  id: number;
  company: string;
  description: string;
  period?: string; // Tornando 'period' opcional
}