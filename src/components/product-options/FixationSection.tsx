import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { RadioItem } from '@/components/ui/radio-group';

interface Props {
  onFixationChange: (enabled: boolean, variant: 'floor' | 'wall' | 'both', price: number) => void;
}

const FixationSection: React.FC<Props> = ({ onFixationChange }) => {
  const [fixEnabled, setFixEnabled] = useState(false);
  const [fixVariant, setFixVariant] = useState<'floor' | 'wall' | 'both'>('floor');

  // Calculate price
  const fixPrice = !fixEnabled ? 0 : (fixVariant === 'both' ? 80 : 0);

  // Notify parent when state changes
  React.useEffect(() => {
    onFixationChange(fixEnabled, fixVariant, fixPrice);
  }, [fixEnabled, fixVariant, fixPrice, onFixationChange]);

  const handleSwitchChange = (checked: boolean) => {
    setFixEnabled(checked);
  };

  const handleVariantChange = (variant: 'floor' | 'wall' | 'both') => {
    setFixVariant(variant);
  };

  return (
    <div className="space-y-4">
      {/* Main toggle */}
      <label className="flex items-center justify-between mb-3">
        <span className="font-medium">Фіксація в багажнику</span>
        <Switch checked={fixEnabled} onCheckedChange={handleSwitchChange} />
      </label>

      {/* Options (only show if enabled) */}
      {fixEnabled && (
        <div className="space-y-3 pl-4 border-l-2 border-gray-100">
          <RadioItem 
            value="floor" 
            checked={fixVariant === 'floor'} 
            onCheckedChange={() => handleVariantChange('floor')}
          >
            на дні 0 ₴
          </RadioItem>
          
          <RadioItem 
            value="wall" 
            checked={fixVariant === 'wall'} 
            onCheckedChange={() => handleVariantChange('wall')}
          >
            на стінці 0 ₴
          </RadioItem>
          
          <RadioItem 
            value="both" 
            checked={fixVariant === 'both'} 
            onCheckedChange={() => handleVariantChange('both')}
          >
            дно + стінка 80 ₴
          </RadioItem>
        </div>
      )}
    </div>
  );
};

export default FixationSection;