import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { ProductData } from './types';

interface Props {
  product: ProductData;
  onBuyNow: () => void;
  fixationPrice?: number;
  className?: string;
}

const CTAButton: React.FC<Props> = ({ product, onBuyNow, fixationPrice = 0, className = "" }) => {
  const currentPrice = product.price + fixationPrice;
  const oldPrice = 2600;
  
  return (
    <button
      onClick={onBuyNow}
      className={`
        w-full flex items-center justify-center gap-2 py-4 
        bg-black hover:bg-gray-900 text-white rounded-full 
        transition-colors md:sticky md:bottom-8
        ${className}
      `}
    >
      <ShoppingCart className="h-5 w-5 mr-2 animate-pulse text-[#00d1b3]" />
      <span className="text-lg font-semibold">Купити</span>
      <span className="text-base font-bold">{currentPrice} ₴</span>
      <span className="text-xs line-through text-gray-300">{oldPrice} ₴</span>
    </button>
  );
};

export default CTAButton;