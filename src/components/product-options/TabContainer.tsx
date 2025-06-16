import React, { useState } from 'react';
import { Palette, Ruler, Image as ImageIcon } from 'lucide-react';
import DesignSelector from './DesignSelector';
import SizeSelector   from './SizeSelector';
import LogoSelector   from './LogoSelector';
import { ProductData } from './types';

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
        <button
          className={`flex-1 px-4 py-2.5 rounded-[14px] text-sm transition-colors flex items-center justify-center ${
            activeTab === 'design' ? 'bg-white shadow' : 'hover:bg-white/50'
          }`}
          onClick={() => setActiveTab('design')}
        >
          <Palette 
            className={`w-4 h-4 mr-1 ${activeTab === 'design' ? 'text-[#00d1b3]' : ''}`}
            strokeWidth={1.5}
          />
          Дизайни
        </button>

        <button
          className={`flex-1 px-4 py-2.5 rounded-[14px] text-sm transition-colors flex items-center justify-center ${
            activeTab === 'size' ? 'bg-white shadow' : 'hover:bg-white/50'
          }`}
          onClick={() => setActiveTab('size')}
        >
          <Ruler 
            className={`w-4 h-4 mr-1 ${activeTab === 'size' ? 'text-[#00d1b3]' : ''}`}
            strokeWidth={1.5}
          />
          Розміри
        </button>

        <button
          className={`flex-1 px-4 py-2.5 rounded-[14px] text-sm transition-colors flex items-center justify-center ${
            activeTab === 'logo' ? 'bg-white shadow' : 'hover:bg-white/50'
          }`}
          onClick={() => setActiveTab('logo')}
        >
          <ImageIcon 
            className={`w-4 h-4 mr-1 ${activeTab === 'logo' ? 'text-[#00d1b3]' : ''}`}
            strokeWidth={1.5}
          />
          Лого
        </button>
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