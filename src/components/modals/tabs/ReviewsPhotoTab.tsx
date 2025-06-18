import React from 'react'

export const ReviewsPhotoTab: React.FC = () => (
  <div className="space-y-4">
    <div className="bg-gray-100 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="font-medium">★★★★★</span>
        <span className="text-sm font-medium">Дмитро П.</span>
        <span className="text-sm text-gray-500">12 січня 2025</span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        <img 
          src="https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=300" 
          alt="Review photo 1" 
          className="w-full h-24 object-cover rounded"
        />
        <img 
          src="https://images.pexels.com/photos/892673/pexels-photo-892673.jpeg?auto=compress&cs=tinysrgb&w=300" 
          alt="Review photo 2" 
          className="w-full h-24 object-cover rounded"
        />
      </div>
      <p className="text-gray-700 text-sm">
        Ось як виглядає кейс в моєму багажнику. Ідеально підходить за розміром!
      </p>
    </div>

    <div className="bg-gray-100 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="font-medium">★★★★★</span>
        <span className="text-sm font-medium">Анна С.</span>
        <span className="text-sm text-gray-500">8 січня 2025</span>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        <img 
          src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=300" 
          alt="Review photo 3" 
          className="w-full h-20 object-cover rounded"
        />
        <img 
          src="https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=300" 
          alt="Review photo 4" 
          className="w-full h-20 object-cover rounded"
        />
        <img 
          src="https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=300" 
          alt="Review photo 5" 
          className="w-full h-20 object-cover rounded"
        />
      </div>
      <p className="text-gray-700 text-sm">
        Детальні фото якості матеріалів та фурнітури. Все на найвищому рівні! 👌
      </p>
    </div>
  </div>
)