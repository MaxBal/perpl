import React from 'react';
import { Rocket } from 'lucide-react';
import { ProductData } from './types';

interface Props {
  product: ProductData;
  hasLogo: boolean;
  hasFixation: boolean;
  totalPrice: number;
}

const ProductHeader: React.FC<Props> = ({ product, hasLogo, hasFixation, totalPrice }) => {
  const oldPrice = 2600;

  return (
    <div className="flex flex-col gap-3">
      {/* Main title */}
      <h1 className="text-[25.6px] mobile:text-[25.6px] font-semibold leading-tight">
        Автокейс з&nbsp;лого&nbsp;Toyota
      </h1>

      {/* Notification badge aligned with H1 left edge and 5% larger */}
      <p className="inline-flex items-center gap-1 px-2 py-0.5
                     text-xs font-light
                     rounded-md border border-black/40
                     w-fit text-white scale-95"
         style={{ background: 'linear-gradient(to right, #232526, #414345)' }}>
        <Rocket className="w-3.5 h-3.5 text-[#66d1be] icon-blink" />
        Відправимо сьогодні після 18:00
      </p>

      {/* Article number */}
      <p className="text-sm text-gray-500">
        арт. L2.0.лого-метал.toyota.дно+стінка
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