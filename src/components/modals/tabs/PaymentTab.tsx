import React from 'react'

export const PaymentTab: React.FC = () => (
  <div className="rounded-md bg-gray-100 p-4 text-sm leading-relaxed">
    <p className="text-gray-700 mb-4">
      Ми приймаємо оплату картою онлайн, готівкою при отриманні та безготівковий розрахунок для юридичних осіб.
    </p>
    <div className="space-y-3">
      <div>
        <h4 className="font-medium text-gray-900 mb-2">Способи оплати:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Оплата картою Visa/MasterCard онлайн</li>
          <li>Готівкою при отриманні в відділенні</li>
          <li>Накладений платіж через Нову Пошту</li>
          <li>Безготівковий розрахунок для ФОП та ТОВ</li>
        </ul>
      </div>
      <div className="bg-blue-50 p-3 rounded">
        <p className="text-blue-800 text-xs">
          💡 При оплаті онлайн діє знижка 2% від суми замовлення
        </p>
      </div>
    </div>
  </div>
)