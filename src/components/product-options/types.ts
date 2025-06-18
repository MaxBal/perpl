export interface ProductData {
  id: string;
  name: string;
  price: number;
  designs: { id: number; image: string }[];
  sizes: { id: string; label: string; details: string }[];
  fixationOptions: { id: string; label: string }[];
  logoOptions: string[];
  productCode: string;
}

export interface NavItem {
  label: string;
  image: string;
  href?: string;
}

export type LogoMaterial = 'none' | 'steel' | 'brass';
export type FixVariant = 'none' | 'floor' | 'wall' | 'both';
export type Size = 'S' | 'M' | 'L' | 'XL';

export interface ProductOptionsState {
  size: Size;
  logoMaterial: LogoMaterial;
  logoBrand: string;
  fixEnabled: boolean;
  fixVariant: FixVariant;
  totalPrice: number;
  sku: string;
}

export interface LogoOption {
  label: string;
  value: LogoMaterial;
  priceDelta: number;
}

export interface FixationOption {
  label: string;
  value: FixVariant;
  priceDelta: number;
}