import { Size, LogoMaterial, FixVariant } from '../components/product-options/types';

interface SkuParams {
  size: Size;
  logoMaterial: LogoMaterial;
  logoBrand: string;
  fixVariant: FixVariant;
}

export function buildSku({ size, logoMaterial, logoBrand, fixVariant }: SkuParams): string {
  const logoKey = logoMaterial === 'none' ? 'без-лого' : 
                  logoMaterial === 'steel' ? 'лого-метал' : 'лого-латунь';
  
  const fixKey = fixVariant === 'none' ? 'без-фіксації' :
                 fixVariant === 'floor' ? 'дно' :
                 fixVariant === 'wall' ? 'стінка' : 'дно+стінка';
  
  const brandPart = logoBrand || 'none';
  
  return `арт. ${size}2.0.${logoKey}.${brandPart}.${fixKey}`;
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