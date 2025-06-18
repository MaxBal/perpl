import React from 'react'

export const DeliveryTab: React.FC = () => (
  <div className="rounded-md bg-gray-100 p-4 text-sm leading-relaxed">
    <p className="text-gray-700">
      Доставка здійснюється по всій Україні через Нову Пошту. Термін доставки 1–3 робочих дні. 
      Вартість доставки згідно тарифів перевізника.
    </p>
    <div className="mt-4 space-y-2">
      <h4 className="font-medium text-gray-900">Умови доставки:</h4>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Безкоштовна доставка при замовленні від 3000 ₴</li>
        <li>Доставка у відділення Нової Пошти</li>
        <li>Можливість доставки кур'єром за додаткову плату</li>
        <li>Упаковка товару в фірмову коробку</li>
      </ul>
    </div>
  </div>
)