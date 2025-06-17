import React from 'react';
import { Magnet } from 'lucide-react';
import { useModal } from '../useModal';
import { InfoBadge } from '../ui/InfoBadge';

interface Props {
  fixationMode: 'none' | 'with';
  setFixationMode: (mode: 'none' | 'with') => void;
  subOptions: string[];
  toggleSubOption: (option: string) => void;
}

const FIXATION_OPTIONS = [
  { id: 'floor', label: 'на дні', price: 0 },
  { id: 'wall', label: 'на стінці', price: 0 },
  { id: 'both', label: 'дно + стінка', price: 80 }
];

export const FixationSelector: React.FC<Props> = ({
  fixationMode,
  setFixationMode,
  subOptions,
  toggleSubOption
}) => {
  const modal = useModal();

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
            <li>На дні - базове кріплення до підлоги багажника</li>
            <li>На стінці - кріплення до бокової стінки</li>
            <li>Комбіноване - максимальна стабільність</li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* Segmented Control */}
      <div className="bg-gray-100 p-1 rounded-[18px] flex gap-1">
        <button
          onClick={() => setFixationMode('none')}
          className={`flex-1 px-4 py-2.5 rounded-[14px] text-sm transition-colors ${
            fixationMode === 'none' ? 'bg-white shadow' : 'hover:bg-white/50'
          }`}
        >
          Без фіксації
        </button>
        <button
          onClick={() => setFixationMode('with')}
          className={`flex-1 px-4 py-2.5 rounded-[14px] text-sm transition-colors flex items-center justify-center gap-1 ${
            fixationMode === 'with' ? 'bg-white shadow' : 'hover:bg-white/50'
          }`}
        >
          <Magnet 
            className={`w-4 h-4 ${fixationMode === 'with' ? 'text-[#00d1b3]' : ''}`}
            strokeWidth={1.5}
          />
          З фіксацією
        </button>
      </div>

      {/* Sub-options when "with fixation" is selected */}
      {fixationMode === 'with' && (
        <div className="space-y-3">
          {FIXATION_OPTIONS.map(option => (
            <label
              key={option.id}
              className="flex items-center justify-between p-3 rounded-[14px] border border-gray-200 cursor-pointer hover:border-gray-300 transition-colors"
            >
              <span className="text-sm">
                {option.label} {option.price > 0 ? `${option.price} ₴` : '0 ₴'}
              </span>
              <div
                className={`w-12 h-6 rounded-full p-1 transition-colors cursor-pointer ${
                  subOptions.includes(option.id) ? 'bg-[#00d1b3]' : 'bg-gray-200'
                }`}
                onClick={() => toggleSubOption(option.id)}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    subOptions.includes(option.id) ? 'translate-x-6' : ''
                  }`}
                />
              </div>
            </label>
          ))}
        </div>
      )}

      <button
        onClick={showFixationInfo}
        className="inline-flex items-center text-gray-900 underline hover:no-underline"
      >
        <InfoBadge />
        Детальніше про фіксацію
      </button>
    </div>
  );
};