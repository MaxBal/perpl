import React from 'react';
import { Camera } from 'lucide-react';
import { LogoMaterial } from './types';
import { LOGOS } from '../../data/logos';

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
    <button
      onClick={onPhotoClick}
      className="flex items-center gap-2 text-sm hover:text-[#00d1b3] transition-colors"
    >
      <Camera className="w-4 h-4" />
      <img 
        src={logoData.thumb} 
        alt="" 
        className="w-6 h-6 rounded-full object-cover" 
      />
      <span className="font-medium">Лого {logoData.name} ({materialText})</span>
    </button>
  );
};

export default LogoPreview;