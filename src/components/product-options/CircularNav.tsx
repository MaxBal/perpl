import React, { useState } from 'react';
import { NavItem } from './types';
import { InfoModal, TabSpec } from '../modals/InfoModal';
import { DeliveryTab } from '../modals/tabs/DeliveryTab';
import { PaymentTab } from '../modals/tabs/PaymentTab';
import { ExchangeTab } from '../modals/tabs/ExchangeTab';
import { PromoTab } from '../modals/tabs/PromoTab';
import { LoyaltyTab } from '../modals/tabs/LoyaltyTab';
import { ReviewsTextTab } from '../modals/tabs/ReviewsTextTab';
import { ReviewsPhotoTab } from '../modals/tabs/ReviewsPhotoTab';

interface Props {
  items: NavItem[];
}

const CircularNav: React.FC<Props> = ({ items }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTabs, setModalTabs] = useState<TabSpec[]>([]);
  const [defaultTab, setDefaultTab] = useState('');

  const handleNavItemClick = (modal: string) => {
    switch (modal) {
      case 'delivery':
        setModalTabs([
          { id: 'delivery', label: 'Доставка', node: <DeliveryTab /> },
          { id: 'payment', label: 'Оплата', node: <PaymentTab /> },
          { id: 'exchange', label: 'Обмін', node: <ExchangeTab /> },
        ]);
        setDefaultTab('delivery');
        break;
      
      case 'payment':
        setModalTabs([
          { id: 'delivery', label: 'Доставка', node: <DeliveryTab /> },
          { id: 'payment', label: 'Оплата', node: <PaymentTab /> },
          { id: 'exchange', label: 'Обмін', node: <ExchangeTab /> },
        ]);
        setDefaultTab('payment');
        break;
      
      case 'exchange':
        setModalTabs([
          { id: 'delivery', label: 'Доставка', node: <DeliveryTab /> },
          { id: 'payment', label: 'Оплата', node: <PaymentTab /> },
          { id: 'exchange', label: 'Обмін', node: <ExchangeTab /> },
        ]);
        setDefaultTab('exchange');
        break;
      
      case 'promo':
        setModalTabs([
          { id: 'promo', label: 'Акції', node: <PromoTab /> },
          { id: 'loyalty', label: 'Програма лояльності', node: <LoyaltyTab /> },
        ]);
        setDefaultTab('promo');
        break;
      
      case 'reviews':
        setModalTabs([
          { id: 'text', label: 'Текстові відгуки', node: <ReviewsTextTab /> },
          { id: 'photo', label: 'Фото відгуки', node: <ReviewsPhotoTab /> },
        ]);
        setDefaultTab('text');
        break;
      
      default:
        return;
    }
    
    setModalOpen(true);
  };

  return (
    <>
      <div className="flex gap-4">
        {items.map(item => (
          <button
            key={item.label}
            onClick={() => item.modal && handleNavItemClick(item.modal)}
            className="flex flex-col items-center gap-2"
          >
            <div className="relative w-14 h-14">
              <div className="absolute inset-0 rounded-full border-[3px] border-[#e8e8e8]" />
              <div className="absolute inset-[3px] bg-white rounded-full">
                <div className="absolute inset-[3px] rounded-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <span className="text-xs text-gray-600">{item.label}</span>
          </button>
        ))}
      </div>

      <InfoModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        tabs={modalTabs}
        defaultTab={defaultTab}
      />
    </>
  );
};

export default CircularNav;