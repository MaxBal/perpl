import React, { useState, useCallback } from 'react';
import { ProductData, LogoMaterial, LogoOption } from './types';
import { InfoBadge } from '../ui/InfoBadge';
import { RadioItem } from '../ui/radio-group';
import { Select, SelectItem } from '../ui/select';
import { LOGOS } from '../../data/logos';
import LogoPreview from './LogoPreview';
import { LogoModalSteel, LogoModalBrass } from '../modals';

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

  // Find current logo data
  const currentLogoData = LOGOS.find(l => l.slug === logoBrand);

  const showLogoInfo = () => {
    // Show info modal logic here if needed
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

  const closeLogoModal = useCallback((open: boolean) => {
    setIsLogoModalOpen(open);
  }, []);

  const handleAddLogo = useCallback((material: "steel" | "brass") => {
    setLogoMaterial(material);
    setIsLogoModalOpen(false);
    console.log(`Adding ${material} logo for ${logoBrand}`);
  }, [setLogoMaterial, logoBrand]);

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

      {/* Premium Logo Modals */}
      {currentLogoData && (
        <>
          <LogoModalSteel
            isOpen={logoMaterial === 'steel' && isLogoModalOpen}
            onOpenChange={closeLogoModal}
            brandName={currentLogoData.name}
            steelImage={currentLogoData.imgSteel}
            onAddLogo={handleAddLogo}
          />
          
          <LogoModalBrass
            isOpen={logoMaterial === 'brass' && isLogoModalOpen}
            onOpenChange={closeLogoModal}
            brandName={currentLogoData.name}
            brassImage={currentLogoData.imgBrass}
            onAddLogo={handleAddLogo}
          />
        </>
      )}
    </div>
  );
};

export default LogoSelector;