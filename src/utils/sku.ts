import { Size, LogoMaterial, FixVariant } from '../components/product-options/types';

interface SkuParams {
  size: Size;
  logoMaterial: LogoMaterial;
  logoBrand: string;
  fixVariant: FixVariant;
}

export function buildSku({ size, logoMaterial, logoBrand, fixVariant }: SkuParams): string {
  const base = `${size}2.0`;

  const fixKey = {
    none:  'без-фіксації',
    floor: 'фікс-на-дні',
    wall:  'фікс-на-стінці',
    both:  'фікс-дно+стінка',
  }[fixVariant];

  if (logoMaterial === 'none') {
    //   ➜  L2.0.без-лого.фікс-дно+стінка
    return `арт. ${base}.без-лого.${fixKey}`;
  }

  const matKey = logoMaterial === 'steel' ? 'лого-метал' : 'лого-латунь';
  //   ➜  M2.0.лого-метал.toyota.без-фіксації
  return `арт. ${base}.${matKey}.${logoBrand.toLowerCase()}.${fixKey}`;
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