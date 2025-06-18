import { Size, LogoMaterial, FixVariant } from '../components/product-options/types';

interface SkuParams {
  design: string;
  size: Size;
  logoMaterial: LogoMaterial;
  logoBrand: string;
  fixVariant: FixVariant;
}

export function buildSku({ design, size, logoMaterial, logoBrand, fixVariant }: SkuParams): string {
  const designKey = design.toLowerCase().replace(/\s+/g, ''); // Carzo1.0
  const sizeKey = size;                                       // S | M | L | XL

  const logoPart = logoMaterial === 'none'
    ? 'без-лого'
    : (logoMaterial === 'steel' ? 'лого-метал' : 'лого-латунь');

  const brandPart = logoMaterial === 'none' ? '' : `.${logoBrand.toLowerCase()}`;

  const fixKey = {
    none:  'без-фіксації',
    floor: 'фікс-на-дні',
    wall:  'фікс-на-стінці',
    both:  'фікс-дно+стінка',
  }[fixVariant];

  // ➜ арт. Carzo1.0-S.лого-метал.mercedes.фікс-на-стінці
  // ➜ арт. Carzo1.0-L.без-лого.фікс-дно+стінка
  return `арт. ${designKey}-${sizeKey}.${logoPart}${brandPart}.${fixKey}`;
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