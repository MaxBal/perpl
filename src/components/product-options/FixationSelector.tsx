import React from 'react';
import { useModal } from '../useModal';
import { InfoBadge } from '../ui/InfoBadge';

interface Props {
  fixationMode: 'none' | 'with';
  setFixationMode: (mode: 'none' | 'with') => void;
  subOptions: string[];
  toggleSubOption: (option: string) => void;
}

const FIX_OPTS = [
  { id:'none',    label:'Без фіксації', price:0 },
  { id:'floor',   label:'на дні',       price:0 },
  { id:'wall',    label:'на стінці',    price:0 },
  { id:'combo',   label:'дно + стінка', price:80 },
];

export const FixationSelector: React.FC<Props> = ({
  fixationMode,
  setFixationMode,
  subOptions,
  toggleSubOption
}) => {
  const modal = useModal();
  const [selectedOption, setSelectedOption] = React.useState('none');

  const handleOptionChange = (optionId: string) => {
    setSelectedOption(optionId);
    if (optionId === 'none') {
      setFixationMode('none');
      // Clear all sub options
      subOptions.forEach(opt => toggleSubOption(opt));
    } else {
      setFixationMode('with');
      // Clear previous selections and set new one
      subOptions.forEach(opt => toggleSubOption(opt));
      toggleSubOption(optionId);
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
            <li>На дні - базове кріплення до підлоги багажника</li>
            <li>На стінці - кріплення до бокової стінки</li>
            <li>Комбіноване - максимальна стабільність з доплатою 80₴</li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {FIX_OPTS.map(option => (
          <label
            key={option.id}
            className={`
              flex items-center justify-between p-4 rounded-md cursor-pointer transition-all
              ${selectedOption === option.id
                ? 'bg-white border-2 border-brand'
                : 'bg-gray-50 border border-transparent hover:bg-gray-100'
              }
            `}
          >
            <span className="text-sm">
              {option.label} {option.price > 0 ? `${option.price} ₴` : '0 ₴'}
            </span>
            <div className="relative">
              <input
                type="radio"
                name="fixation"
                value={option.id}
                checked={selectedOption === option.id}
                onChange={() => handleOptionChange(option.id)}
                className="sr-only"
              />
              <div className={`w-5 h-5 rounded-full border-2 transition-colors ${
                selectedOption === option.id 
                  ? 'border-brand bg-brand' 
                  : 'border-gray-300 bg-white'
              }`}>
                {selectedOption === option.id && (
                  <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                )}
              </div>
            </div>
          </label>
        ))}
      </div>

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