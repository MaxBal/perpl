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
  const totalPrice = product.price + fixationPrice;
  const originalPrice = 2600; // Original price for strikethrough

  return (
    <div className="flex flex-col gap-3">
      {/* Badges above H1 */}
      <div className="flex gap-2 flex-wrap">
        <span className="inline-flex items-center gap-1.5 bg-black text-white text-sm font-medium px-3 py-1.5 rounded-full">
          <Magnet className="h-4 w-4 text-[#00d1b3] animate-pulse" strokeWidth={1.5} />
          Магнітна система
        </span>
        <span className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1.5 rounded-full">
          <Rocket className="h-4 w-4" strokeWidth={1.5} />
          В наявності
        </span>
      </div>

      {/* Main title */}
      <h1 className="text-[25.6px] mobile:text-[25.6px] font-semibold leading-tight">
        Автокейс з&nbsp;лого&nbsp;Toyota
      </h1>

      {/* Article number */}
      <p className="text-xs text-gray-500">
        арт. L2.0.лого-метал.toyota.дно+стінка
      </p>

      {/* Price section */}
      <div className="flex items-baseline gap-3 mt-1">
        <span className="text-2xl font-bold text-gray-900">{totalPrice} ₴</span>
        <span className="text-sm text-gray-500 line-through">{originalPrice} ₴</span>
      </div>
    </div>
  );
};

export default ProductHeader;