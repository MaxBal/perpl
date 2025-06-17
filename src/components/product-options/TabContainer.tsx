import React, { useState } from 'react';
import DesignSelector from './DesignSelector';
import SizeSelector   from './SizeSelector';
import LogoSelector   from './LogoSelector';
import { FixationSelector } from './FixationSelector';
import { ProductData } from './types';

const TAB_META = [
  { key: 'design', label: 'Дизайни' },
  { key: 'size',   label: 'Розміри' },
  { key: 'logo',   label: 'Лого' },
  { key: 'fixation', label: 'Фіксація' },
];

interface Props {
  product: ProductData;
  currentSize: string;
  setCurrentSize: (size: string) => void;
  logo: string;
  setLogo: (logo: string) => void;
  logoMaterial: 'brass' | 'steel';
  setLogoMaterial: (material: 'brass' | 'steel') => void;
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
  logoMaterial,
  setLogoMaterial,
  fixationMode,
  setFixationMode,
  fixationSub,
  toggleSubOption,
}) => {
  const [activeTab, setActiveTab] = useState<'design' | 'size' | 'logo' | 'fixation'>('design');

  return (
    <div className="space-y-4">
      <div className="bg-gray-100 p-1 rounded-[18px] flex gap-1">
        {TAB_META.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key as any)}
            className={`flex-1 px-3 py-2.5 rounded-[12px] flex items-center justify-center text-[15px] md:text-sm transition-colors
              ${activeTab === key 
                ? 'bg-white text-black border border-[#D0D0D0]' 
                : 'bg-transparent text-[#6C6C6C] hover:bg-white/50'
              }`}
          >
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
          logoMaterial={logoMaterial}
          setLogoMaterial={setLogoMaterial}
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