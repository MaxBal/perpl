import React, { useState } from 'react';
import DesignSelector from './DesignSelector';
import SizeSelector   from './SizeSelector';
import LogoSelector   from './LogoSelector';
import { FixationSelector } from './FixationSelector';
import { ColorSwatches } from './ColorSwatches';
import { ProductData, Size, LogoMaterial, FixVariant, ColorCode } from './types';

const TAB_META = [
  { key: 'design', label: 'Дизайни' },
  { key: 'size',   label: 'Розміри' },
  { key: 'logo',   label: 'Лого' },
  { key: 'fixation', label: 'Фіксація' },
];

interface Props {
  product: ProductData;
  design: string;
  setDesign: (design: string) => void;
  size: Size;
  setSize: (size: Size) => void;
  color: ColorCode | null;
  setColor: (color: ColorCode | null) => void;
  logoMaterial: LogoMaterial;
  setLogoMaterial: (material: LogoMaterial) => void;
  logoBrand: string;
  setLogoBrand: (brand: string) => void;
  fixEnabled: boolean;
  fixVariant: FixVariant;
  onFixationChange: (enabled: boolean, variant: FixVariant) => void;
}

const TabContainer: React.FC<Props> = ({
  product,
  design,
  setDesign,
  size,
  setSize,
  color,
  setColor,
  logoMaterial,
  setLogoMaterial,
  logoBrand,
  setLogoBrand,
  fixEnabled,
  fixVariant,
  onFixationChange,
}) => {
  const [activeTab, setActiveTab] = useState<'design' | 'size' | 'logo' | 'fixation'>('design');
  const isCarzo1 = design === 'Carzo 1.0';

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

      {activeTab === 'design' && (
        <DesignSelector 
          product={product} 
          selectedDesign={design}
          setSelectedDesign={setDesign}
          color={color}
          setColor={setColor}
        />
      )}
      {activeTab === 'size' && (
        <SizeSelector
          product={product}
          currentSize={size}
          setCurrentSize={setSize}
        />
      )}
      {activeTab === 'logo' && (
        <LogoSelector
          product={product}
          logoMaterial={logoMaterial}
          setLogoMaterial={setLogoMaterial}
          logoBrand={logoBrand}
          setLogoBrand={setLogoBrand}
        />
      )}
      {activeTab === 'fixation' && (
        <FixationSelector
          fixEnabled={fixEnabled}
          fixVariant={fixVariant}
          onFixationChange={onFixationChange}
        />
      )}
    </div>
  );
};

export default TabContainer;