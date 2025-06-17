import React from 'react';
import { ProductData } from './types';

interface Props {
  product: ProductData;
  onBuyNow: () => void;
  fixationPrice?: number;
  className?: string;
}

const CTAButton: React.FC<Props> = ({ product, onBuyNow, fixationPrice = 0, className = "" }) => {
  const totalPrice = product.price + fixationPrice;
  const oldPrice = 2600; // Original price for strikethrough
  
  return (
    <button
      onClick={onBuyNow}
      className={`
        w-full py-4 bg-black hover:bg-gray-900 
        text-white font-semibold rounded-full 
        flex items-center justify-center gap-2 
        transition-colors md:sticky md:bottom-8
        ${className}
      `}
    >
      <span>Купити</span>
      <span className="ml-2 text-2xl font-bold">{totalPrice} ₴</span>
      <span className="ml-2 line-through text-gray-500">{oldPrice} ₴</span>
    </button>
  );
};

export default CTAButton;