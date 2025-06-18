import React from 'react';
import { Rocket } from 'lucide-react';
import { ProductData } from './types';

interface Props {
  product: ProductData;
  totalPrice: number;
  sku: string;
}

const ProductHeader: React.FC<Props> = ({ product, totalPrice, sku }) => {
  const oldPrice = 2600;

  return (
    <div className="flex flex-col gap-3">
      {/* Updated notification badge with gradient background, white text, and normal size */}
      <p className="inline-flex items-center gap-1 px-2 py-0.5
                     text-[13px] font-light
                     rounded-md border border-white/20
                     bg-gradient-to-r from-[#232526] to-[#414345] text-white w-fit mt-6 md:mt-0">
        <Rocket className="w-4 h-4 text-[#66d1be] icon-blink" />
        Відправимо сьогодні після 18:00
      </p>

      {/* Main title */}
      <h1 className="text-[25.6px] mobile:text-[25.6px] font-semibold leading-tight">
        Автокейс з&nbsp;лого&nbsp;Toyota
      </h1>

      {/* Dynamic SKU */}
      <p className="text-sm text-gray-500">
        {sku}
      </p>

      {/* Price section under H1 - aligned to left edge */}
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-semibold">{totalPrice} ₴</span>
        <span className="text-lg line-through text-gray-500">{oldPrice} ₴</span>
      </div>
    </div>
  );
};

export default ProductHeader;