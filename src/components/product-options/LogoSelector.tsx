import React from 'react';
import { Camera, Info } from 'lucide-react';
import { useModal } from '../useModal';
import { ProductData } from './types';
import { InfoBadge } from '../ui/InfoBadge';
import LogoMaterialSelector from './LogoMaterialSelector';
import { Select, SelectItem } from '../ui/select';
import { LOGOS, LogoItem } from '../../data/logos';
import LogoModal from '../LogoModal';

interface Props {
  product: ProductData;
  logo: string;
  setLogo: (logo: string) => void;
  logoMaterial: 'brass' | 'steel';
  setLogoMaterial: (material: 'brass' | 'steel') => void;
}

const LogoSelector: React.FC<Props> = ({ product, logo, setLogo, logoMaterial, setLogoMaterial }) => {
  const modal = useModal();

  // Calculate logo price based on material
  const logoPrice = logoMaterial === 'steel' ? 280 : 200;

  // Create logo options
  const logoOptions = [
    { label: 'без лого', value: '', display: 'без лого' },
    ...LOGOS.map(l => ({
      ...l,
      label: `${l.name} +${logoPrice} ₴`, // у списку
      value: l.slug,
      display: l.name                      // без ціни — для відображення під селектом
    }))
  ];

  // Find current logo data
  const currentLogo = logoOptions.find(opt => opt.value === logo);
  const currentLogoData = LOGOS.find(l => l.slug === logo);

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
            {LOGOS.map(logo => (
              <li key={logo.slug}>{logo.name}</li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="font-medium mb-2">Матеріали:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Нержавіюча сталь - класичний варіант з високою стійкістю (+280₴)</li>
            <li>Латунь - преміальний варіант з благородним відтінком (+200₴)</li>
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
      
      <Select value={logo} onValueChange={setLogo}>
        {logoOptions.map(option => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>

      {/* Details section */}
      <div className="mt-14 md:mt-8">
        {logo === '' ? (
          <button
            onClick={showLogoInfo}
            className="inline-flex items-center text-gray-900 underline hover:no-underline"
          >
            <InfoBadge />
            Детально про лого
          </button>
        ) : (
          currentLogoData && (
            <button
              onClick={() =>
                modal.open(
                  `Фото лого ${currentLogoData.name}`,
                  <LogoModal logo={currentLogoData} initial={logoMaterial} />
                )
              }
              className="flex items-center gap-2 text-sm hover:text-[#00d1b3] transition-colors"
            >
              <Camera className="w-4 h-4" />
              <img src={currentLogoData.thumb} alt="" className="w-6 h-6 rounded-full object-cover" />
              <span>{currentLogo?.display}</span>
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default LogoSelector;