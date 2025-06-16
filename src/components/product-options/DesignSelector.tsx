import React, { useState } from 'react';
import { useModal } from '../useModal';
import { ProductData } from './types';
import { InfoBadge } from '../ui/InfoBadge';

interface Props {
  product: ProductData;
}

const DesignSelector: React.FC<Props> = ({ product }) => {
  const [selectedDesign, setSelectedDesign] = useState('carzo2');
  const modal = useModal();

  const showDesignInfo = () => {
    modal.open(
      'Детально про дизайни',
      <div className="space-y-4">
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="font-medium mb-2">Carzo 2.0</h3>
          <p className="text-gray-700">Класичний дизайн з акцентом на функціональність та елегантність.</p>
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
    );
  };

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-3 gap-2">
        {['carzo2', 'carzo3', 'carzo4'].map((design, index) => (
          <button
            key={design}
            onClick={() => setSelectedDesign(design)}
            className={`
              px-4 py-2.5 rounded-[14px] text-sm transition-all
              ${selectedDesign === design
                ? 'bg-white border-2 border-[#00d1b3] shadow'
                : 'bg-white border border-gray-200 hover:bg-gray-50'
              }
            `}
          >
            Carzo {index + 2}.0
          </button>
        ))}
      </div>
      
      <button
        onClick={showDesignInfo}
        className="inline-flex items-center text-gray-900 underline hover:no-underline"
      >
        <InfoBadge />
        Детальніше про дизайни
      </button>
    </div>
  );
};

export default DesignSelector;