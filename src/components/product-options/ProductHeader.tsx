import React from 'react';
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
      {/* Shipping text before H1 */}
      <p className="mb-2 text-body-sm font-medium text-black mt-6 md:mt-0">
        Відправимо сьогодні після 18:00
      </p>

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
        <span className="text-2xl font-semibold">{totalPrice} ₴</span>
        <span className="text-lg line-through text-gray-500">{oldPrice} ₴</span>
      </div>
    </div>
  );
};

export default ProductHeader;