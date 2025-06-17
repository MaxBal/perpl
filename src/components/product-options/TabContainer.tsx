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
      <div className="flex gap-2 bg-[#F2F4F6] p-1 rounded-[28px]">
        {TAB_META.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key as any)}
            className={`
              inline-flex items-center justify-center h-[40px] px-6
              text-base font-medium rounded-[22px] transition-colors
              ${activeTab === key 
                ? 'text-black bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]' 
                : 'text-[#6C6C6C] bg-transparent hover:bg-white/40'
              }
            `}
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