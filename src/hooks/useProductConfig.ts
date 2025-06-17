import { useState } from 'react';

export function useProductConfig() {
  const [currentSize, setCurrentSize] = useState<string>("S");
  const [logo, setLogo] = useState('');
  const [logoMaterial, setLogoMaterial] = useState<'brass' | 'steel'>('steel');
  const [fixation, setFixation] = useState<'no'|'yes'>('no');

  const hasLogo = Boolean(logo);
  const hasFixation = fixation === 'yes';

  return {
    currentSize,
    setCurrentSize,
    logo,
    setLogo,
    logoMaterial,
    setLogoMaterial,
    fixation,
    setFixation,
    hasLogo,
    hasFixation,
  };
}