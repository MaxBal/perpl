import React from 'react';
import { GripHorizontal } from 'lucide-react';
import { useModal } from '../useModal';
import { ProductData } from './types';
import { InfoBadge } from '../ui/InfoBadge';
import { Badge } from '../ui/Badge';

interface Props {
  product: ProductData;
  activeTab: 'none' | 'with';
  setActiveTab: (tab: 'none' | 'with') => void;
  selectedFixation: string | null;
  setSelectedFixation: (fixation: string | null) => void;
  setFixation: (value: 'yes' | 'no') => void;
}

const FixationSection: React.FC<Props> = ({
  product,
  activeTab,
  setActiveTab,
  selectedFixation,
  setSelectedFixation,
  setFixation
}) => {
  const modal = useModal();
  
  const handleFixationChange = (value: string | null) => {
    setSelectedFixation(value);
    setFixation(value ? 'yes' : 'no');
  };

  const showFixationInfo = () => {
    modal.open(
      'Фіксація',
      <div className="bg-gray-100 rounded-lg p-4">
        <p className="text-gray-700">
          Система фіксації забезпечує надійне кріплення автокейса в багажнику. Доступні варіанти кріплення на дні, на стінці або комбіноване кріплення для максимальної стабільності.
        </p>
      </div>
    );
  };

  return (
    <div className="space-y-2">
      <Badge label="Фіксація з багажником на дні" variant="dark" />

      <div className="space-y-2">
        <div className="bg-gray-100 p-1 rounded-[18px] flex gap-1">
          <button
            onClick={() => {
              setActiveTab('none');
              handleFixationChange(null);
            }}
            className={`flex-1 px-4 py-2.5 rounded-[14px] text-sm transition-colors ${
              activeTab === 'none' ? 'bg-white shadow' : 'hover:bg-white/50'
            }`}
          >
            Без фіксації
          </button>
          <button
            onClick={() => setActiveTab('with')}
            className={`flex-1 px-4 py-2.5 rounded-[14px] text-sm transition-colors flex items-center justify-center ${
              activeTab === 'with' ? 'bg-white shadow' : 'hover:bg-white/50'
            }`}
          >
            <GripHorizontal 
              className={`w-4 h-4 mr-1 ${activeTab === 'with' ? 'text-[#00d1b3]' : ''}`}
              strokeWidth={1.5}
            />
            З фіксацією
          </button>
        </div>

        {activeTab === 'with' && (
          <div className="space-y-2 mt-2">
            <div className="space-y-3">
              {product.fixationOptions.map(option => (
                <label
                  key={option.id}
                  className="flex items-center justify-between p-3 rounded-[14px] border border-gray-200 cursor-pointer hover:border-gray-300 transition-colors"
                >
                  <span className="text-sm">{option.label}</span>
                  <div
                    className={`w-12 h-6 rounded-full p-1 transition-colors cursor-pointer ${
                      selectedFixation === option.id ? 'bg-[#00d1b3]' : 'bg-gray-200'
                    }`}
                    onClick={() => handleFixationChange(selectedFixation === option.id ? null : option.id)}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white transition-transform ${
                        selectedFixation === option.id ? 'translate-x-6' : ''
                      }`}
                    />
                  </div>
                </label>
              ))}
            </div>
            <button
              onClick={showFixationInfo}
              className="inline-flex items-center text-gray-900 underline hover:no-underline"
            >
              <InfoBadge />
              Детальніше про фіксацію
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FixationSection;