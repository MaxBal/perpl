import React from 'react'

export const PromoTab: React.FC = () => (
  <div className="rounded-md bg-gray-100 p-4 text-sm leading-relaxed">
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200">
        <h4 className="font-medium text-gray-900 mb-2">🎉 Поточні акції:</h4>
        <ul className="text-gray-700 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">-20%</span>
            <span>на всі товари при замовленні від 5000 ₴</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">🚚</span>
            <span>Безкоштовна доставка від 3000 ₴</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 font-bold">🎁</span>
            <span>Подарунок при замовленні від 7000 ₴</span>
          </li>
        </ul>
      </div>
      <div className="text-xs text-gray-500">
        * Акції не сумуються між собою. Діють до кінця місяця.
      </div>
    </div>
  </div>
)