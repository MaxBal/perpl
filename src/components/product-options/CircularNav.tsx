import React, { useState } from 'react';
import { useModal } from '../useModal';
import { NavItem } from './types';
import { InfoModal } from '../InfoModal';
import { DeliveryTab } from '../tabs/DeliveryTab';

interface Props {
  items: NavItem[];
}

const CircularNav: React.FC<Props> = ({ items }) => {
  const modal = useModal();
  const [infoModalOpen, setInfoModalOpen] = useState(false);

  const handleNavItemClick = (label: string) => {
    // Only handle "Доставка" with InfoModal for now
    if (label === 'Доставка') {
      setInfoModalOpen(true);
      return;
    }

    // Keep existing modal logic for other items
    const modalContent = {
      'Оплата': (
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-gray-700">
            Ми приймаємо оплату картою онлайн, готівкою при отриманні та безготівковий розрахунок для юридичних осіб.
          </p>
        </div>
      ),
      'Обмін': (
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-gray-700">
            Обмін та повернення товару здійснюється протягом 14 днів після отримання. Товар має бути неушкодженим та в оригінальній упаковці.
          </p>
        </div>
      ),
      'Акції': (
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-gray-700">
            Знижка 20 % на всі товари при замовленні від 5000 ₴. Безкоштовна доставка при замовленні від 3000 ₴.
          </p>
        </div>
      ),
      'Відгуки': (
        <div className="space-y-4">
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-medium">★★★★★</span>
            </div>
            <p className="text-gray-700 mb-3">
              I love this jacket! On top of the unique and eye catching material print, access to needed supplies on the mountain through two quick kangaroo pockets is super convenient.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Adam u.</span>
              <span className="text-sm text-gray-500">Jan 7, 2025</span>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-medium">★★★★★</span>
            </div>
            <p className="text-gray-700 mb-3">
              Чудовий сервіс та якість. Обов'язково замовлю ще.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Марія</span>
              <span className="text-sm text-gray-500">5 січня 2025</span>
            </div>
          </div>
        </div>
      )
    };

    const content = modalContent[label as keyof typeof modalContent];
    
    if (content) {
      modal.open(label, content);
    }
  };

  // Prepare tabs for InfoModal (only delivery for now)
  const deliveryTabs = [
    {
      id: 'delivery',
      label: 'Доставка',
      node: <DeliveryTab />
    }
  ];

  return (
    <>
      <div className="flex gap-4">
        {items.map(item => (
          <button
            key={item.label}
            onClick={() => handleNavItemClick(item.label)}
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

      {/* InfoModal for Delivery */}
      <InfoModal
        open={infoModalOpen}
        onOpenChange={setInfoModalOpen}
        tabs={deliveryTabs}
        defaultTab="delivery"
      />
    </>
  );
};

export default CircularNav;