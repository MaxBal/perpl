import React from 'react';
import { Switch } from '@/components/ui/switch';
import { RadioItem } from '@/components/ui/radio-group';
import { useToast } from '@/components/ui/toast';
import { FixVariant, FixationOption } from './types';

interface Props {
  fixEnabled: boolean;
  fixVariant: FixVariant;
  onFixationChange: (enabled: boolean, variant: FixVariant) => void;
}

const FIXATION_OPTIONS: FixationOption[] = [
  { label: 'фікс.на дні 0 ₴', value: 'floor', priceDelta: 0 },
  { label: 'фікс.на стінці 0 ₴', value: 'wall', priceDelta: 0 },
  { label: 'фікс.дно+стінка 80 ₴', value: 'both', priceDelta: 80 },
];

const FixationSection: React.FC<Props> = ({ fixEnabled, fixVariant, onFixationChange }) => {
  /** Магнітний тумблер (завжди true) */
  const [magnetLock, setMagnetLock] = React.useState(true);
  const { toast } = useToast();

  /** клік по «магнітному» тумблеру */
  const handleMagnetSwitchChange = (checked: boolean) => {
    if (!checked) {
      toast({
        title: 'Кейси з липучками ми ніколи не виготовляли.',
        description: `Ще на старті у 2021 році ми одразу вирішили: тільки магніти.
⠀
Це було інтуїтивне рішення — і досвід підтвердив його правильність.
За роки роботи ми десятки разів чули:
«Спершу купив кейс на липучках — згодом пожалкував. Де ви були раніше?»
⠀
Магніти — це акуратність, зручність і довговічність.
Тому опція з липучками просто не передбачена.`,
        duration: 0, // тост НЕ закрывается сам
      });
    }
    setMagnetLock(true); // повертаємо у ввімкнений стан
  };

  /** клік по «фіксація в багажнику» */
  const handleFixationSwitchChange = (checked: boolean) => {
    onFixationChange(checked, checked ? 'floor' : 'none');
  };

  /** вибір варіанта */
  const handleVariantChange = (variant: FixVariant) => {
    onFixationChange(true, variant);
  };

  return (
    <div className="space-y-4">
      {/* Магнітна система — перший рядок */}
      <label className="flex items-center justify-between mb-4">
        <span className="font-normal">Магнітна система фіксації кришки</span>
        <Switch
          checked={magnetLock}
          onCheckedChange={handleMagnetSwitchChange}
        />
      </label>

      {/* Перемикач фіксації в багажнику */}
      <label className="flex items-center justify-between mb-3">
        <span className="font-normal">Фіксація в багажнику</span>
        <Switch
          checked={fixEnabled}
          onCheckedChange={handleFixationSwitchChange}
        />
      </label>

      {/* Якщо вмикнено — показуємо варіанти */}
      {fixEnabled && (
        <div className="space-y-3 pl-4 border-l-2 border-gray-100">
          {FIXATION_OPTIONS.map(option => (
            <RadioItem
              key={option.value}
              value={option.value}
              checked={fixVariant === option.value}
              onCheckedChange={() => handleVariantChange(option.value)}
            >
              {option.label}
            </RadioItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default FixationSection;