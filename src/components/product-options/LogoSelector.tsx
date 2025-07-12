import React, { useState, useCallback } from 'react';
import { ProductData, LogoMaterial, LogoOption } from './types';
import { InfoBadge } from '../ui/InfoBadge';
import { RadioItem } from '../ui/radio-group';
import { Select, SelectItem } from '../ui/select';
import { LOGOS } from '../../data/logos';
import LogoPreview from './LogoPreview';
import { Camera } from 'lucide-react';

import { ModalShell } from '../ModalShell';

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
    // Logo modal functionality will be handled by LogoPreview component
  }, []);

  const closeLogoModal = useCallback(() => {
    // Logo modal functionality will be handled by LogoPreview component
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
          className="w-full"
        >
          <SelectItem value="" disabled>
            <h3 className="text-sm font-semibold mb-4">Детально про лого</h3>
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
          <ModalShell
            trigger={
              <button className="inline-flex items-center text-gray-900 underline hover:no-underline">
                <InfoBadge />
                Детально про лого
              </button>
            }
            title="Детально про лого"
          >
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
          </ModalShell>
        ) : null}
      </div>

    </div>
  );
};

export default LogoSelector;