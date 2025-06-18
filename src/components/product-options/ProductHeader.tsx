import React from 'react';
import { Magnet, Rocket } from 'lucide-react';
import { ProductData } from './types';

interface Props {
  product: ProductData;
  hasLogo: boolean;
  hasFixation: boolean;
  fixationPrice?: number;
}

const ProductHeader: React.FC<Props> = ({ product, hasLogo, hasFixation, fixationPrice = 0 }) => {
  const currentPrice = product.price + fixationPrice;
  const oldPrice = 2600;

  return (
    <div className="flex flex-col gap-3">
      {/* Badges above H1 - increased spacing and gap */}
      <div className="flex gap-4 mt-8 md:mt-8 flex-wrap">
        <span className="inline-flex items-center gap-1.5 bg-black text-white text-xs font-medium px-2 py-1 rounded-full transform scale-110 md:scale-105">
          <Magnet className="h-4 w-4 text-[#00d1b3] animate-pulse" strokeWidth={1.5} />
          Магнітна система
        </span>
        <span className="inline-flex items-center gap-1.5 bg-[#fe5e03]/20 text-[#fe5e03] text-xs font-medium px-2 py-1 rounded-full transform scale-110 md:scale-105">
          <Rocket className="h-4 w-4" strokeWidth={1.5} />
          В наявності
        </span>
      </div>

      {/* Main title */}
      <h1 className="text-[25.6px] mobile:text-[25.6px] font-semibold leading-tight">
        Автокейс з&nbsp;лого&nbsp;Toyota
      </h1>

      {/* Article number */}
      <p className="text-sm text-gray-500">
        арт. L2.0.лого-метал.toyota.дно+стінка
      </p>

      {/* Price section under H1 - aligned to left edge */}
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-semibold">{currentPrice} ₴</span>
        <span className="text-lg line-through text-gray-500">{oldPrice} ₴</span>
      </div>
    </div>
  );
};

export default ProductHeader;