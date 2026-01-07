export interface Remedy {
  id: string;
  diseaseName: string;
  category: 'Fever' | 'Skin' | 'Internal' | 'Spiritual' | 'General';
  symptoms: string;
  ingredients: string[];
  preparationMethod: string;
  methodOfUse: string;
  spiritualElements?: string; // Quranic verses or spells
  sourceManuscript?: string;
  imageUrl: string;
}

export type ViewState = 'HOME' | 'BROWSE' | 'ABOUT';
