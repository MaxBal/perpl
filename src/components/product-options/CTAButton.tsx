import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { ProductData } from './types';

interface Props {
  product: ProductData;
  onBuyNow: () => void;
  totalPrice: number;
  isValid: boolean;
  className?: string;
}

const CTAButton: React.FC<Props> = ({ product, onBuyNow, totalPrice, isValid, className = "" }) => {
  const oldPrice = 2600;
  
  return (
    <button
      onClick={onBuyNow}
      disabled={!isValid}
      className={`
        w-full flex items-center justify-center gap-2 py-3 
        ${isValid 
          ? 'bg-black hover:bg-gray-900 text-white' 
          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }
        rounded-full transition-colors md:sticky md:bottom-8
        ${className}
      `}
    >
      <ShoppingCart className="h-5 w-5 mr-2" />
      <span className="text-lg font-semibold md:text-base md:font-semibold">Купити</span>
      <span className="text-base font-bold md:text-sm md:font-bold">{totalPrice} ₴</span>
      <span className="text-xs line-through text-gray-300">{oldPrice} ₴</span>
    </button>
  );
};

export default CTAButton;