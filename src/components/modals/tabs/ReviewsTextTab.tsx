import React from 'react'

export const ReviewsTextTab: React.FC = () => (
  <div className="space-y-4">
    <div className="bg-gray-100 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="font-medium">★★★★★</span>
        <span className="text-sm text-gray-600">5.0</span>
      </div>
      <p className="text-gray-700 mb-3 text-sm">
        Чудовий автокейс! Якість матеріалів на найвищому рівні. Магнітна система кріплення працює ідеально, 
        навіть на поворотах кейс залишається на місці. Рекомендую!
      </p>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Олександр К.</span>
        <span className="text-sm text-gray-500">15 січня 2025</span>
      </div>
    </div>
    
    <div className="bg-gray-100 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="font-medium">★★★★★</span>
        <span className="text-sm text-gray-600">5.0</span>
      </div>
      <p className="text-gray-700 mb-3 text-sm">
        I love this case! On top of the unique and eye catching material, access to needed supplies 
        in the trunk through organized compartments is super convenient. Great build quality!
      </p>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Adam U.</span>
        <span className="text-sm text-gray-500">Jan 7, 2025</span>
      </div>
    </div>

    <div className="bg-gray-100 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="font-medium">★★★★☆</span>
        <span className="text-sm text-gray-600">4.0</span>
      </div>
      <p className="text-gray-700 mb-3 text-sm">
        Гарний кейс, але доставка зайняла трохи більше часу ніж очікувалось. В цілому задоволена покупкою.
      </p>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Марія В.</span>
        <span className="text-sm text-gray-500">3 січня 2025</span>
      </div>
    </div>
  </div>
)