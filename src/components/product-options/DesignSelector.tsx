import React, { useState } from 'react';
import ModalBase from "@/components/ui/ModalBase";
import { ProductData } from './types';
import { InfoBadge } from '../ui/InfoBadge';

interface Props {
  product: ProductData;
  selectedDesign: string;
  setSelectedDesign: (design: string) => void;
}

const DESIGN_OPTIONS = [
  { id:'carzo1.0', label:'Carzo 1.0', colors:6 },
  { id:'carzo2.0', label:'Carzo 2.0', colors:1 },
  { id:'carzo3.0', label:'Carzo 3.0', colors:1 },
  { id:'carzo4.0', label:'Carzo 4.0', colors:1 },
];

const DesignSelector: React.FC<Props> = ({ product, selectedDesign, setSelectedDesign }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              px-4 py-2.5 rounded-[12px] text-[15px] transition-all flex flex-col items-start
              ${selectedDesign === item.label
                ? 'bg-white border-2 border-[#00d1b3] shadow'
                : 'bg-white border border-gray-200 hover:bg-gray-50'
              }
            `}
          >
            <span className="font-normal">{item.label}</span>
            <span className="text-[15px] text-gray-500">
              {item.colors} {item.colors === 1 ? 'колір' : 'кольорів'}
            </span>
          </button>
        ))}
      </div>
      
      <div className="mt-14 md:mt-8">
        <button
          onClick={showDesignInfo}
          className="inline-flex items-center text-gray-900 underline hover:no-underline"
        >
          <InfoBadge />
          Детальніше про дизайни
        </button>
      </div>

      <ModalBase
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        title="Детально про дизайни"
      >
        <div className="space-y-4">
          <div className="bg-[#f8fafc] rounded-lg p-4">
            <h3 className="font-normal mb-2 text-[15px]">Carzo 1.0</h3>
            <p className="text-gray-700 text-[15px]">Базовий дизайн з 6 варіантами кольорів. Простий та функціональний.</p>
          </div>
          <div className="bg-[#f8fafc] rounded-lg p-4">
            <h3 className="font-normal mb-2 text-[15px]">Carzo 2.0</h3>
            <p className="text-gray-700 text-[15px]">Класічний дизайн з акцентом на функціональність та елегантність.</p>
          </div>
          <div className="bg-[#f8fafc] rounded-lg p-4">
            <h3 className="font-normal mb-2 text-[15px]">Carzo 3.0</h3>
            <p className="text-gray-700 text-[15px]">Сучасний дизайн з покращеною ергономікою та додатковими відділеннями.</p>
          </div>
          <div className="bg-[#f8fafc] rounded-lg p-4">
            <h3 className="font-normal mb-2 text-[15px]">Carzo 4.0</h3>
            <p className="text-gray-700 text-[15px]">Преміальний дизайн з інноваційною системою організації простору.</p>
          </div>
        </div>
      </ModalBase>
    </div>
  );
};

export default DesignSelector;