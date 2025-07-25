import React, { useState } from 'react';
import { InfoBadge } from '../ui/InfoBadge';
import FixationSection from './FixationSection';
import { FixVariant } from './types';
import { ModalShell } from '../ModalShell';

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

  return (
    <div className="space-y-4">
      <FixationSection 
        fixEnabled={fixEnabled}
        fixVariant={fixVariant}
        onFixationChange={onFixationChange}
      />

      <div className="mt-14 md:mt-8">
        <ModalShell
          trigger={
            <button className="inline-flex items-center text-gray-900 underline hover:no-underline">
              <InfoBadge />
              Детальніше про фіксацію в багажнику
            </button>
          }
          title="Детально про фіксацію"
        >
          <div className="space-y-4">
            <h3 className="text-sm font-semibold mb-4">Детально про фіксацію</h3>
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
        </ModalShell>
      </div>
    </div>
  );
};