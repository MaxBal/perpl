import React, { useState } from 'react';
import { Palette, Ruler, Image as ImageIcon } from 'lucide-react';
import DesignSelector from './DesignSelector';
import SizeSelector   from './SizeSelector';
import LogoSelector   from './LogoSelector';
import { FixationSelector } from './FixationSelector';
import { FixationDots } from '../../icons/FixationDots';
import { ProductData } from './types';

const TAB_META = [
  { key: 'design', label: 'Дизайни', icon: Palette },
  { key: 'size',   label: 'Розміри', icon: Ruler },
  { key: 'logo',   label: 'Лого',    icon: ImageIcon },
  { key: 'fixation', label: 'Фіксація', icon: FixationDots },
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
        {TAB_META.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key as any)}
            className={`
              inline-flex items-center justify-center h-[40px] px-6
              font-medium rounded-[22px] transition-colors
              ${activeTab === key 
                ? 'text-black bg-white ring-1 ring-[#D0D0D0]' 
                : 'text-[#6C6C6C] bg-transparent hover:bg-white/40'
              }
            `}
          >
            {Icon && <Icon className="mr-2 h-4 w-4" stroke="currentColor" fill="none" />}
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