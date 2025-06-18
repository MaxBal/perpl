import React from 'react';
import { useModal } from '../useModal';
import { InfoBadge } from '../ui/InfoBadge';
import FixationSection from './FixationSection';

interface Props {
  fixationMode: 'none' | 'with';
  setFixationMode: (mode: 'none' | 'with') => void;
  subOptions: string[];
  toggleSubOption: (option: string) => void;
  onPriceChange?: (price: number) => void;
}

export const FixationSelector: React.FC<Props> = ({
  fixationMode,
  setFixationMode,
  subOptions,
  toggleSubOption,
  onPriceChange
}) => {
  const modal = useModal();

  const handleFixationChange = (enabled: boolean, variant: 'floor' | 'wall' | 'both', price: number) => {
    // Update fixation mode
    setFixationMode(enabled ? 'with' : 'none');
    
    // Clear previous selections and set new one
    subOptions.forEach(opt => toggleSubOption(opt));
    if (enabled) {
      toggleSubOption(variant);
    }
    
    // Notify parent about price change
    if (onPriceChange) {
      onPriceChange(price);
    }
  };

  const showFixationInfo = () => {
    modal.open(
      'Детально про фіксацію',
      <div className="space-y-4">
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-gray-700">
            Система фіксації забезпечує надійне кріплення автокейса в багажнику. 
            Доступні варіанти кріплення на дні, на стінці або комбіноване кріплення 
            для максимальної стабільності.
          </p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="font-medium mb-2">Варіанти фіксації:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>На дні - базове кріплення до підлоги багажника (безкоштовно)</li>
            <li>На стінці - кріплення до бокової стінки (безкоштовно)</li>
            <li>Комбіноване - максимальна стабільність з доплатою 80₴</li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <FixationSection onFixationChange={handleFixationChange} />

      <div className="mt-14 md:mt-8">
        <button
          onClick={showFixationInfo}
          className="inline-flex items-center text-gray-900 underline hover:no-underline"
        >
          <InfoBadge />
          Детальніше про фіксацію
        </button>
      </div>
    </div>
  );
};