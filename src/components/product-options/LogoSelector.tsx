import React, { useState, useCallback } from 'react';
import { ProductData, LogoMaterial, LogoOption } from './types';
import { InfoBadge } from '../ui/InfoBadge';
import { RadioItem } from '../ui/radio-group';
import { Select, SelectItem } from '../ui/select';
import { LOGOS } from '../../data/logos';
import LogoPreview from './LogoPreview';
import { Camera } from 'lucide-react';

// Simple Logo Modal Component
const LogoModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  material: 'steel' | 'brass';
  brandName: string;
  image: string;
}> = ({ isOpen, onClose, material, brandName, image }) => {
  if (!isOpen) return null;

  const materialText = material === 'steel' ? 'нержавіюча сталь' : 'латунь';
  const title = `Лого ${brandName} (${materialText})`;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center md:justify-center">
      <div className="bg-white w-full max-h-[80vh] md:max-w-2xl md:rounded-lg overflow-y-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            ✕
          </button>
        </div>
        <div className="p-4">
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow mb-6">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-gray-600">
            Приклад розміщення логотипу {brandName} з матеріалу "{materialText}" на автокейсі. 
            Логотип виготовляється з високоякісних матеріалів та має відмінну стійкість до зношування.
          </p>
        </div>
      </div>
    </div>
  );
};

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
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  // Find current logo data
  const currentLogoData = LOGOS.find(l => l.slug === logoBrand);

  const showLogoInfo = () => {
    setIsInfoModalOpen(true);
  };

  const handleLogoMaterialChange = (value: LogoMaterial) => {
    setLogoMaterial(value);
    if (value === 'none') {
      setLogoBrand('');
    }
  };

  const openLogoModal = useCallback(() => {
    setIsLogoModalOpen(true);
  }, []);

  const closeLogoModal = useCallback(() => {
    setIsLogoModalOpen(false);
  }, []);

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

      {/* Logo Preview */}
      <LogoPreview
        logoMaterial={logoMaterial}
        logoBrand={logoBrand}
        onPhotoClick={openLogoModal}
      />

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
        ) : null}
      </div>

      {/* Logo Modal */}
      {currentLogoData && logoMaterial !== 'none' && (
        <LogoModal
          isOpen={isLogoModalOpen}
          onClose={closeLogoModal}
          material={logoMaterial === 'steel' ? 'steel' : 'brass'}
          brandName={currentLogoData.name}
          image={logoMaterial === 'steel' ? currentLogoData.imgSteel : currentLogoData.imgBrass}
        />
      )}

      {/* Info Modal */}
      {isInfoModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center md:justify-center">
          <div className="bg-white w-full max-h-[80vh] md:max-w-lg md:rounded-lg overflow-y-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">Детально про лого</h2>
              <button 
                onClick={() => setIsInfoModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Матеріали логотипу</h3>
                  <p className="text-gray-700">
                    Ми пропонуємо два преміальні матеріали для виготовлення логотипу: 
                    нержавіючу сталь та латунь. Обидва матеріали забезпечують довговічність 
                    та елегантний вигляд.
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Нержавіюча сталь (+280 ₴)</h3>
                  <p className="text-gray-700">
                    Сучасний та стійкий матеріал з матовим покриттям. 
                    Ідеально підходить для мінімалістичного дизайну.
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Латунь (+200 ₴)</h3>
                  <p className="text-gray-700">
                    Класичний матеріал з теплим золотистим відтінком. 
                    Надає автокейсу преміальний та розкішний вигляд.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoSelector;