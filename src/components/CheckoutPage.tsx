import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  options?: string;
}

const CheckoutPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    phone: '',
    city: '',
    npOffice: '',
    payment: 'prepaid',
    contact: 'phone'
  });

  useEffect(() => {
    setCartItems([
      {
        id: 1,
        name: "Автокейс Toyota",
        price: 2090,
        quantity: 1,
        image: "https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg",
        options: "Розмір: L"
      }
    ]);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', { formData, cartItems });
    alert('Замовлення оформлено!');
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <header className="bg-white border-b">
        <div className="max-w-[1080px] mx-auto px-4 h-14 flex items-center">
          <a href="/" className="flex items-center gap-2 text-gray-800 hover:text-gray-600">
            <ArrowLeft size={20} />
            <span>Повернутися до магазину</span>
          </a>
        </div>
      </header>

      <main className="max-w-[1080px] mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="grid md:grid-cols-[1fr,400px] gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-[15px] font-medium mb-4">Дані отримувача</h2>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Прізвище"
                    required
                    className="h-10 px-3 rounded border border-gray-300 text-sm focus:ring-1 focus:ring-[#00d1b3] focus:border-[#00d1b3]"
                  />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Ім'я"
                    required
                    className="h-10 px-3 rounded border border-gray-300 text-sm focus:ring-1 focus:ring-[#00d1b3] focus:border-[#00d1b3]"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Номер телефону"
                  required
                  className="w-full h-10 px-3 rounded border border-gray-300 text-sm focus:ring-1 focus:ring-[#00d1b3] focus:border-[#00d1b3]"
                />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Місто"
                  required
                  className="w-full h-10 px-3 rounded border border-gray-300 text-sm focus:ring-1 focus:ring-[#00d1b3] focus:border-[#00d1b3]"
                />
                <input
                  type="text"
                  name="npOffice"
                  value={formData.npOffice}
                  onChange={handleInputChange}
                  placeholder="Номер відділення НП"
                  required
                  className="w-full h-10 px-3 rounded border border-gray-300 text-sm focus:ring-1 focus:ring-[#00d1b3] focus:border-[#00d1b3]"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-[15px] font-medium mb-4">Спосіб оплати</h2>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input 
                    type="radio" 
                    name="payment" 
                    value="prepaid"
                    checked={formData.payment === 'prepaid'}
                    onChange={handleInputChange}
                    className="text-[#00d1b3]" 
                  />
                  <span className="text-sm">Оплата предоплати 300 грн</span>
                </label>
                <label className="flex items-center gap-3">
                  <input 
                    type="radio" 
                    name="payment" 
                    value="full"
                    checked={formData.payment === 'full'}
                    onChange={handleInputChange}
                    className="text-[#00d1b3]" 
                  />
                  <span className="text-sm">Повна оплата</span>
                </label>
                <p className="text-xs text-gray-500 mt-2">
                  Оплата здійснюється на реквізити ФОП після підтвердження менеджером.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-[15px] font-medium mb-4">Спосіб зв'язку</h2>
              <select
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                className="w-full h-10 px-3 rounded border border-gray-300 text-sm focus:ring-1 focus:ring-[#00d1b3] focus:border-[#00d1b3] bg-white"
              >
                <option value="phone">зателефонуйте мені</option>
                <option value="viber">напишіть одразу в viber</option>
                <option value="telegram">напишіть одразу в telegram</option>
              </select>
              <p className="text-xs text-gray-500 mt-2">
                Зателефонувати а вже потім надіслати реквізити для оплати або ж одразу надіслати в месенджер. Оберіть те, що зручно саме вам
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
            <h2 className="text-[15px] font-medium mb-4">Ваше замовлення</h2>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-16 rounded overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    {item.options && <p className="text-xs text-gray-500">{item.options}</p>}
                    <div className="mt-1">
                      <span className="text-xs text-gray-500">
                        {item.quantity} × {item.price} ₴
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{item.price * item.quantity} ₴</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between mb-4">
                <span className="text-sm">Всього</span>
                <span className="font-medium">{total} ₴</span>
              </div>
              <button 
                type="submit"
                className="w-full h-10 bg-[#000000] hover:bg-gray-900 text-white font-medium rounded-full text-sm"
              >
                Підтвердити замовлення
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CheckoutPage;