import { useState } from 'react';

export function useProductConfig() {
  const [currentSize, setCurrentSize] = useState<string>("S");
  const [logo, setLogo] = useState('');
  const [fixation, setFixation] = useState<'no'|'yes'>('no');

  const hasLogo = Boolean(logo);
  const hasFixation = fixation === 'yes';

  return {
    currentSize,
    setCurrentSize,
    logo,
    setLogo,
    fixation,
    setFixation,
    hasLogo,
    hasFixation,
  };
}