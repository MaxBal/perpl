import React from 'react'

export const LoyaltyTab: React.FC = () => (
  <div className="rounded-md bg-gray-100 p-4 text-sm leading-relaxed">
    <div className="space-y-4">
      <div>
        <h4 className="font-medium text-gray-900 mb-3">💎 Програма лояльності</h4>
        <div className="space-y-3">
          <div className="bg-white p-3 rounded border-l-4 border-bronze">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-gray-900">Бронзовий рівень</span>
              <span className="text-xs text-gray-500">від 0 ₴</span>
            </div>
            <p className="text-xs text-gray-600">Базові умови покупки</p>
          </div>
          
          <div className="bg-white p-3 rounded border-l-4 border-gray-400">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-gray-900">Срібний рівень</span>
              <span className="text-xs text-gray-500">від 10000 ₴</span>
            </div>
            <p className="text-xs text-gray-600">Знижка 5% на всі товари</p>
          </div>
          
          <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-gray-900">Золотий рівень</span>
              <span className="text-xs text-gray-500">від 25000 ₴</span>
            </div>
            <p className="text-xs text-gray-600">Знижка 10% + пріоритетна доставка</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)