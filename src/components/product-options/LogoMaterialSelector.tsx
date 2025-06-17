import React from 'react';

interface Props {
  logoMaterial: 'brass' | 'steel';
  setLogoMaterial: (material: 'brass' | 'steel') => void;
}

const MATERIALS = [
  { id: 'steel' as const, label: 'Нержавіюча сталь' },
  { id: 'brass' as const, label: 'Латунь' },
];

const LogoMaterialSelector: React.FC<Props> = ({ logoMaterial, setLogoMaterial }) => {
  return (
    <div className="space-y-2">
      <div className="flex gap-4">
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
            <div className={`
              h-4 w-4 rounded border-2 transition-colors
              ${logoMaterial === material.id 
                ? 'bg-[#00d1b3] border-[#00d1b3]' 
                : 'border-gray-400 bg-white'
              }
            `}>
              {logoMaterial === material.id && (
                <div className="w-2 h-2 bg-white rounded-sm absolute transform translate-x-[2px] translate-y-[2px]" />
              )}
            </div>
            <span className="text-[15px] select-none">{material.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default LogoMaterialSelector;