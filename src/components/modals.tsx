import React from 'react';
import LogoModal from './LogoModal';

interface LogoModalsProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  material: "steel" | "brass";
  brandName: string;
  steelImage: string;
  brassImage: string;
  onAddLogo?: (material: "steel" | "brass") => void;
}

export const LogoModalSteel: React.FC<Omit<LogoModalsProps, 'material' | 'brassImage'>> = ({
  isOpen,
  onOpenChange,
  brandName,
  steelImage,
  onAddLogo
}) => (
  <LogoModal
    open={isOpen}
    onOpenChange={onOpenChange}
    material="steel"
    brandName={brandName}
    image={steelImage}
    onAddLogo={onAddLogo}
  />
);

export const LogoModalBrass: React.FC<Omit<LogoModalsProps, 'material' | 'steelImage'>> = ({
  isOpen,
  onOpenChange,
  brandName,
  brassImage,
  onAddLogo
}) => (
  <LogoModal
    open={isOpen}
    onOpenChange={onOpenChange}
    material="brass"
    brandName={brandName}
    image={brassImage}
    onAddLogo={onAddLogo}
  />
);