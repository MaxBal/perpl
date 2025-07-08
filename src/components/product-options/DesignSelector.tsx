import React, { useState } from 'react';
import { ProductData } from './types';
import { InfoBadge } from '../ui/InfoBadge';
import { ColorSwatches } from './ColorSwatches';
import { ColorCode } from './types';

// Simple modal component
const SimpleModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center md:justify-center">
      <div className="bg-white w-full max-h-[80vh] md:max-w-lg md:rounded-lg overflow-y-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            ✕
          </button>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

interface Props {
  product: ProductData;
  selectedDesign: string;
  setSelectedDesign: (design: string) => void;
  color?: ColorCode | null;
  setColor?: (color: ColorCode | null) => void;
}

const DESIGN_OPTIONS = [
  { id:'carzo1.0', label:'Carzo 1.0', colors:6 },
  { id:'carzo2.0', label:'Carzo 2.0', colors:1 },
  { id:'carzo3.0', label:'Carzo 3.0', colors:1 },
  { id:'carzo4.0', label:'Carzo 4.0', colors:1 },
];

const DesignSelector: React.FC<Props> = ({ 
  product, 
  selectedDesign, 
  setSelectedDesign,
  color,
  setColor 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isCarzo1 = selectedDesign === 'Carzo 1.0';

  const showDesignInfo = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        {DESIGN_OPTIONS.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedDesign(item.label)}
            className={`
              px-4 py-2.5 rounded-[12px] text-sm transition-all flex flex-col items-start
              ${selectedDesign === item.label
                ? 'bg-white border-2 border-[#00d1b3] shadow'
                : 'bg-white border border-gray-200 hover:bg-gray-50'
              }
            `}
          >
            <span className="font-semibold">{item.label}</span>
            <span className="text-sm text-gray-500">
              {item.colors} {item.colors === 1 ? 'колір' : 'кольорів'}
            </span>
          </button>
        ))}
      </div>
      
      {/* Color swatches for Carzo 1.0 */}
      {isCarzo1 && setColor && (
        <div className="mt-6">
          <ColorSwatches 
            value={color || null} 
            onChange={setColor} 
          />
        </div>
      )}
      
      <div className="mt-14 md:mt-8">
        <button
          onClick={showDesignInfo}
          className="inline-flex items-center text-gray-900 underline hover:no-underline"
        >
          <InfoBadge />
          Детальніше про дизайни
        </button>
      </div>

      <SimpleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Детально про дизайни"
      >
        <div className="space-y-4">
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="font-medium mb-2">Carzo 1.0</h3>
            <p className="text-gray-700">Базовий дизайн з 6 варіантами кольорів. Простий та функціональний.</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="font-medium mb-2">Carzo 2.0</h3>
            <p className="text-gray-700">Класічний дизайн з акцентом на функціональність та елегантність.</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="font-medium mb-2">Carzo 3.0</h3>
            <p className="text-gray-700">Сучасний дизайн з покращеною ергономікою та додатковими відділеннями.</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="font-medium mb-2">Carzo 4.0</h3>
            <p className="text-gray-700">Преміальний дизайн з інноваційною системою організації простору.</p>
          </div>
        </div>
      </SimpleModal>
    </div>
  );
};

export default DesignSelector;