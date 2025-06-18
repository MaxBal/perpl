import React from 'react';
import { useModal } from '../useModal';
import { ProductData, NavItem } from './types';
import ProductHeader from './ProductHeader';
import TabContainer from './TabContainer';
import CircularNav from './CircularNav';
import CTAButton from './CTAButton';
import { useProductOptions } from '../../hooks/useProductOptions';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Доставка', image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { label: 'Оплата',   image: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { label: 'Обмін',    image: 'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { label: 'Акції',    image: 'https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { label: 'Відгуки',  image: 'https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg?auto=compress&cs=tinysrgb&w=300' }
];

interface Props {
  product: ProductData;
  onBuyNow: () => void;
}

const ProductOptions: React.FC<Props> = ({ product, onBuyNow }) => {
  const { state, setSize, setLogoMaterial, setLogoBrand, setFixation, isValid } = useProductOptions({
    basePrice: product.price
  });

  const handleBuyNow = () => {
    if (isValid) {
      onBuyNow();
    }
  };

  const handleFixationChange = (enabled: boolean, variant: any) => {
    setFixation(enabled, variant);
  };

  return (
    <>
      {/* MOBILE */}
      <div className="md:hidden px-4 mt-4 mb-8">
        <div className="flex flex-col gap-[1.13rem]">
          <ProductHeader 
            product={product} 
            totalPrice={state.totalPrice}
            sku={state.sku}
          />
          <TabContainer
            product={product}
            size={state.size}
            setSize={setSize}
            logoMaterial={state.logoMaterial}
            setLogoMaterial={setLogoMaterial}
            logoBrand={state.logoBrand}
            setLogoBrand={setLogoBrand}
            fixEnabled={state.fixEnabled}
            fixVariant={state.fixVariant}
            onFixationChange={handleFixationChange}
          />
          
          {/* Buy button directly under tabs */}
          <CTAButton 
            product={product} 
            onBuyNow={handleBuyNow} 
            totalPrice={state.totalPrice}
            isValid={isValid}
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
            totalPrice={state.totalPrice}
            sku={state.sku}
          />
          
          <div className="flex flex-col gap-[1.6rem] mt-8">
            <TabContainer
              product={product}
              size={state.size}
              setSize={setSize}
              logoMaterial={state.logoMaterial}
              setLogoMaterial={setLogoMaterial}
              logoBrand={state.logoBrand}
              setLogoBrand={setLogoBrand}
              fixEnabled={state.fixEnabled}
              fixVariant={state.fixVariant}
              onFixationChange={handleFixationChange}
            />
          </div>

          <CTAButton 
            product={product} 
            onBuyNow={handleBuyNow} 
            totalPrice={state.totalPrice}
            isValid={isValid}
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