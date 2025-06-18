import React, { useState } from 'react';
import { ProductData, NavItem } from './types';
import ProductHeader from './ProductHeader';
import TabContainer from './TabContainer';
import CircularNav from './CircularNav';
import CTAButton from './CTAButton';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Доставка', image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=300', modal: 'delivery' },
  { label: 'Оплата',   image: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=300', modal: 'payment' },
  { label: 'Обмін',    image: 'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=300', modal: 'exchange' },
  { label: 'Акції',    image: 'https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=300', modal: 'promo' },
  { label: 'Відгуки',  image: 'https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg?auto=compress&cs=tinysrgb&w=300', modal: 'reviews' }
];

interface Props {
  product: ProductData;
  currentSize: string;
  setCurrentSize: (size: string) => void;
  logo: string;
  setLogo: (logo: string) => void;
  logoMaterial: 'brass' | 'steel';
  setLogoMaterial: (material: 'brass' | 'steel') => void;
  hasLogo: boolean;
  fixation: 'yes' | 'no';
  setFixation: (value: 'yes' | 'no') => void;
  hasFixation: boolean;
  fixationMode: 'none' | 'with';
  setFixationMode: (mode: 'none' | 'with') => void;
  fixationSub: string[];
  toggleSubOption: (option: string) => void;
  fixationPrice?: number;
  onBuyNow: () => void;
}

const ProductOptions: React.FC<Props> = ({
  product,
  currentSize,
  setCurrentSize,
  logo,
  setLogo,
  logoMaterial,
  setLogoMaterial,
  hasLogo,
  fixation,
  setFixation,
  hasFixation,
  fixationMode,
  setFixationMode,
  fixationSub,
  toggleSubOption,
  fixationPrice = 0,
  onBuyNow
}) => {
  // Update fixation prop when mode changes
  React.useEffect(() => {
    setFixation(fixationMode === 'with' ? 'yes' : 'no');
  }, [fixationMode, setFixation]);

  const handleBuyNow = () => {
    // Pass fixation details to parent component
    onBuyNow();
  };

  return (
    <>
      {/* MOBILE */}
      <div className="md:hidden px-4 mt-4 mb-8">
        <div className="flex flex-col gap-[1.13rem]">
          <ProductHeader 
            product={product} 
            hasLogo={hasLogo}
            hasFixation={hasFixation}
          />
          <TabContainer
            product={product}
            currentSize={currentSize}
            setCurrentSize={setCurrentSize}
            logo={logo}
            setLogo={setLogo}
            logoMaterial={logoMaterial}
            setLogoMaterial={setLogoMaterial}
            fixationMode={fixationMode}
            setFixationMode={setFixationMode}
            fixationSub={fixationSub}
            toggleSubOption={toggleSubOption}
          />
          
          {/* Buy button directly under tabs */}
          <CTAButton 
            product={product} 
            onBuyNow={handleBuyNow} 
            fixationPrice={fixationPrice}
            className="mt-6" 
          />
        </div>

        {/* Circular navigation under buy button */}
        <div className="mt-6 -mx-4 px-4 overflow-x-auto pb-4">
          <div className="inline-flex gap-4 min-w-max">
            <CircularNav items={NAV_ITEMS} />
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <aside className="hidden md:block md:col-span-5 md:col-start-8 md:sticky md:top-24">
        <div className="rounded-2xl p-8 border border-gray-100 shadow-sm">
          <ProductHeader 
            product={product} 
            hasLogo={hasLogo}
            hasFixation={hasFixation}
          />
          
          <div className="flex flex-col gap-[1.6rem] mt-8">
            <TabContainer
              product={product}
              currentSize={currentSize}
              setCurrentSize={setCurrentSize}
              logo={logo}
              setLogo={setLogo}
              logoMaterial={logoMaterial}
              setLogoMaterial={setLogoMaterial}
              fixationMode={fixationMode}
              setFixationMode={setFixationMode}
              fixationSub={fixationSub}
              toggleSubOption={toggleSubOption}
            />
          </div>

          <CTAButton 
            product={product} 
            onBuyNow={handleBuyNow} 
            fixationPrice={fixationPrice}
            className="mt-8"
          />

          <div className="mt-6">
            <CircularNav items={NAV_ITEMS} />
          </div>
        </div>
      </aside>
    </>
  );
};

export default ProductOptions;