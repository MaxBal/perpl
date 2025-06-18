import React from 'react';
import { Truck, CreditCard, RefreshCw, Tag, Star } from 'lucide-react';

export const DeliveryContent: React.FC = () => (
  <div className="space-y-4">
    <div className="flex items-start gap-3">
      <Truck className="w-5 h-5 text-[#00d1b3] mt-0.5" />
      <div>
        <h3 className="font-medium mb-2">Доставка по Україні</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Доставка здійснюється через Нову Пошту по всій території України. 
          Термін доставки складає 1-3 робочих дні залежно від регіону.
        </p>
      </div>
    </div>
    
    <div className="bg-gray-50 rounded-lg p-4">
      <h4 className="font-medium text-sm mb-2">Умови доставки:</h4>
      <ul className="text-sm text-gray-600 space-y-1">
        <li>• Безкоштовна доставка від 3000 ₴</li>
        <li>• Стандартна вартість доставки згідно тарифів НП</li>
        <li>• Можливість доставки до відділення або поштомату</li>
        <li>• SMS повідомлення про статус замовлення</li>
      </ul>
    </div>
  </div>
);

export const PaymentContent: React.FC = () => (
  <div className="space-y-4">
    <div className="flex items-start gap-3">
      <CreditCard className="w-5 h-5 text-[#00d1b3] mt-0.5" />
      <div>
        <h3 className="font-medium mb-2">Способи оплати</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Ми пропонуємо зручні та безпечні способи оплати для вашого комфорту.
        </p>
      </div>
    </div>
    
    <div className="space-y-3">
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-medium text-sm mb-2">Передоплата 300 ₴</h4>
        <p className="text-sm text-gray-600">
          Сплачуєте частину вартості для підтвердження замовлення, 
          решту доплачуєте при отриманні.
        </p>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-medium text-sm mb-2">Повна передоплата</h4>
        <p className="text-sm text-gray-600">
          Повна оплата замовлення на реквізити ФОП після підтвердження менеджером.
        </p>
      </div>
    </div>
  </div>
);

export const ExchangeContent: React.FC = () => (
  <div className="space-y-4">
    <div className="flex items-start gap-3">
      <RefreshCw className="w-5 h-5 text-[#00d1b3] mt-0.5" />
      <div>
        <h3 className="font-medium mb-2">Обмін та повернення</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Ми гарантуємо якість нашої продукції та надаємо можливість 
          обміну або повернення товару.
        </p>
      </div>
    </div>
    
    <div className="bg-gray-50 rounded-lg p-4">
      <h4 className="font-medium text-sm mb-2">Умови обміну:</h4>
      <ul className="text-sm text-gray-600 space-y-1">
        <li>• Термін обміну: 14 днів з моменту отримання</li>
        <li>• Товар має бути в оригінальній упаковці</li>
        <li>• Збережений товарний вигляд</li>
        <li>• Наявність документів про покупку</li>
        <li>• Обмін за рахунок покупця (доставка)</li>
      </ul>
    </div>
  </div>
);

export const PromotionsContent: React.FC = () => (
  <div className="space-y-4">
    <div className="flex items-start gap-3">
      <Tag className="w-5 h-5 text-[#00d1b3] mt-0.5" />
      <div>
        <h3 className="font-medium mb-2">Акції та знижки</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Регулярно проводимо акції та пропонуємо знижки для наших клієнтів.
        </p>
      </div>
    </div>
    
    <div className="space-y-3">
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
  </div>
);

export const ReviewsContent: React.FC = () => (
  <div className="space-y-4">
    <div className="flex items-start gap-3">
      <Star className="w-5 h-5 text-[#00d1b3] mt-0.5" />
      <div>
        <h3 className="font-medium mb-2">Відгуки клієнтів</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Ось що кажуть наші клієнти про якість продукції та сервіс.
        </p>
      </div>
    </div>
    
    <div className="space-y-4">
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-sm font-medium">Олександр К.</span>
        </div>
        <p className="text-sm text-gray-700">
          "Чудовий автокейс! Якість матеріалів на високому рівні, 
          все акуратно пошито. Магнітна система кріплення працює відмінно."
        </p>
        <span className="text-xs text-gray-500 mt-2 block">15 грудня 2024</span>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-sm font-medium">Марія В.</span>
        </div>
        <p className="text-sm text-gray-700">
          "Замовляла для Toyota Camry. Підійшов ідеально! 
          Швидка доставка, гарна упаковка. Рекомендую!"
        </p>
        <span className="text-xs text-gray-500 mt-2 block">8 грудня 2024</span>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex text-yellow-400">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
            <Star className="w-4 h-4 text-gray-300" />
          </div>
          <span className="text-sm font-medium">Андрій М.</span>
        </div>
        <p className="text-sm text-gray-700">
          "Гарний кейс, але хотілося б більше кольорових варіантів. 
          В цілому задоволений покупкою."
        </p>
        <span className="text-xs text-gray-500 mt-2 block">2 грудня 2024</span>
      </div>
    </div>
  </div>
);