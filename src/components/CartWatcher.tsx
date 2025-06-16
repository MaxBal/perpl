import React, { useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { useModal } from './useModal';
import { CartDrawer } from './CartDrawer';

export const CartWatcher: React.FC = () => {
  const { items: cartItems, dispatch } = useCart();
  const { open } = useModal();
  const prevCount = useRef(cartItems.length);

  useEffect(() => {
    if (cartItems.length > prevCount.current) {
      open("Кошик", <CartDrawer items={cartItems} dispatch={dispatch} />);
    }
    prevCount.current = cartItems.length;
  }, [cartItems, open, dispatch]);

  return null;
};