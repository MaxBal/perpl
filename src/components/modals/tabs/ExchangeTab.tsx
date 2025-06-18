import React from 'react'

export const ExchangeTab: React.FC = () => (
  <div className="rounded-md bg-gray-100 p-4 text-sm leading-relaxed">
    <p className="text-gray-700 mb-4">
      Обмін та повернення товару здійснюється протягом 14 днів після отримання. 
      Товар має бути неушкодженим та в оригінальній упаковці.
    </p>
    <div className="space-y-3">
      <div>
        <h4 className="font-medium text-gray-900 mb-2">Умови обміну:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Товар не використовувався</li>
          <li>Збережена оригінальна упаковка</li>
          <li>Наявність чека або підтвердження замовлення</li>
          <li>Відсутність слідів експлуатації</li>
        </ul>
      </div>
      <div className="bg-yellow-50 p-3 rounded">
        <p className="text-yellow-800 text-xs">
          ⚠️ Вартість зворотної доставки сплачує покупець
        </p>
      </div>
    </div>
  </div>
)