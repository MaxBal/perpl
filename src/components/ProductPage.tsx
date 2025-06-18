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
  const [fixationMode, setFixationMode] = useState<'none' | 'with'>('none');
  const [fixationSub, setFixationSub] = useState<string[]>([]);
  const [selectedFixationType, setSelectedFixationType] = useState('none');
  const [material, setMaterial] = useState<'steel' | 'brass'>('brass');
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
    // Calculate prices
    const fixationPrice = selectedFixationType === 'combo' ? 80 : 0;
    const logoPrice = productConfig.logo ? (material === 'steel' ? 280 : 200) : 0;
    const totalPrice = PRODUCT.price + fixationPrice + logoPrice;
    
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...PRODUCT,
        price: totalPrice,
        quantity: 1,
        options: `Розмір: ${productConfig.currentSize}, Матеріал лого: ${material === 'brass' ? 'Латунь' : 'Нержавіюча сталь'}`,
        fixation: fixationMode,
        fixationDetails: fixationSub,
        designVersion: 'carzo2', // Default design
        fixationType: selectedFixationType
      }
    });
  };

  const toggleSubOption = (option: string) => {
    setSelectedFixationType(option);
    setFixationSub(prev => {
      // Clear previous selections and set new one
      if (option === 'none') {
        setFixationMode('none');
        return [];
      } else {
        setFixationMode('with');
        return [option];
      }
    });
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const fixationPrice = selectedFixationType === 'combo' ? 80 : 0;

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
            logoMaterial={material}
            setLogoMaterial={setMaterial}
            hasLogo={productConfig.hasLogo}
            fixation={productConfig.fixation}
            setFixation={productConfig.setFixation}
            hasFixation={productConfig.hasFixation}
            fixationMode={fixationMode}
            setFixationMode={setFixationMode}
            fixationSub={fixationSub}
            toggleSubOption={toggleSubOption}
            fixationPrice={fixationPrice}
            onBuyNow={addToCart}
          />
        </div>

        <FeatureSection />

        <Modal state={modal.state} onClose={modal.close} />
      </div>
    </ModalCtx.Provider>
  );
};

export default ProductPage;