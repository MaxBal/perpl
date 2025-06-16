import React from 'react';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { ProductData } from './product-options/types';

interface CartItem extends ProductData {
  quantity: number;
  options?: string;
}

interface Props {
  items: CartItem[];
  dispatch: React.Dispatch<any>;
}

export const CartDrawer: React.FC<Props> = ({ items, dispatch }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <ShoppingBag size={48} className="mx-auto mb-4 text-gray-300" />
        <p className="text-gray-500">Ваш кошик порожній</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="w-20 h-20 rounded-lg overflow-hidden">
              <img 
                src={item.designs[0].image} 
                alt={item.name}
                width={80}
                height={80}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              {item.options && <p className="text-sm text-[#ADADAD]">{item.options}</p>}
              <div className="mt-2 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => dispatch({ type: "UPDATE_QUANTITY", id: item.id, quantity: item.quantity - 1 })}
                    className="w-6 h-6 flex items-center justify-center rounded-full border hover:bg-gray-100"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => dispatch({ type: "UPDATE_QUANTITY", id: item.id, quantity: item.quantity + 1 })}
                    className="w-6 h-6 flex items-center justify-center rounded-full border hover:bg-gray-100"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <button 
                  onClick={() => dispatch({ type: "REMOVE_FROM_CART", id: item.id })}
                  className="text-red-500 hover:text-red-600"
                  aria-label="Remove from cart"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">{item.price * item.quantity} ₴</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t pt-4">
        <div className="flex justify-between mb-4">
          <span>Всього</span>
          <span className="font-medium">
            {items.reduce((sum, item) => sum + item.price * item.quantity, 0)} ₴
          </span>
        </div>
        <a 
          href="/checkout"
          className="w-full h-12 bg-[#000000] hover:bg-gray-900 text-white font-medium rounded-full flex items-center justify-center transition-colors"
        >
          Оформити замовлення
        </a>
      </div>
    </div>
  );
};