import React from 'react';
import { Check } from 'lucide-react';

interface Props {
  logoMaterial: 'brass' | 'steel';
  setLogoMaterial: (material: 'brass' | 'steel') => void;
}

const MATERIALS = [
  { id: 'steel' as const, label: 'Нержавіюча сталь', price: 280 },
  { id: 'brass' as const, label: 'Латунь', price: 200 },
];

const LogoMaterialSelector: React.FC<Props> = ({ logoMaterial, setLogoMaterial }) => {
  return (
    <div className="space-y-2">
      <div className="flex flex-col gap-3 md:flex-row md:gap-4">
        {MATERIALS.map((material) => (
          <label key={material.id} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="logoMaterial"
              value={material.id}
              checked={logoMaterial === material.id}
              onChange={() => setLogoMaterial(material.id)}
              className="sr-only"
            />
            <span className={`
              h-4 w-4 rounded-sm border transition-colors flex items-center justify-center
              ${logoMaterial === material.id 
                ? 'bg-brand border-brand' 
                : 'border-gray-400 bg-white'
              }
            `}>
              {logoMaterial === material.id && (
                <Check className="h-3 w-3 text-white" strokeWidth={2} />
              )}
            </span>
            <span className="text-base select-none">
              {material.label} +{material.price} ₴
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default LogoMaterialSelector;