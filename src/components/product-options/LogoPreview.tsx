import React from 'react';
import { Camera } from 'lucide-react';
import { LogoMaterial } from './types';
import { LOGOS } from '../../data/logos';
import { ModalShell } from '../ModalShell';

interface Props {
  logoMaterial: LogoMaterial;
  logoBrand: string;
  onPhotoClick: () => void;
}

const LogoPreview: React.FC<Props> = ({ logoMaterial, logoBrand, onPhotoClick }) => {
  if (logoMaterial === 'none' || !logoBrand) {
    return null;
  }

  const logoData = LOGOS.find(l => l.slug === logoBrand);
  if (!logoData) return null;

  const materialText = logoMaterial === 'steel' ? 'нержавіюча сталь' : 'латунь';

  return (
    <ModalShell
      trigger={
        <button className="flex items-center gap-2 text-sm hover:text-[#00d1b3] transition-colors">
          <Camera className="w-4 h-4" />
          <img 
            src={logoData.thumb} 
            alt="" 
            className="w-6 h-6 rounded-full object-cover" 
          />
          <span className="font-medium">Лого {logoData.name} ({materialText})</span>
        </button>
      }
      title={`Лого ${logoData.name} (${materialText})`}
    >
      <div className="space-y-4">
        <div className="aspect-video w-full rounded-xl overflow-hidden shadow">
          <img
            src={logoMaterial === 'steel' ? logoData.imgSteel : logoData.imgBrass}
            alt={`Лого ${logoData.name} (${materialText})`}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm text-gray-600">
          Приклад розміщення логотипу {logoData.name} з матеріалу "{materialText}" на автокейсі. 
          Логотип виготовляється з високоякісних матеріалів та має відмінну стійкість до зношування.
        </p>
      </div>
    </ModalShell>
  );
};

export default LogoPreview;