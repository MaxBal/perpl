import { Size, LogoMaterial, FixVariant, ColorCode } from '../components/product-options/types';

export const COLOR_NAMES: Record<ColorCode, string> = {
  black: "чорний",
  "black-grey": "чорно-сірий", 
  "black-blue": "чорно-синій",
  "black-red": "чорно-червоний",
  brown: "коричневий",
  beige: "бежевий",
};

interface SkuParams {
  designName: string;
  designVersion: string;
  size: Size;
  color: ColorCode | null;
  logoMaterial: LogoMaterial;
  logoBrand: string;
  fixVariant: FixVariant;
}

export function buildSku({ designName, designVersion, size, color, logoMaterial, logoBrand, fixVariant }: SkuParams): string {
  // Build components
  const designPart = `${size} ${designName} ${designVersion}`;

  const colorPart = color ? `колір=${COLOR_NAMES[color] || color}` : null;

  const logoPart = logoMaterial === 'none' 
    ? 'лого=без лого'
    : `лого=${logoMaterial === 'steel' ? 'метал' : 'латунь'}(${logoBrand})`;

  const fixPart = {
    none:  'фіксація=без фіксації',
    floor: 'фіксація=на дні',
    wall:  'фіксація=на стінці',
    both:  'фіксація=дно+стінка',
  }[fixVariant];

  // Format: арт. М Carzo 2.0 | колір=чорно-синій | лого=латунь(Mercedes) | фіксація=дно+стінка
  const parts = [`арт. ${designPart}`];
  if (colorPart) parts.push(colorPart);
  parts.push(logoPart, fixPart);
  
  return parts.join(' | ');
}

export function calculatePrice(
  basePrice: number,
  logoMaterial: LogoMaterial,
  fixVariant: FixVariant
): number {
  const logoPriceDelta = logoMaterial === 'steel' ? 280 : 
                        logoMaterial === 'brass' ? 200 : 0;
  
  const fixPriceDelta = fixVariant === 'both' ? 80 : 0;
  
  return basePrice + logoPriceDelta + fixPriceDelta;
}