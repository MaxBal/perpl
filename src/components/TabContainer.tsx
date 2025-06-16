import React, { useState } from 'react';
import { Palette, Ruler, Image as ImageIcon } from 'lucide-react';
import DesignSelector from './DesignSelector';
import SizeSelector   from './SizeSelector';
import LogoSelector   from './LogoSelector';
import { ProductData } from './types';

const TAB_META = [
  { key: 'design', label: 'Дизайни', Icon: Palette },
  { key: 'size',   label: 'Розміри', Icon: Ruler },
  { key: 'logo',   label: 'Лого',    Icon: ImageIcon },
];

interface Props {
  product: ProductData;
  currentSize: string;
  setCurrentSize: (size: string) => void;
  logo: string;
  setLogo: (logo: string) => void;
}

const TabContainer: React.FC<Props> = ({
  product,
  currentSize,
  setCurrentSize,
  logo,
  setLogo,
}) => {
  const [activeTab, setActiveTab] = useState<'design' | 'size' | 'logo'>('design');

  return (
    <div className="space-y-4">
      <div className="bg-gray-100 p-1 rounded-[18px] flex gap-1">
        {TAB_META.map(({ key, label, Icon }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key as any)}
            className={`flex-1 px-4 py-2.5 rounded-[14px] flex items-center justify-center gap-1
              ${activeTab === key ? 'bg-white shadow' : 'hover:bg-white/50'}`}
          >
            <Icon className="w-4 h-4 shrink-0" strokeWidth={1.5}/>
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
    </div>
  );
};

export default TabContainer;