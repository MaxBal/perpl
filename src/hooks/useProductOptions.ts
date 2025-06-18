import { useState, useEffect } from 'react';
import { ProductOptionsState, Size, LogoMaterial, FixVariant } from '../components/product-options/types';
import { buildSku, calculatePrice } from '../utils/sku';

interface UseProductOptionsProps {
  basePrice: number;
}

export function useProductOptions({ basePrice }: UseProductOptionsProps) {
  const [state, setState] = useState<ProductOptionsState>({
    size: 'M',
    logoMaterial: 'none',
    logoBrand: '',
    fixEnabled: false,
    fixVariant: 'none',
    totalPrice: basePrice,
    sku: ''
  });

  // Update SKU and price when options change
  useEffect(() => {
    const newSku = buildSku({
      size: state.size,
      logoMaterial: state.logoMaterial,
      logoBrand: state.logoBrand,
      fixVariant: state.fixVariant
    });
    
    const newPrice = calculatePrice(basePrice, state.logoMaterial, state.fixVariant);
    
    setState(prev => ({
      ...prev,
      sku: newSku,
      totalPrice: newPrice
    }));
  }, [state.size, state.logoMaterial, state.logoBrand, state.fixVariant, basePrice]);

  const setSize = (size: Size) => {
    setState(prev => ({ ...prev, size }));
  };

  const setLogoMaterial = (logoMaterial: LogoMaterial) => {
    setState(prev => ({
      ...prev,
      logoMaterial,
      logoBrand: logoMaterial === 'none' ? '' : prev.logoBrand
    }));
  };

  const setLogoBrand = (logoBrand: string) => {
    setState(prev => ({ ...prev, logoBrand }));
  };

  const setFixation = (fixEnabled: boolean, fixVariant: FixVariant = 'none') => {
    setState(prev => ({
      ...prev,
      fixEnabled,
      fixVariant: fixEnabled ? fixVariant : 'none'
    }));
  };

  const isValid = state.logoMaterial === 'none' || state.logoBrand !== '';

  return {
    state,
    setSize,
    setLogoMaterial,
    setLogoBrand,
    setFixation,
    isValid
  };
}