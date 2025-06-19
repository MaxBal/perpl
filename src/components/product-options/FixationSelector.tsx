import React, { useState } from 'react';
import { InfoBadge } from '../ui/InfoBadge';
import FixationSection from './FixationSection';
import { FixVariant } from './types';

// Simple modal component
const SimpleModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center md:justify-center">
      <div className="bg-white w-full max-h-[80vh] md:max-w-lg md:rounded-lg overflow-y-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            ✕
          </button>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

interface Props {
  fixEnabled: boolean;
  fixVariant: FixVariant;
  onFixationChange: (enabled: boolean, variant: FixVariant) => void;
}

export const FixationSelector: React.FC<Props> = ({
  fixEnabled,
  fixVariant,
  onFixationChange
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showFixationInfo = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-4">
      <FixationSection 
        fixEnabled={fixEnabled}
        fixVariant={fixVariant}
        onFixationChange={onFixationChange}
      />

      <div className="mt-14 md:mt-8">
        <button
          onClick={showFixationInfo}
          className="inline-flex items-center text-gray-900 underline hover:no-underline"
        >
          <InfoBadge />
          Детальніше про фіксацію в багажнику
        </button>
      </div>

      <SimpleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Детально про фіксацію"
      >
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
      </SimpleModal>
    </div>
  );
};