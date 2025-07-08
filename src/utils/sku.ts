import { Size, LogoMaterial, FixVariant, ColorCode } from '../components/product-options/types';

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
  const base = `${designName} ${designVersion}`;   // Carzo 1.0
  const sizePart = `${size}${color ? `-${color}` : ''}`;

  const logoPart = logoMaterial === 'none'
    ? 'без лого'
    : (logoMaterial === 'steel'
        ? `лого.метал.${logoBrand.toLowerCase()}`
        : `лого.латунь.${logoBrand.toLowerCase()}`);

  const fixPart = {
    none:  'без фіксації',
    floor: 'фікс-на-дні',
    wall:  'фікс-на-стінці',
    both:  'фікс-дно+стінка',
  }[fixVariant];

  // ➜ арт. Carzo 1.0-M-без лого-без фіксації
  return `арт. ${base}-${sizePart}-${logoPart}-${fixPart}`;
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