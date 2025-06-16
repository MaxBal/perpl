import React, { useState } from 'react';
import ProductGallery from './ProductGallery';
import ProductOptions from './product-options/ProductOptions';
import FeatureSection from './FeatureSection';
import Modal from './Modal';
import { ModalCtx, useModalProvider } from './useModal';
import { useCart } from '../context/CartContext';
import { Header } from './Header';
import { CartDrawer } from './CartDrawer';
import { MobileMenu } from './MobileMenu';
import { CartWatcher } from './CartWatcher';
import { useProductConfig } from '../hooks/useProductConfig';
import { GALLERY, PRODUCT, NAV_ITEMS } from '../data/constants';

const ProductPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const modal = useModalProvider();
  const { items: cartItems, dispatch } = useCart();
  const productConfig = useProductConfig();

  const showCart = () => {
    modal.open(
      "Кошик",
      <CartDrawer items={cartItems} dispatch={dispatch} />
    );
  };

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...PRODUCT,
        quantity: 1,
        options: `Розмір: ${productConfig.currentSize}`
      }
    });
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <ModalCtx.Provider value={modal}>
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
            currentSize={productConfig.currentSize}
            setCurrentSize={productConfig.setCurrentSize}
            logo={productConfig.logo}
            setLogo={productConfig.setLogo}
            hasLogo={productConfig.hasLogo}
            fixation={productConfig.fixation}
            setFixation={productConfig.setFixation}
            hasFixation={productConfig.hasFixation}
            onBuyNow={addToCart}
          />
        </div>

        <FeatureSection />

        <div
          className="
            md:hidden
            fixed inset-x-0 bottom-0
            bg-white border-t border-gray-200
            px-4 pt-2
            flex items-center justify-center
            z-40
          "
          style={{
            paddingBottom: "calc(env(safe-area-inset-bottom) + 0.5rem)"
          }}
        >
          <button 
            onClick={addToCart}
            className="
              flex-1 h-[48px]
              rounded-full bg-black hover:bg-gray-900
              text-white font-semibold
              flex items-center justify-center gap-2
              transition-colors
            "
          >
            <span>Купити</span>
            <span className="w-px h-4 bg-white/60" />
            <span>2090 ₴</span>
            <span className="text-xs text-[#ADADAD] line-through">2600 ₴</span>
          </button>
        </div>

        <Modal state={modal.state} onClose={modal.close} />
      </div>
    </ModalCtx.Provider>
  );
};

export default ProductPage;