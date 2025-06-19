import React, { useState } from "react";
import { NavItem } from "./types";
import { SelectorModal } from "../ui/SelectorModal";

interface Props {
  items: NavItem[];
}

const CircularNav: React.FC<Props> = ({ items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; content: React.ReactNode } | null>(null);

  const handleClick = (label: string) => {
    let content: React.ReactNode;
    
    switch (label) {
      case "Доставка":
        content = (
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Доставка здійснюється по всій Україні через Нову Пошту. Термін — 1-3 дні.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-sm mb-2">Умови доставки:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Безкоштовна доставка від 3000 ₴</li>
                <li>• Стандартна вартість доставки згідно тарифів НП</li>
                <li>• Можливість доставки до відділення або поштомату</li>
              </ul>
            </div>
          </div>
        );
        break;
      case "Оплата":
        content = (
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Ми пропонуємо зручні та безпечні способи оплати.
            </p>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-sm mb-2">Передоплата 300 ₴</h4>
                <p className="text-sm text-gray-600">
                  Сплачуєте частину вартості для підтвердження замовлення.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-sm mb-2">Повна передоплата</h4>
                <p className="text-sm text-gray-600">
                  Повна оплата замовлення на реквізити ФОП.
                </p>
              </div>
            </div>
          </div>
        );
        break;
      case "Обмін":
        content = (
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Ми гарантуємо якість нашої продукції та надаємо можливість обміну або повернення товару.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-sm mb-2">Умови обміну:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Термін обміну: 14 днів з моменту отримання</li>
                <li>• Товар має бути в оригінальній упаковці</li>
                <li>• Збережений товарний вигляд</li>
                <li>• Наявність документів про покупку</li>
              </ul>
            </div>
          </div>
        );
        break;
      case "Акції":
        content = (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-[#00d1b3]/10 to-[#00d1b3]/5 rounded-lg p-4 border border-[#00d1b3]/20">
              <h4 className="font-medium text-sm mb-2 text-[#00d1b3]">Діюча акція</h4>
              <p className="text-sm text-gray-700 font-medium">
                Знижка 20% на всі товари при замовленні від 5000 ₴
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-sm mb-2">Постійні пропозиції:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Безкоштовна доставка від 3000 ₴</li>
                <li>• Знижка 5% при повторному замовленні</li>
                <li>• Спеціальні ціни для оптових покупців</li>
              </ul>
            </div>
          </div>
        );
        break;
      case "Відгуки":
        content = (
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <span className="text-sm font-medium">Олександр К.</span>
                </div>
                <p className="text-sm text-gray-700">
                  "Чудовий автокейс! Якість матеріалів на високому рівні, все акуратно пошито."
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <span className="text-sm font-medium">Марія В.</span>
                </div>
                <p className="text-sm text-gray-700">
                  "Замовляла для Toyota Camry. Підійшов ідеально! Швидка доставка, гарна упаковка."
                </p>
              </div>
            </div>
          </div>
        );
        break;
      default:
        content = <p>Інформація недоступна</p>;
    }

    setModalContent({ title: label, content });
    setIsModalOpen(true);
  };

  return (
    <>
      {/* кружки */}
      <div className="flex gap-4">
        {items.map((it) => (
          <button
            key={it.label}
            onClick={() => handleClick(it.label)}
            className="flex flex-col items-center gap-2"
          >
            <div className="relative w-14 h-14">
              <div className="absolute inset-0 rounded-full border-[3px] border-[#e8e8e8]" />
              <div className="absolute inset-[3px] bg-white rounded-full">
                <div className="absolute inset-[3px] rounded-full overflow-hidden">
                  <img src={it.image} alt={it.label} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <span className="text-xs text-gray-600">{it.label}</span>
          </button>
        ))}
      </div>

      {/* Unified Modal */}
      <SelectorModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        title={modalContent?.title || ""}
      >
        {modalContent?.content}
      </SelectorModal>
    </>
  );
};

export default CircularNav;