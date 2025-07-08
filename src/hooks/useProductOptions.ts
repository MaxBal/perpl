import { useState, useEffect } from 'react';
import { ProductOptionsState, Size, LogoMaterial, FixVariant, ColorCode } from '../components/product-options/types';
import { buildSku, calculatePrice } from '../utils/sku';

interface UseProductOptionsProps {
  basePrice: number;
}

export function useProductOptions({ basePrice }: UseProductOptionsProps) {
  const [state, setState] = useState<ProductOptionsState>({
    design: 'Carzo 1.0',
    size: 'M',
    color: null,
    logoMaterial: 'none',
    logoBrand: '',
    fixEnabled: false,
    fixVariant: 'none',
    totalPrice: basePrice,
    sku: ''
  });

  // Update SKU and price when options change
  useEffect(() => {
    const [designName, designVersion] = state.design.split(' ');
    const isCarzo1 = state.design === 'Carzo 1.0';
    
    const newSku = buildSku({
      designName,
      designVersion,
      size: state.size,
      color: isCarzo1 ? state.color : null,
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
  }, [state.design, state.size, state.color, state.logoMaterial, state.logoBrand, state.fixVariant, basePrice]);

  // Reset color when switching away from Carzo 1.0
  useEffect(() => {
    if (state.design !== 'Carzo 1.0') {
      setState(prev => ({ ...prev, color: null }));
    }
  }, [state.design]);

  const setDesign = (design: string) => {
    setState(prev => ({ ...prev, design }));
  };

  const setSize = (size: Size) => {
    setState(prev => ({ ...prev, size }));
  };

  const setColor = (color: ColorCode | null) => {
    setState(prev => ({ ...prev, color }));
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
    setDesign,
    setSize,
    setColor,
    setLogoMaterial,
    setLogoBrand,
    setFixation,
    isValid
  };
}