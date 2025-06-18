import React from 'react';
import { Truck, CreditCard, RotateCcw, Percent, Star } from 'lucide-react';
import { useModal } from '../useModal';
import { NavItem } from './types';

interface Props {
  items: NavItem[];
}

const CircularNav: React.FC<Props> = ({ items }) => {
  const modal = useModal();

  const ICONS = [Truck, CreditCard, RotateCcw, Percent, Star];
  const LABELS = ['Доставка', 'Оплата', 'Обмін', 'Акції', 'Відгуки'];

  const handleNavItemClick = (label: string) => {
    const modalContent = {
      'Доставка': (
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-gray-700">
            Доставка здійснюється по всій Україні через Нову Пошту. Термін доставки 1–3 робочих дні. Вартість доставки згідно тарифів перевізника.
          </p>
        </div>
      ),
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

  return (
    <div className="flex gap-4">
      {ICONS.map((Icon, index) => (
        <button
          key={LABELS[index]}
          onClick={() => handleNavItemClick(LABELS[index])}
          className="flex flex-col items-center gap-2"
        >
          <div className="p-3 bg-[#f2f4f6] rounded-full">
            <Icon className="h-6 w-6 text-gray-600" />
          </div>
          <span className="text-xs text-gray-600">{LABELS[index]}</span>
        </button>
      ))}
    </div>
  );
};

export default CircularNav;