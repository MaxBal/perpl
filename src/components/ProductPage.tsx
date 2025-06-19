import React, { useState } from 'react';
import ProductGallery from './ProductGallery';
import ProductOptions from './product-options/ProductOptions';
import FeatureSection from './FeatureSection';
import { useCart } from '../context/CartContext';
import { Header } from './Header';
import { CartDrawer } from './CartDrawer';
import { MobileMenu } from './MobileMenu';
import { CartWatcher } from './CartWatcher';
import { GALLERY, PRODUCT, NAV_ITEMS } from '../data/constants';

const ProductPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items: cartItems, dispatch } = useCart();

  const showCart = () => {
    setIsCartOpen(true);
  };

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...PRODUCT,
        quantity: 1,
        options: `Автокейс Toyota з конфігурацією`,
      }
    });
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <CartWatcher />
      <Header
        navItems={NAV_ITEMS}
        totalQuantity={totalQuantity}
        onCartClick={showCart}
        onMenuClick={() => setIsMobileMenuOpen(true)}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
      />

      <div className="max-w-screen-xl mx-auto w-full md:px-6 grid md:grid-cols-12 md:gap-8 mt-0 md:mt-12">
        <ProductGallery images={GALLERY} />
        <ProductOptions 
          product={PRODUCT}
          onBuyNow={addToCart}
        />
      </div>

      <FeatureSection />

      {/* Simple cart overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center md:justify-center">
          <div className="bg-white w-full max-h-[80vh] md:max-w-md md:rounded-lg overflow-y-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">Кошик</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <CartDrawer items={cartItems} dispatch={dispatch} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;