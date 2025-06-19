import React, { useState } from 'react';
import { ProductData, Size } from './types';
import { InfoBadge } from '../ui/InfoBadge';

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
  currentSize: Size;
  setCurrentSize: (size: Size) => void;
}

const SIZES = [
  { id: 'S' as Size, dimensions: 'S 40×30×30 см', price: 1690, oldPrice: 2000 },
  { id: 'M' as Size, dimensions: 'M 50×30×30 см', price: 2090, oldPrice: 2300 },
  { id: 'L' as Size, dimensions: 'L 60×30×30 см', price: 2290, oldPrice: 2600 },
  { id: 'XL' as Size, dimensions: 'XL 80×30×30 см', price: 2790, oldPrice: 3100 },
];

const SizeSelector: React.FC<Props> = ({ currentSize, setCurrentSize }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showSizeInfo = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2">
        {SIZES.map(size => (
          <button
            key={size.id}
            onClick={() => setCurrentSize(size.id)}
            className={`
              px-4 py-2.5 rounded-[12px] text-sm transition-all
              ${currentSize === size.id
                ? 'bg-white border-2 border-[#00d1b3] shadow'
                : 'bg-white border border-gray-200 hover:bg-gray-50'
              }
            `}
          >
            <div className="flex flex-col items-start">
              <span className="text-[13px] text-gray-500">{size.dimensions}</span>
              <div className="flex items-center mt-1">
                <span className="text-[15px] font-semibold text-gray-900">{size.price} ₴</span>
                {size.oldPrice && (
                  <span className="line-through text-gray-400 ml-1 text-[13px]">{size.oldPrice} ₴</span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-14 md:mt-8">
        <button
          onClick={showSizeInfo}
          className="inline-flex items-center text-gray-900 underline hover:no-underline"
        >
          <InfoBadge />
          Детально про розміри
        </button>
      </div>

      <SimpleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Детально про розміри"
      >
        <div className="space-y-4">
          {SIZES.map(size => (
            <div key={size.id} className="bg-gray-100 rounded-lg p-4">
              <h3 className="font-medium mb-2">Розмір {size.id}</h3>
              <p className="text-gray-700">
                Розміри: {size.dimensions}. Ідеально підходить для {
                  size.id === 'S' ? 'невеликих багажників' :
                  size.id === 'M' ? 'середніх багажників' :
                  size.id === 'L' ? 'великих багажників' :
                  'дуже великих багажників'
                }.
              </p>
            </div>
          ))}
        </div>
      </SimpleModal>
    </div>
  );
};

export default SizeSelector;