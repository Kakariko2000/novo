// FIX: Replaced incorrect content with type definitions for ImageType and ExperienceType.
// The original file was a copy of constants.ts, causing a circular import and missing type definitions.
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
  period: string;
}
