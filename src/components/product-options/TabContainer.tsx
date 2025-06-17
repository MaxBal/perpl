import React, { useState } from 'react';
import { Palette, Ruler, Image as ImageIcon, Magnet } from 'lucide-react';
import DesignSelector from './DesignSelector';
import SizeSelector   from './SizeSelector';
import LogoSelector   from './LogoSelector';
import { FixationSelector } from './FixationSelector';
import { ProductData } from './types';

const TAB_META = [
  { key: 'design', label: 'Дизайни', Icon: Palette },
  { key: 'size',   label: 'Розміри', Icon: Ruler },
  { key: 'logo',   label: 'Лого',    Icon: ImageIcon },
  { key: 'fixation', label: 'Фіксація', Icon: Magnet },
];

interface Props {
  product: ProductData;
  currentSize: string;
  setCurrentSize: (size: string) => void;
  logo: string;
  setLogo: (logo: string) => void;
  fixationMode: 'none' | 'with';
  setFixationMode: (mode: 'none' | 'with') => void;
  fixationSub: string[];
  toggleSubOption: (option: string) => void;
}

const TabContainer: React.FC<Props> = ({
  product,
  currentSize,
  setCurrentSize,
  logo,
  setLogo,
  fixationMode,
  setFixationMode,
  fixationSub,
  toggleSubOption,
}) => {
  const [activeTab, setActiveTab] = useState<'design' | 'size' | 'logo' | 'fixation'>('design');

  return (
    <div className="space-y-4">
      <div className="bg-gray-100 p-1 rounded-[18px] flex gap-1">
        {TAB_META.map(({ key, label, Icon }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key as any)}
            className={`flex-1 px-3 py-2.5 rounded-[14px] flex items-center justify-center gap-1 text-xs
              ${activeTab === key ? 'bg-white shadow' : 'hover:bg-white/50'}`}
          >
            <Icon 
              className={`w-4 h-4 shrink-0 ${activeTab === key ? 'text-[#00d1b3]' : ''}`} 
              strokeWidth={1.5}
            />
            {label}
          </button>
        ))}
      </div>

      {activeTab === 'design' && <DesignSelector product={product} />}
      {activeTab === 'size' && (
        <SizeSelector
          product={product}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
        />
      )}
      {activeTab === 'logo' && (
        <LogoSelector
          product={product}
          logo={logo}
          setLogo={setLogo}
        />
      )}
      {activeTab === 'fixation' && (
        <FixationSelector
          fixationMode={fixationMode}
          setFixationMode={setFixationMode}
          subOptions={fixationSub}
          toggleSubOption={toggleSubOption}
        />
      )}
    </div>
  );
};

export default TabContainer;