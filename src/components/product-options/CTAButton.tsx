import React from 'react';
import { ProductData } from './types';

interface Props {
  product: ProductData;
  onBuyNow: () => void;
}

const CTAButton: React.FC<Props> = ({ product, onBuyNow }) => {
  return (
    <button
      onClick={onBuyNow}
      className="
        w-full h-[52px] mt-6 
        bg-black hover:bg-gray-900 
        text-white font-semibold 
        rounded-full
        flex items-center justify-center gap-2 
        transition-colors
        md:sticky md:bottom-8
        fixed bottom-0 left-0 right-0 md:static
      "
    >
      <span>Купити</span>
      <span>{product.price} ₴</span>
    </button>
  );
};

export default CTAButton;