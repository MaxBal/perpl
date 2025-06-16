import React, { useState } from 'react';
import { useModal } from '../useModal';
import { ProductData, NavItem } from './types';
import ProductHeader from './ProductHeader';
import TabContainer from './TabContainer';
import FixationSection from './FixationSection';
import CircularNav from './CircularNav';
import CTAButton from './CTAButton';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Доставка', image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { label: 'Оплата',   image: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { label: 'Обмін',    image: 'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { label: 'Акції',    image: 'https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=300' },
  { label: 'Відгуки',  image: 'https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg?auto=compress&cs=tinysrgb&w=300' }
];

interface Props {
  product: ProductData;
  currentSize: string;
  setCurrentSize: (size: string) => void;
  onBuyNow: () => void;
}

const ProductOptions: React.FC<Props> = ({
  product,
  currentSize,
  setCurrentSize,
  onBuyNow
}) => {
  const [activeTab, setActiveTab] = useState<'none' | 'with'>('none');
  const [selectedFixation, setSelectedFixation] = useState<string | null>(null);
  const [logo, setLogo] = useState(product.logoOptions[0]);

  return (
    <>
      {/* MOBILE */}
      <div className="md:hidden px-4 mt-4 mb-16">
        <div className="flex flex-col gap-[1.13rem]">
          <ProductHeader product={product} />
          <TabContainer
            product={product}
            currentSize={currentSize}
            setCurrentSize={setCurrentSize}
            logo={logo}
            setLogo={setLogo}
          />
          <div className="border-t border-gray-200 pt-4">
            <FixationSection
              product={product}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              selectedFixation={selectedFixation}
              setSelectedFixation={setSelectedFixation}
            />
          </div>
        </div>

        <div className="mt-6 -mx-4 px-4 overflow-x-auto pb-4">
          <div className="inline-flex gap-4 min-w-max">
            <CircularNav items={NAV_ITEMS} />
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <aside className="hidden md:block md:col-span-5 md:col-start-8 md:sticky md:top-24">
        <div className="rounded-2xl p-8 border border-gray-100 shadow-sm">
          <ProductHeader product={product} />
          
          <div className="flex flex-col gap-[1.6rem] mt-8">
            <TabContainer
              product={product}
              currentSize={currentSize}
              setCurrentSize={setCurrentSize}
              logo={logo}
              setLogo={setLogo}
            />
            <div className="border-t border-gray-200 pt-4">
              <FixationSection
                product={product}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                selectedFixation={selectedFixation}
                setSelectedFixation={setSelectedFixation}
              />
            </div>
          </div>

          <CTAButton product={product} onBuyNow={onBuyNow} />

          <div className="mt-6">
            <CircularNav items={NAV_ITEMS} />
          </div>
        </div>
      </aside>
    </>
  );
};

export default ProductOptions;