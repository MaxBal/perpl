import React from 'react';
import { useModal } from '../useModal';
import { ProductData } from './types';
import { InfoBadge } from '../ui/InfoBadge';
import LogoMaterialSelector from './LogoMaterialSelector';

interface Props {
  product: ProductData;
  logo: string;
  setLogo: (logo: string) => void;
  logoMaterial: 'brass' | 'steel';
  setLogoMaterial: (material: 'brass' | 'steel') => void;
}

const LogoSelector: React.FC<Props> = ({ product, logo, setLogo, logoMaterial, setLogoMaterial }) => {
  const modal = useModal();

  const showLogoInfo = () => {
    modal.open(
      'Детально про лого',
      <div className="space-y-4">
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-gray-700">
            Ми пропонуємо можливість додати фірмовий логотип вашого автомобільного бренду на автокейс.
            Логотипи виготовляються з високоякісних матеріалів та мають відмінну стійкість до зношування.
          </p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="font-medium mb-2">Доступні логотипи:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {product.logoOptions.map(option => (
              <li key={option}>{option}</li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="font-medium mb-2">Матеріали:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Нержавіюча сталь - класичний варіант з високою стійкістю</li>
            <li>Латунь - преміальний варіант з благородним відтінком</li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <LogoMaterialSelector 
        logoMaterial={logoMaterial}
        setLogoMaterial={setLogoMaterial}
      />
      
      <div className="rounded-[12px] border border-gray-200 px-4 py-2.5 w-full">
        <select
          value={logo}
          onChange={(e) => setLogo(e.target.value)}
          className="w-full bg-transparent outline-none text-sm"
        >
          {product.logoOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-14 md:mt-8">
        <button
          onClick={showLogoInfo}
          className="inline-flex items-center text-gray-900 underline hover:no-underline"
        >
          <InfoBadge />
          Детально про лого
        </button>
      </div>
    </div>
  );
};

export default LogoSelector;