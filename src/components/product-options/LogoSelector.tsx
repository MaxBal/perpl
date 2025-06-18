import React from 'react';
import { Camera } from 'lucide-react';
import { useModal } from '../useModal';
import { ProductData, LogoMaterial, LogoOption } from './types';
import { InfoBadge } from '../ui/InfoBadge';
import { RadioItem } from '../ui/radio-group';
import { Select, SelectItem } from '../ui/select';
import { LOGOS } from '../../data/logos';
import LogoModal from '../LogoModal';

interface Props {
  product: ProductData;
  logoMaterial: LogoMaterial;
  setLogoMaterial: (material: LogoMaterial) => void;
  logoBrand: string;
  setLogoBrand: (brand: string) => void;
}

const LOGO_OPTIONS: LogoOption[] = [
  { label: 'Без лого', value: 'none', priceDelta: 0 },
  { label: 'З лого (нержавіюча сталь) +280 ₴', value: 'steel', priceDelta: 280 },
  { label: 'З лого (латунь) +200 ₴', value: 'brass', priceDelta: 200 },
];

const LogoSelector: React.FC<Props> = ({ 
  product, 
  logoMaterial, 
  setLogoMaterial, 
  logoBrand, 
  setLogoBrand 
}) => {
  const modal = useModal();

  // Find current logo data
  const currentLogoData = LOGOS.find(l => l.slug === logoBrand);

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

  const handleLogoMaterialChange = (value: LogoMaterial) => {
    setLogoMaterial(value);
  };

  return (
    <div className="space-y-4">
      {/* Logo Material Radio Group */}
      <div className="space-y-3">
        {LOGO_OPTIONS.map(option => (
          <RadioItem
            key={option.value}
            value={option.value}
            checked={logoMaterial === option.value}
            onCheckedChange={() => handleLogoMaterialChange(option.value)}
          >
            {option.label}
          </RadioItem>
        ))}
      </div>

      {/* Brand Select - only shown when logoMaterial !== 'none' */}
      <div className="space-y-2">
        <Select 
          value={logoBrand} 
          onValueChange={setLogoBrand}
          disabled={logoMaterial === 'none'}
        >
          <SelectItem value="" disabled>
            {logoMaterial === 'none' ? 'без лого' : 'Оберіть марку авто'}
          </SelectItem>
          {LOGOS.map(logo => (
            <SelectItem key={logo.slug} value={logo.slug}>
              {logo.name}
            </SelectItem>
          ))}
        </Select>
      </div>

      {/* Details section */}
      <div className="mt-14 md:mt-8">
        {logoMaterial === 'none' ? (
          <button
            onClick={showLogoInfo}
            className="inline-flex items-center text-gray-900 underline hover:no-underline"
          >
            <InfoBadge />
            Детально про лого
          </button>
        ) : (
          currentLogoData && logoBrand && (
            <button
              onClick={() =>
                modal.open(
                  `Фото лого ${currentLogoData.name}`,
                  <LogoModal logo={currentLogoData} initial={logoMaterial === 'steel' ? 'steel' : 'brass'} />
                )
              }
              className="flex items-center gap-2 text-sm hover:text-[#00d1b3] transition-colors"
            >
              <Camera className="w-4 h-4" />
              <img src={currentLogoData.thumb} alt="" className="w-6 h-6 rounded-full object-cover" />
              <span>{currentLogoData.name}</span>
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default LogoSelector;